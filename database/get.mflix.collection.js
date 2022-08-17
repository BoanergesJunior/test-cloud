const connectDB = require('./index');

const getMovies = async () => {
  const client = await connectDB();
  const db = client.db('sample_mflix');
  const collection = db.collection('movies');
  const movies = await collection.find({}).limit(100).toArray();
  await client.close();
  return movies;
}

const getUsers = async () => {
  const client = await connectDB();
  const db = client.db('sample_mflix');
  const collection = db.collection('users');
  const users = await collection.find({}).limit(100).toArray();
  await client.close();
  return users;
}

const getComments = async () => {
  const client = await connectDB();
  const db = client.db('sample_mflix');
  const collection = db.collection('comments');
  const comments = await collection.find({}).limit(100).toArray();
  await client.close();
  return comments;
}

const getTheaters = async () => {
  const client = await connectDB();
  const db = client.db('sample_mflix');
  const collection = db.collection('theaters');
  const theaters = await collection.find({}).limit(100).toArray();
  await client.close();
  return theaters;
}

module.exports = { getMovies, getUsers, getComments, getTheaters };
