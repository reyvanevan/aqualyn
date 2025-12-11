# Firestore Integration Strategy

## 📋 Overview
Hybrid approach menggunakan Firestore sebagai primary database dengan in-memory caching untuk performance optimization.

---

## 🗄️ Database Structure

### Collections Overview

#### 1. **users** (58 documents)
Primary user data collection
```javascript
{
  nomor: "6281224258870",          // Phone number (also document ID)
  role: "GOLD",                     // User tier: GOLD, SILVER, BRONZE
  saldo: 46015,                     // User balance in IDR
  jumlah_transaksi_sukses: 181,    // Count of successful transactions
  total_spend: 5000000,             // Total money spent
  lastOrderTime: Timestamp          // Last transaction timestamp
}
```

**Usage:**
- Check user role/tier
- Validate balance before transaction
- Track user activity
- Manage loyalty program

---

#### 2. **transactions** (36 documents)
Active/pending transaction records
```javascript
{
  nomor: "6281224258870",          // Customer phone
  ref_id: "ATLAN01160719",         // Unique transaction ID
  metode: "QRIS",                   // Payment method
  product_name: "Mobile Legends 100 Diamond",
  tujuan: "123456789",              // Target user ID/account
  harga_jual: 25000,                // Selling price
  kode_unik: 123,                   // Unique payment code
  total_bayar: 25123,               // Total with unique code
  harga_pokok: 23000,               // Base/cost price
  dibuat_pada: Timestamp,           // Created at
  kedaluwarsa_pada: Timestamp,      // Expires at
  messageKey: {...},                // WhatsApp message reference
  sku: "MLBB100",                   // Product SKU code
  sn: "SN123456",                   // Serial number (if applicable)
  status: "pending"                 // pending, success, failed, expired
}
```

**Usage:**
- Track pending payments
- Handle payment confirmations
- Manage order fulfillment
- Timeout expired transactions

---

#### 3. **history_trx** (275 documents)
Complete transaction history/archive
```javascript
{
  nomor: "6281224258870",          // Customer phone
  invoice: "ATLAN01021527",        // Transaction invoice
  produk: "slbasic",                // Product code
  tipe: "topup",                    // Transaction type
  tujuan: "123456789",              // Target ID
  harga: 25000,                     // Unit price
  jumlah: 1,                        // Quantity
  total: 25000,                     // Total amount
  status: "success",                // Transaction status
  metode: "QRIS",                   // Payment method
  nicknameUser: "Player123",        // User nickname (if any)
  waktu: Timestamp                  // Transaction timestamp
}
```

**Usage:**
- Transaction audit trail
- User purchase history
- Analytics and reporting
- Dispute resolution

---

## 🚀 Hybrid Caching Strategy

### Architecture

```
┌─────────────┐     Cache Hit     ┌──────────────┐
│   Command   │ ───────────────> │  Memory Cache │
│  (Check)    │     ~1ms          │   (Map)       │
└─────────────┘                   └──────────────┘
       │                                 │
       │ Cache Miss                      │ 5 min TTL
       │ ~100ms                          │
       ↓                                 ↓
┌─────────────┐                   ┌──────────────┐
│  Firestore  │ <──────────────── │   Update     │
│  Database   │    Invalidate     │   Command    │
└─────────────┘                   └──────────────┘
```

### Implementation Plan

#### Phase 1: Cache Layer
```javascript
// lib/firestore-cache.js
const userCache = new Map();
const CACHE_TTL = {
  user: 5 * 60 * 1000,      // 5 minutes for user data
  balance: 2 * 60 * 1000,    // 2 minutes for balance (more frequent)
  transaction: 1 * 60 * 1000 // 1 minute for transactions
};

async function getCachedUser(db, phone) {
  const cached = userCache.get(phone);
  
  // Return from cache if valid
  if (cached && Date.now() - cached.timestamp < CACHE_TTL.user) {
    return cached.data;
  }
  
  // Query Firestore
  const doc = await db.collection('users').doc(phone).get();
  const userData = doc.exists ? doc.data() : null;
  
  // Update cache
  if (userData) {
    userCache.set(phone, {
      data: userData,
      timestamp: Date.now()
    });
  }
  
  return userData;
}

function invalidateUserCache(phone) {
  userCache.delete(phone);
}
```

#### Phase 2: Query Helpers
```javascript
// lib/firestore-helpers.js

// Read operations (cached)
async function getUserRole(db, phone) {
  const user = await getCachedUser(db, phone);
  return user?.role || 'BRONZE'; // Default role
}

async function getUserBalance(db, phone) {
  const user = await getCachedUser(db, phone);
  return user?.saldo || 0;
}

async function isUserRegistered(db, phone) {
  const user = await getCachedUser(db, phone);
  return user !== null;
}

// Write operations (invalidate cache)
async function updateUserBalance(db, phone, amount) {
  await db.collection('users').doc(phone).update({
    saldo: admin.firestore.FieldValue.increment(amount)
  });
  invalidateUserCache(phone);
}

async function createTransaction(db, transactionData) {
  const ref = db.collection('transactions').doc(transactionData.ref_id);
  await ref.set(transactionData);
  return transactionData.ref_id;
}

async function completeTransaction(db, ref_id) {
  const transactionRef = db.collection('transactions').doc(ref_id);
  const transaction = await transactionRef.get();
  
  if (!transaction.exists) {
    throw new Error('Transaction not found');
  }
  
  const data = transaction.data();
  
  // Move to history
  await db.collection('history_trx').add({
    ...data,
    invoice: ref_id,
    waktu: admin.firestore.FieldValue.serverTimestamp()
  });
  
  // Update user stats
  await db.collection('users').doc(data.nomor).update({
    jumlah_transaksi_sukses: admin.firestore.FieldValue.increment(1),
    total_spend: admin.firestore.FieldValue.increment(data.total_bayar),
    lastOrderTime: admin.firestore.FieldValue.serverTimestamp()
  });
  
  // Delete from active transactions
  await transactionRef.delete();
  
  // Invalidate cache
  invalidateUserCache(data.nomor);
}
```

#### Phase 3: Command Integration
```javascript
// Example usage in neko.js

case 'ceksaldo':
case 'saldo':
  if (!db) return m.reply('⚠️ Database tidak tersedia');
  
  try {
    const balance = await getUserBalance(db, sender);
    const user = await getCachedUser(db, sender);
    
    if (!user) {
      return m.reply('❌ Anda belum terdaftar!\nKetik .daftar untuk mendaftar');
    }
    
    m.reply(`
💰 *INFORMASI SALDO*

👤 Nomor: ${sender}
🎖️ Role: ${user.role}
💵 Saldo: Rp ${balance.toLocaleString('id-ID')}
📊 Total Transaksi: ${user.jumlah_transaksi_sukses || 0}
💸 Total Belanja: Rp ${(user.total_spend || 0).toLocaleString('id-ID')}
    `.trim());
  } catch (err) {
    console.error('Error fetching balance:', err);
    m.reply('❌ Gagal mengambil data saldo');
  }
  break;

case 'topup':
  if (!db) return m.reply('⚠️ Database tidak tersedia');
  
  try {
    const user = await getCachedUser(db, sender);
    
    if (!user) {
      return m.reply('❌ Anda belum terdaftar!\nKetik .daftar untuk mendaftar');
    }
    
    const args = body.split(' ');
    if (args.length < 3) {
      return m.reply('Format: .topup <produk> <tujuan>\nContoh: .topup mlbb100 123456789');
    }
    
    const produk = args[1];
    const tujuan = args[2];
    
    // Check balance
    const harga = await getProductPrice(produk);
    if (user.saldo < harga) {
      return m.reply(`❌ Saldo tidak cukup!\nSaldo: Rp ${user.saldo.toLocaleString('id-ID')}\nHarga: Rp ${harga.toLocaleString('id-ID')}`);
    }
    
    // Create transaction
    const ref_id = generateRefID();
    await createTransaction(db, {
      nomor: sender,
      ref_id: ref_id,
      product_name: produk,
      tujuan: tujuan,
      harga_jual: harga,
      status: 'processing',
      dibuat_pada: admin.firestore.FieldValue.serverTimestamp()
    });
    
    // Deduct balance
    await updateUserBalance(db, sender, -harga);
    
    m.reply(`✅ Transaksi berhasil dibuat!\nRef ID: ${ref_id}\nProses: 1-5 menit`);
    
  } catch (err) {
    console.error('Error creating topup:', err);
    m.reply('❌ Gagal membuat transaksi');
  }
  break;
```

---

## 📊 Performance Metrics

### Expected Performance

| Operation | Without Cache | With Cache | Improvement |
|-----------|--------------|------------|-------------|
| Check Role | ~100ms | ~1ms | 100x faster |
| Check Balance | ~100ms | ~1ms | 100x faster |
| Update Balance | ~150ms | ~150ms | No change (write) |
| Create Transaction | ~200ms | ~200ms | No change (write) |

### Cache Hit Rate Prediction

Based on 58 users with average 20 commands/day:
- **Total requests:** 1,160/day
- **Expected cache hits:** ~90% (1,044 hits)
- **Firestore reads:** ~10% (116 reads)
- **Free tier limit:** 50,000 reads/day
- **Usage:** 0.23% of quota ✅

### Cost Analysis

**Firestore Free Tier:**
- 50k reads/day
- 20k writes/day
- 20k deletes/day

**Estimated Usage:**
- Reads: ~116/day (with cache)
- Writes: ~100/day (transactions + updates)
- Deletes: ~20/day (completed transactions)

**Result:** Well within free tier! 🎉

---

## 🔒 Error Handling Strategy

```javascript
// Graceful degradation
async function safeGetUser(db, phone) {
  if (!db) {
    console.warn('Firestore not initialized, returning null');
    return null;
  }
  
  try {
    return await getCachedUser(db, phone);
  } catch (err) {
    console.error('Firestore query failed:', err);
    
    // Return cached data even if expired
    const cached = userCache.get(phone);
    if (cached) {
      console.warn('Using expired cache due to Firestore error');
      return cached.data;
    }
    
    return null;
  }
}
```

---

## 🚦 Implementation Roadmap

### Phase 1: Foundation (Priority: HIGH)
- [ ] Create `lib/firestore-cache.js` - Cache layer implementation
- [ ] Create `lib/firestore-helpers.js` - Query helpers
- [ ] Test cache hit/miss scenarios
- [ ] Benchmark performance

### Phase 2: Integration (Priority: HIGH)
- [ ] Update command cases to use helpers
- [ ] Implement `ceksaldo` command
- [ ] Implement `topup` command
- [ ] Add error handling and fallbacks

### Phase 3: Advanced Features (Priority: MEDIUM)
- [ ] Transaction timeout handler
- [ ] Balance notification system
- [ ] User role upgrade logic
- [ ] Analytics dashboard

### Phase 4: Optimization (Priority: LOW)
- [ ] Cache preloading for frequent users
- [ ] Batch queries for group operations
- [ ] Query result pagination
- [ ] Cache warming strategies

---

## 🎯 Best Practices

### DO ✅
- Cache read-heavy operations (role, balance checks)
- Invalidate cache immediately after writes
- Use Firestore transactions for critical operations
- Log all Firestore errors for debugging
- Implement retry logic for network failures
- Use batch operations when possible

### DON'T ❌
- Cache write operations
- Keep stale cache for critical data (balance)
- Query Firestore in loops
- Store sensitive data in cache
- Ignore Firestore quotas
- Skip error handling

---

## 📝 Migration Notes

### Current State
- Firebase Admin SDK installed (`firebase-admin@12.0.0`)
- ServiceAccount configured (`atlana-1fc6d`)
- Optional Firestore initialization in `neko.js`
- No active Firestore queries in codebase

### Migration Path
1. Keep Firestore optional for backward compatibility
2. Add cache layer without breaking existing code
3. Gradually migrate commands to use Firestore
4. Monitor performance and cache hit rates
5. Optimize based on real usage data

---

## 🔗 References

- **Firestore Docs:** https://firebase.google.com/docs/firestore
- **Best Practices:** https://firebase.google.com/docs/firestore/best-practices
- **Pricing:** https://firebase.google.com/pricing
- **Node.js SDK:** https://firebase.google.com/docs/reference/node

---

**Last Updated:** December 12, 2025
**Status:** Planning Phase
**Next Step:** Implement Phase 1 - Cache Layer
