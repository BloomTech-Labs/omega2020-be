const dbEngine = process.env.DB || 'dev'
const config = require('../knexfile')[dbEngine]
module.exports = require('knex')(config)