const express = require('express');
const helmet = require('helmet');
// const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

module.exports = server => {
  server.use(express.json());
  server.use(helmet());
  // server.use(morgan('dev'));
  server.use(cors());
  server.use(bodyParser());
};