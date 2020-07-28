const db = require('../database/dbconfig.js');
// const { add, findBy } = require('../users/users-model.js');
// const Users = require('../users/users-model.js');
const request = require('supertest');
const server = require('../api/server');

describe('Test suite: register and login', () => {
	beforeAll(async () => {
		await db.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE');
	});

	afterAll(async () => {
		db.end();
	});

	it('should set db env to test', () => {
		expect(process.env.NODE_ENV).toBe('test');
	});

	it('adds a user, returns JSON object', async () => {
		return (res = await request(server)
			.post('/auth/register')
			.send({
				password: 'testpass',
				email: 'test@email.com'
			})
			.then((res) => {
				expect(res.status).toBe(201);
				expect(res.type).toBe('application/json');
				expect([res.body]).toBeArray();
			}));
	});

	it('should log in and return a token', async () => {
		return (res = await request(server)
			.post('/auth/login')
			.send({
				password: 'testpass',
				email: 'test@email.com'
			})
			.then((res) => {
				expect(res.status).toBe(200);
				expect(res.type).toBe('application/json');
				expect(res.body.token).toBeTruthy();
			}));
	});
});

// describe('add()', function() {
//     beforeEach(async () => {
//         await db('users').truncate();
//     })
//     it('should insert a user', async function() {
//         await add({password: 'bendoe', email: 'ben123@doe.com'});
//         const users = await db('users');
//         expect(users).toHaveLength(1);
//     })
//     it('should return provided user', async function() {
//         user = await add({password: 'johndoe', email: 'john123@doe.com'});
//         expect(user.email).toBe('john123@doe.com');
//         expect(user.id).toBeDefined();

//     })
// })

// describe('findBy()', function() {
//     beforeEach(async () => {
//         await db('users').truncate();
//     })
//     it('should find a user', async function() {
//         original = await add({password: 'johndoe', email: 'john@doe.com'});
//         user = await Users.findBy({email: 'john@doe.com'})
//         expect(user).toBeDefined();
//         expect(user).toMatchObject([original]);
//     })
//     it('should return the correct user', async function() {
//         original = await add({password: 'johndoe', email: 'john@doe.com'});
//         user = await Users.findBy({email: 'john@doe.com'})
//         expect(user).toMatchObject([original]);
//     })
// })
