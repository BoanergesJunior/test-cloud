const express = require('express');

const { getMovies, getComments, getTheaters, getUsers } = require('./database/get.mflix.collection');

const app = express()

const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => {
  res.send(
    `
    <h1 >End points  </h1>
    <h3>/movies<h3>
    <h3>/users<h3>
    <h3>/comments<h3>
    <h3>/theaters<h3>
    <button>teste</button>
    `
  )
})

app.get('/movies', async (_, res) => {
  const movies = await getMovies();
  res.send(movies);
})

app.get('/users', async (_, res) => {
  const users = await getUsers();
  res.send(users);
})

app.get('/comments', async (_, res) => {
  const comments = await getComments();
  res.send(comments);
})

app.get('/theaters', async (_, res) => {
  const theaters = await getTheaters();
  res.send(theaters);
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
