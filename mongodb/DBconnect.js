const { MongoClient } = require ("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);



// this function must return collection 
async function ConnectDB() {
    let result = await client.connect();
    console.log('Connected successfully to server');
    let db = result.db('app');
   return db.collection("users");
  
}


module.exports = ConnectDB;