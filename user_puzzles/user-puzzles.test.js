const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbconfig.js');

describe("Test suite: using test environment, upload user's puzzle", () => {
	beforeAll(async () => {
		await db.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE');
	});

	afterAll(async () => {
		db.end();
	});

	it('should set db env to test', () => {
		expect(process.env.NODE_ENV).toBe('test');
	});

	it('should upload a puzzle successfully to user-puzzles', async () => {
		return (res = await request(server)
			.post('/user-puzzles')
			.send({
				
			})
			.then(res => {
				expect(res.status).toBe(201);
			}));
	});
});


