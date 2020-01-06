
const express = require('express');
const configureMiddleware = require('./configure-middleware')

const server = express();

configureMiddleware(server);

server.get('/', (req, res) => {
    res.send("It's alive!");
  });

module.exports = server;