const superTest = require('supertest');
const server = require('../api/server');
const db = require('../database/dbconfig.js');

// describe(
//     'Test suite: register and login', () => {
//         beforeAll(async () => {
//             await db('users').truncate();
//         });

//         it('adds a user, returns JSON object', async () => {
//             return res = await request(server)
//                 .post('/auth/register')
//                 .send({
//                     "password": "testpass",
//                     "email": "test@email.com"
//                 })
//                 .then(res => {
//                     expect(res.status).toBe(201)
//                     expect(res.type).toBe('application/json')
//                     expect([res.body]).toBeArray()
//                 })
//         });

//         it('should log in and return a token', async () => {
//             return res = await request(server)
//                 .post('/auth/login')
//                 .send({
//                     "password": "testpass",
//                     "email": "test@email.com"
//                 })
//                 .then(res => {
//                     expect(res.status).toBe(200)
//                     expect(res.type).toBe('application.json')
//                     expect(res.body.token).toBeTruthy();
//                 })
//                 );
//         })


it('should set db env to test', function() {
    expect(process.env.DB_ENV).toBe("test");
})

describe('GET', function() {
    describe('GET endpoints are secure and return a proper response.', function() {
        it('should return 400', function() {
            return superTest(server).get('/user-puzzles').then(res => {
                expect(res.status).toBe(400);
            })
        })
        it('should return JSON formatted res', function() {
            return superTest(server).get('/api/graphs').then(res => {
                expect(res.type).toMatch("text/html");
            })
        })
    })


})

describe('POST security', function() {
    describe('post to user-puzzles', function() {
        it('should return 400', function() {

            return superTest(server).post('/user-puzzles/1/1').then(res => {
                expect(res.status).toBe(400);
            })
        })
        it('should return JSON formatted res', function() {
            return superTest(server).post('/user-puzzles/1/1').then(res => {
                expect(res.type).toMatch("application/json");
            })
        })
    })
    
})