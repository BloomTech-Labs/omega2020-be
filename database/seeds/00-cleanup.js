const cleaner = require('knex-cleaner');

exports.seed = async (knex) => {
  await cleaner.clean(knex, {
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'] // don't empty migration tables
  })
  // await knex('user_puzzles').truncate()
  // await knex('users').truncate()
  // await knex('data').truncate()
}