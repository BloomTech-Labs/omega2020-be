const superTest = require('supertest');
const server = require('../api/server');
const db = require('../database/dbconfig.js');

it('should set db env to testing', function() {
    expect(process.env.DB_ENV).toBe("testing");
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