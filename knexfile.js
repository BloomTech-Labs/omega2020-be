require('dotenv').config();
// Update with your config settings.
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/omega-db.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
          conn.run('PRAGMA foreign_keys = ON', done);
      },
  },
    useNullAsDefault: true,

    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  },
  testing: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
        filename: "./data/test.db3"
    },
    migrations: {
        directory: './data/migrations'
    },
    seeds: {
        directory: './data/seeds'
    },
    pool: {
        afterCreate: (connection, done) => {
            connection.run("PRAGMA foreign_keys = ON", done)
        }
    }
},
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './database/migrations'
  },
  seeds: {
      directory: './database/seeds'
  },
  },
};

