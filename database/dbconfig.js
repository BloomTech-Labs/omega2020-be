const dbEngine = process.env.DB || 'production';
const config = require('../knexfile')[dbEngine];
module.exports = require('knex')(config);
