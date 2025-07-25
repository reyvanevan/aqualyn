# 🤖 Aqualyn - Advanced WhatsApp Bot

Bot WhatsApp otomatis dengan fitur lengkap menggunakan `baileys-mod` dengan dukungan AI Icon yang mendukung:

## ✨ Fitur Utama

### 🔥 **Enhanced AI Icon Features** 
- 🤖 **Smart AI Icon Detection** - Auto-detect AI icon berdasarkan tipe chat
- ⚙️ **Config-Based Control** - Kontrol AI icon via global settings
- 💬 **Flexible Message Handling** - Support private & group chat
- 🎯 **Manual Override Functions** - Force enable/disable AI icon

### 🔥 **Fitur dari baileys-mod**
- 💬 **Send Messages to Channels** - Kirim pesan ke channel WhatsApp
- 🔘 **Button & Interactive Messages** - Button dan pesan interaktif
- 🖼️ **Send Album Messages** - Kirim multiple gambar sebagai album
- 👥 **Group with LID Support** - Support grup dengan @lid
- 🖼️ **Full-Size Profile Pictures** - Upload foto profil ukuran penuh
- 🛠️ **Custom Pairing Codes** - Kode pairing custom
- 🛠️ **Libsignal Fixes** - Log yang lebih bersih

### 🛠️ **Fitur Bot**
- 🏪 **Sistem Topup Otomatis** - Topup game dan pulsa
- 👥 **Manajemen Grup** - Admin tools lengkap
- 🔒 **Antilink Protection** - Perlindungan dari spam link
- 📝 **Custom Commands** - Buat command sendiri
- 🎮 **Game Tools** - Cek ID Mobile Legends, Free Fire, dll
- 💰 **Payment Integration** - Sistem pembayaran otomatis

## 🚀 Instalasi

1. **Clone Repository**
```bash
git clone https://github.com/reyvanevan/aqualyn.git
cd aqualyn
```

2. **Install Dependencies**
```bash
npm install
```

3. **Konfigurasi**
- Edit file `db/config.js` sesuai kebutuhan
- Siapkan Firebase service account (opsional)

4. **Jalankan Bot**
```bash
npm start
# atau
node index.js
```

5. **Pairing Code**
- Masukkan nomor WhatsApp (format: 62xxx)
- Gunakan kode pairing yang muncul untuk connect

## 📋 Command List

### Owner Commands
- `.testbutton` - Test button message
- `.testbuttonimg` - Test button dengan gambar  
- `.testinteractive` - Test interactive message
- `.setcmd` - Atur command grup
- `.addsewa` - Tambah periode sewa

### Public Commands
- `.help` - Tampilkan bantuan
- `.list` - Lihat daftar produk
- `.cekml [id](server)` - Cek ID Mobile Legends
- `.cekff [id]` - Cek ID Free Fire
- `.owner` - Info owner

### Group Commands
- `.addlist` - Tambah produk ke list
- `.updatelist` - Update produk
- `.dellist` - Hapus produk
- `.antilink on/off` - Toggle antilink

## 🔧 Teknologi

- **Node.js** - Runtime JavaScript
- **baileys-mod** - WhatsApp Web API (Modified version by nstar-y)
- **Firebase** - Database (opsional)
- **Express.js** - Web server untuk webhook

## 🏆 Credits & Contributors

- **VallzOfficial** - Original bot base and core functionality
- **nstar-y** - baileys-mod library with AI icon support
- **Reyvan** - AI icon features, config-based system, and enhancements
- **@adiwajshing** - Original Baileys library

## 📝 Lisensi

MIT License - Lihat file LICENSE untuk detail.

## 🤝 Kontribusi

Contributions welcome! Silakan buat issue atau pull request.

## 📞 Support

Jika ada pertanyaan atau masalah, silakan buat issue di repository ini.

---
Made with ❤️ using baileys-mod
