const { Client } = require('pg');
const db = process.env.NODE_ENV === 'test';
const request = require('supertest');
const server = require('../api/server');

const { connectionString } = require('./data-science-puzzles-model');

const client = new Client({
  connectionString: connectionString
})

client.connect();

//Test GET request for random 9x9 puzzle
describe('Test suite: receive correct response from database for random puzzle', () => {
  afterAll(async () => {
    db.end();
  });

  it('returns a JSON object with status 200', async () => {
    return (res = await request(server)
      .get('/puzzle')
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
      }))
  });
});

//Test GET request for easy 4x4 puzzle
describe('Test suite: receive correct response from database for a 4x4 puzzle, difficulty level = easy', () => {
  afterAll(async () => {
    db.end();
  });

  it('returns an easy 4x4 puzzle with status 200', async () => {
    return (res = await request(server)
      .get('/puzzle/4x4/easy')
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
      }))
  })
});

//Test GET request for easy 6x6 puzzle
describe('Test suite: receive correct response from database for a 6x6 puzzle, difficulty level = easy', () => {
  afterAll(async () => {
    db.end();
  });

  it('returns an easy 6x6 puzzle with status 200', async () => {
    return (res = await request(server)
      .get('/puzzle/6x6/easy')
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
      }))
  })
});

//Test GET request for easy 9x9 puzzle
describe('Test suite: receive correct response from database for a 9x9 puzzle, difficulty level = easy', () => {
  afterAll(async () => {
    db.end();
  });

  it('returns an easy 9x9 puzzle with status 200', async () => {
    return (res = await request(server)
      .get('/puzzle/9x9/easy')
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
      }))
  })
});

//Test GET request for medium 9x9 puzzle
describe('Test suite: receive correct response from database for a 9x9 puzzle, difficulty level = medium', () => {
  afterAll(async () => {
    db.end();
  });

  it('returns an medium 9x9 puzzle with status 200', async () => {
    return (res = await request(server)
      .get('/puzzle/9x9/medium')
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
      }))
  })
});

//Test GET request for hard 9x9 puzzle
describe('Test suite: receive correct response from database for a 9x9 puzzle, difficulty level = hard', () => {
  afterAll(async () => {
    db.end();
  });

  it('returns an easy 9x9 puzzle with status 200', async () => {
    return (res = await request(server)
      .get('/puzzle/9x9/hard')
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
      }))
  })
});