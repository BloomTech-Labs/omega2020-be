const express = require('express');
const configureMiddleware = require('./configure-middleware')

const puzzleRouter = require('../puzzles/puzzles-router')
const authRouter = require('../auth/auth-router')
const userPuzzleRouter = require('../user_puzzles/user-puzzles-router')
const dataSciencePuzzlesRouter = require('../data_science/data-science-puzzles-router')

const server = express();

configureMiddleware(server);

server.use('/puzzles', puzzleRouter)
server.use('/auth', authRouter)
server.use('/user-puzzles', userPuzzleRouter)
server.use('/puzzle', dataSciencePuzzlesRouter)

server.get('/', (req, res) => {
    res.send("It's alive!");
});
  
server.use((err, req, res, next) => {
  console.log('Error: ', err)
  res.status(500).json({
    message: 'Something went wrong...'
  })
});

module.exports = server;