const express = require('express');
const configureMiddleware = require('./configure-middleware')

const puzzleRouter = require('../puzzles/puzzles-router')

const server = express();

configureMiddleware(server);

server.use('/api/puzzles', puzzleRouter)

server.get('/', (req, res) => {
    res.send("It's alive!");
  });

module.exports = server;