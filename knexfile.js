require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.HOST,
      port: process.env.PORT,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
  test: {
    client: 'pg',
    connection: {
      user: process.env.TEST_DB_USER || process.env.HOST,
      password: process.env.TEST_DB_PASSWORD || process.env.USER,
      database: process.env.TEST_DB || process.env.DATABASE,
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.PRO_HOST,
      user: process.env.PRO_USER,
      password: process.env.PRO_PASS,
      database: process.env.PRO_DB,
      ssl: { rejectUnauthorized: false }
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
};
