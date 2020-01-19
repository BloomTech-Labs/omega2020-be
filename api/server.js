const express = require('express');
const configureMiddleware = require('./configure-middleware')

const puzzleRouter = require('../puzzles/puzzles-router')
const authRouter = require('../auth/auth-router')
const userPuzzleRouter = require('../user_puzzles/user-puzzles-router')
const dataScienceRouter = require('../data_science/data-science-router')

const server = express();

configureMiddleware(server);

server.use('/puzzles', puzzleRouter)
server.use('/auth', authRouter)
server.use('/user-puzzles', userPuzzleRouter)
server.use('/data-science', dataScienceRouter)

server.get('/', (req, res) => {
    res.send("It's alive!");
  });

module.exports = server;