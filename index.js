const express = require('express');

const { getMovies, getComments, getTheaters, getUsers } = require('./database/get.mflix.collection');

const app = express()

const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => {
  res.send(
    `
    <h1>Implementação de sistema web em nuvem</h1>
    <h2>Computação em Nuvem - UFLA </h2>

    <h3>Integrantes:</h3>
    Boanerges Potyguara Saez Junior<br>
    Walisson Mendes Ferreira

<br>
    <h1 >End points disponíveis</h1>
    <button onclick="window.location.href = 'https://test-cloud-ufla.herokuapp.com/movies'"><h3>/movies<h3></button>
    <button onclick="window.location.href = 'https://test-cloud-ufla.herokuapp.com/users'"><h3>/users<h3></button>
    <button onclick="window.location.href = 'https://test-cloud-ufla.herokuapp.com/comments'"><h3>/comments<h3></button>
    <button onclick="window.location.href = 'https://test-cloud-ufla.herokuapp.com/theaters'"><h3>/theaters<h3></button>
    
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
