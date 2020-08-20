const express = require('express');
const helmet = require('helmet');
// const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// Unsuccessful attempt to correct cors error

// Set up a whitelist and check against it:
// const whitelist = ['https://www.sudomega.com']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

module.exports = server => {
  server.use(express.json());  
  server.use(cors());
	// server.use(cors(corsOptions));
  server.use(helmet());
  // server.use(morgan('dev'));
    server.use(bodyParser());
};