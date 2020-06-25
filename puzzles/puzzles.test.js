const superTest = require('supertest');
const server = require('../api/server');
const db = require('../database/dbconfig.js');

const {
    findPuzzle,
    findPuzzles,
    editPuzzle
} = require('./puzzles-model')

it('should set db env to test', function() {
    expect(process.env.NODE_ENV).toBe("test");
})

describe('GET', function() {
    describe('GET endpoints return a proper response.', function() {
        it('should return 200', function() {
            return superTest(server).get('/puzzles').then(res => {
                expect(res.status).toBe(200);
            })
        })
        it('should return JSON formatted res', function() {
            return superTest(server).get('/puzzles').then(res => {
                expect(res.type).toMatch("application/json");
            })
        })
    })

})