// Update with your config settings.
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/omega-db.db3'
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
  //   connection: {
  //     host: 'ec2-174-129-33-230.compute-1.amazonaws.com',
  //     port: '5432',
  //     user: 'tuuiardyaqjvcr',
  //     password: '952f064afac9587e45e0cdb54954944058570e8b36c15147e9a5e0b5585a0135',
  //     database: 'dbt402cmh54idu',
  //     ssl: true
  //  },
    migrations: {
      directory: './database/migrations'
  },
  seeds: {
      directory: './database/seeds'
  },
  },
};

