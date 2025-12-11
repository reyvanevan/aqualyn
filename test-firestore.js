const admin = require('firebase-admin');
const serviceAccount = require('./db/serviceAccountKey.json');

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
});

const db = admin.firestore();

async function checkFirestore() {
  console.log('🔍 Checking Firestore connection...\n');
  console.log('📋 Project ID:', serviceAccount.project_id);
  console.log('📧 Client Email:', serviceAccount.client_email);
  console.log('');

  try {
    // List all collections
    console.log('📂 Listing all collections:');
    const collections = await db.listCollections();
    
    if (collections.length === 0) {
      console.log('⚠️  No collections found in Firestore');
      console.log('💡 Firestore is empty or needs to be initialized\n');
      return;
    }

    console.log(`✅ Found ${collections.length} collection(s):\n`);

    // List each collection and sample documents
    for (const collection of collections) {
      console.log(`\n📁 Collection: ${collection.id}`);
      
      // Get first 5 documents from each collection
      const snapshot = await collection.limit(5).get();
      
      if (snapshot.empty) {
        console.log('   └─ (empty collection)');
      } else {
        console.log(`   └─ ${snapshot.size} document(s) (showing max 5):`);
        
        snapshot.forEach(doc => {
          console.log(`      📄 Document ID: ${doc.id}`);
          const data = doc.data();
          const keys = Object.keys(data);
          
          if (keys.length > 0) {
            console.log(`         Fields: ${keys.join(', ')}`);
            
            // Show sample data (first 3 fields)
            keys.slice(0, 3).forEach(key => {
              let value = data[key];
              if (typeof value === 'object') {
                value = JSON.stringify(value).substring(0, 50) + '...';
              } else if (typeof value === 'string' && value.length > 50) {
                value = value.substring(0, 50) + '...';
              }
              console.log(`         ${key}: ${value}`);
            });
          }
          console.log('');
        });

        // Show total count
        const allDocs = await collection.count().get();
        console.log(`   └─ Total documents in collection: ${allDocs.data().count}\n`);
      }
    }

    console.log('\n✅ Firestore check complete!');

  } catch (error) {
    console.error('❌ Error checking Firestore:', error.message);
    console.error('\nDetails:', error);
  } finally {
    process.exit(0);
  }
}

checkFirestore();
