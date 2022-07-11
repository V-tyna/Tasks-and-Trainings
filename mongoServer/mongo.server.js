const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.8kfgj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const start = async () => {
  try {
    await client.connect();
    console.log('SEVER has been started.');
    await client.db('users').createCollection('users');
    const users = client.db('users').collection('users');
    users.insertOne({name: 'Valya', age: 33})
    const user = await users.findOne({name: 'Valya'});
    console.log("user", user);
  } catch(e) {
    console.log(e);
  }
}

start()