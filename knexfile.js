require("dotenv").config();

module.exports = {
	development: {
		client: 'pg',
		connection: {
			host: process.env.HOST,
			user: process.env.USER,
			password: process.env.PASSWORD,
			database: process.env.DATABASE
		},
		migrations: {
			directory: './database/migrations'
		},
		seeds: {
			directory: './database/seeds'
		}
	},
	testing: {
		client: 'pg',
		connection: {
			host: process.env.HOST,
			user: process.env.USER,
			password: process.env.PASSWORD,
			database: process.env.TEST_DB
		},
		migrations: {
			directory: './database/migrations'
		},
		seeds: {
			directory: './database/seeds'
		}
	},
	production: {
		client: 'pg',
		connection: {
			connection: process.env.PRO_DB_URL || HOST,
			user: process.env.USER,
			password: process.env.PRO_PASS || PASSWORD
		},
		migrations: {
			directory: './database/migrations'
		},
		seeds: {
			directory: './database/seeds'
		}
	}
};