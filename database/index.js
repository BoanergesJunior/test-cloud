require('dotenv').config();
const { MongoClient } = require('mongodb');

const connectDB = async () => {
  const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true });

  try {
    return client.connect();
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

module.exports = connectDB;
