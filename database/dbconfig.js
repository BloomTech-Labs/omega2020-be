// const knex = require('knex');

// const knexConfig = require('../knexfile.js');

// const environment = 
// process.env.DB_ENV || 
// 'production';

// module.exports = knex(knexConfig[environment]);

const dbEngine = process.env.DB_ENV || 'development'
const config = require('../knexfile')[dbEngine]
module.exports = require('knex')(config)