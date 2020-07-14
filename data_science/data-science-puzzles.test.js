const { Client } = require('pg');
const db = process.env.NODE_ENV === 'test';
const request = require('supertest');
const server = require('../api/server');

const { connectionString } = require('./data-science-puzzles-model');

const client = new Client({
  connectionString: connectionString
})

client.connect();

describe('Test suite: receive correct response from database', () => {
  afterAll(async () => {
    db.end();
  });

  it('returns a JSON object with status 200', async () => {
    return (res = await request(server)
      .get('/puzzle')
      .then(res => {
        expect(res.status).toBe(200)
      }))
  })
});