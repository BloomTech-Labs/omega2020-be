const express = require('express');
const configureMiddleware = require('./configure-middleware')

const puzzleRouter = require('../puzzles/puzzles-router')
const authRouter = require('../auth/auth-router')

const server = express();

configureMiddleware(server);

server.use('/puzzles', puzzleRouter)
server.use('/auth', authRouter)

server.get('/', (req, res) => {
    res.send("It's alive!");
  });

module.exports = server;