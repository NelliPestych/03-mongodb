const mongodb = require('mongodb');
const { MongoClient } = mongodb;

// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'db-contacts';
 
// Use connect method to connect to the server
async function main() {
  const client = await MongoClient.connect(url);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  const contacts = db.collection('contacts');

  await contacts.insertMany([{}])

}

main();