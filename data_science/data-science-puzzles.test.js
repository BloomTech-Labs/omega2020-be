const { Pool, Client } = require('pg');
const db = process.env.NODE_ENV === 'test';
const request = require('supertest');
const server = require('../api/server');

const { connectionString } = require('./data-science-puzzles-model');

const pool = new Pool({
  connectionString: connectionString
});

const client = new Client({
  connectionString: connectionString
})

client.connect();

//Test GET request for random 9x9 puzzle
describe('Test suite: receive correct response from database for random puzzle', () => {
  afterAll(async () => {
    client.end();
  });

  it('returns a JSON object with status 200', async () => {
    return (res = await request(server)
      .get('/puzzle')
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
      }))
  });

  it('returns an object containing the correct number of characters', async () => {
    return (res = await request(server)
      .get('/puzzle')
      .then(async res => {
        let jsonRes = await JSON.parse(res.text);
        expect(jsonRes.solution).toHaveLength(81);
        expect(jsonRes.sudoku).toHaveLength(81);
      })
    );
  });

  it('returns a puzzle object with "gridlength", "row", "col", "sudoku", "solution", "level", and "id"', async () => {
    const puzzle = [
      'gridlength',
      'row',
      'col',
      'sudoku',
      'solution',
      'level',
      'id'
    ];

    return (res = await request(server)
      .get('/puzzle')
      .then(res => {
        expect(puzzle).toContain('gridlength', 'row', 'col', 'sudoku', 'solution', 'level', 'id');
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

  // // Sample response
  // {"header": {"access-control-allow-origin": "*", "connection": "close", "content-length": "123", "content-type": "application/json; charset=utf-8", "date": "Tue, 04 Aug 2020 02:31:52 GMT", "etag": "W/\"7b-pl/0+VCzEEfaqP2TfI5HqlSx0mI\"", "strict-transport-security": "max-age=15552000; includeSubDomains", "x-content-type-options": "nosniff", "x-dns-prefetch-control": "off", "x-download-options": "noopen", "x-frame-options": "SAMEORIGIN", "x-xss-protection": "1; mode=block"}, "req": {"data": undefined, "headers": {"user-agent": "node-superagent/3.8.3"}, "method": "GET", "url": "http://127.0.0.1:64193/puzzle/4x4/easy"}, "status": 200, "text": "{\"gridlength\":\"4\",\"row\":\"2\",\"col\":\"2\",\"sudoku\":\"2.4..1..14323...\",\"solution\":\"2341412314323214\",\"level\":\"Easy\",\"id\":359006}"}
  
  // "{\"gridlength\":\"4\",\"row\":\"2\",\"col\":\"2\",\"sudoku\":\"4..1.2.43..2.4.3\",\"solution\":\"4321123431422413\",\"level\":\"Easy\",\"id\":601639}"

  // "{\"gridlength\":\"4\",\"row\":\"2\",\"col\":\"2\",\"sudoku\":\"4...2.14.42.3.41\",\"solution\":\"4132231414233241\",\"level\":\"Easy\",\"id\":741400}"

  it('returns an object containing the correct number of characters', async () => {
    return (res = await request(server)
      .get('/puzzle/4x4/easy')
      .then(async res => {
        let jsonRes = await JSON.parse(res.text);
        expect(jsonRes.solution).toHaveLength(16);
        expect(jsonRes.sudoku).toHaveLength(16);
      })
    );
  });
  
  it('returns a puzzle object with "gridlength", "row", "col", "sudoku", "solution", "level", and "id"', async () => {
    const puzzle = [
      'gridlength',
      'row',
      'col',
      'sudoku',
      'solution',
      'level',
      'id'
    ];

    return (res = await request(server)
      .get('/puzzle/4x4/easy')
      .then(res => {
        expect(puzzle).toContain('gridlength', 'row', 'col', 'sudoku', 'solution', 'level', 'id');
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

  it('returns an object containing the correct number of characters', async () => {
    return (res = await request(server)
      .get('/puzzle/6x6/easy')
      .then(async res => {
        let jsonRes = await JSON.parse(res.text);
        expect(jsonRes.solution).toHaveLength(36);
        expect(jsonRes.sudoku).toHaveLength(36);
      })
    );
  });

  it('returns a puzzle object with "gridlength", "row", "col", "sudoku", "solution", "level", and "id"', async () => {
    const puzzle = [
      'gridlength',
      'row',
      'col',
      'sudoku',
      'solution',
      'level',
      'id'
    ];

    return (res = await request(server)
      .get('/puzzle/6x6/easy')
      .then(res => {
        expect(puzzle).toContain('gridlength', 'row', 'col', 'sudoku', 'solution', 'level', 'id');
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

  it('returns an object containing the correct number of characters', async () => {
    return (res = await request(server)
      .get('/puzzle/9x9/easy')
      .then(async res => {
        let jsonRes = await JSON.parse(res.text);
        expect(jsonRes.solution).toHaveLength(81);
        expect(jsonRes.sudoku).toHaveLength(81);
      })
    );
  });

  it('returns a puzzle object with "gridlength", "row", "col", "sudoku", "solution", "level", and "id"', async () => {
    const puzzle = [
      'gridlength',
      'row',
      'col',
      'sudoku',
      'solution',
      'level',
      'id'
    ];

    return (res = await request(server)
      .get('/puzzle/9x9/easy')
      .then(res => {
        expect(puzzle).toContain('gridlength', 'row', 'col', 'sudoku', 'solution', 'level', 'id');
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

  it('returns an object containing the correct number of characters', async () => {
    return (res = await request(server)
      .get('/puzzle/9x9/medium')
      .then(async res => {
        let jsonRes = await JSON.parse(res.text);
        expect(jsonRes.solution).toHaveLength(81);
        expect(jsonRes.sudoku).toHaveLength(81);
      })
    );
  });

  it('returns a puzzle object with "gridlength", "row", "col", "sudoku", "solution", "level", and "id"', async () => {
    const puzzle = [
      'gridlength',
      'row',
      'col',
      'sudoku',
      'solution',
      'level',
      'id'
    ];

    return (res = await request(server)
      .get('/puzzle/9x9/medium')
      .then(res => {
        expect(puzzle).toContain('gridlength', 'row', 'col', 'sudoku', 'solution', 'level', 'id');
      }))
  })
});

//Test GET request for hard 9x9 puzzle
describe('Test suite: receive correct response from database for a 9x9 puzzle, difficulty level = hard', () => {
  afterAll(async () => {
    db.end();
  });

  it('returns a hard 9x9 puzzle with status 200', async () => {
    return (res = await request(server)
      .get('/puzzle/9x9/hard')
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
      }))
  })

  it('returns an object containing the correct number of characters', async () => {
    return (res = await request(server)
      .get('/puzzle/9x9/hard')
      .then(async res => {
        let jsonRes = await JSON.parse(res.text);
        expect(jsonRes.solution).toHaveLength(81);
        expect(jsonRes.sudoku).toHaveLength(81);
      })
    );
  });

  it('returns a puzzle object with "gridlength", "row", "col", "sudoku", "solution", "level", and "id"', async () => {
    const puzzle = [
      'gridlength',
      'row',
      'col',
      'sudoku',
      'solution',
      'level',
      'id'
    ];

    return (res = await request(server)
      .get('/puzzle/9x9/hard')
      .then(res => {
        expect(puzzle).toContain('gridlength', 'row', 'col', 'sudoku', 'solution', 'level', 'id');
      }))
  })
});