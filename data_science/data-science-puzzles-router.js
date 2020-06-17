const router = require('express').Router();
const restricted = require('../auth/restricted-middleware.js')

const { Pool, Client } = require('pg')
const connectionString = 'postgres://postgres:omega2020database@database-1.ctsy0o6uydaq.us-east-1.rds.amazonaws.com:5432/postgres'
const pool = new Pool({
  connectionString: connectionString,
})
pool.query("SELECT sudoku, solution, level, id FROM puzzle_table WHERE level='Diabolical' ORDER BY RANDOM() LIMIT 1;", (err, res) => {
  console.log(res.rows[0])
})
const client = new Client({
  connectionString: connectionString,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  // console.log(err, res)
  client.end()
})

router.get('/', (req, res, next) => {
  pool.query('SELECT sudoku, solution, level, id FROM puzzle_table ORDER BY RANDOM() LIMIT 1;',
              (q_err, q_res ) => {
                  res.json(q_res.rows[0])
                  if (q_err) {
                    res.send(q_err)
                  }
      })
})

router.get('/4x4', (req, res, next) => {
	pool.query(
		'SELECT id, puzzle, solution FROM 4x4_puzzles ORDER BY RANDOM() LIMIT 1;',
		(q_err, q_res) => {
			console.log('QRES 4x4 easy', q_res);
			res.json(q_res.rows[0]);
			if (q_err) {
				res.send(q_err);
			}
		}
	);
});

router.get('/saved', (req, res, next, puzzleDs) => {
  pool.query(`SELECT solution FROM puzzle_table WHERE id=${puzzleDs};`,
              (q_err, q_res ) => {
                console.log("QRES DIAB", q_res)
                  res.json(q_res.rows[0])
                  if (q_err) {
                    res.send(q_err)
                  }
      })
})

router.get('/diabolical', (req, res, next) => {
  pool.query("SELECT sudoku, solution, level, id FROM puzzle_table WHERE level='Diabolical' ORDER BY RANDOM() LIMIT 1;",
              (q_err, q_res ) => {
                console.log("QRES DIAB", q_res)
                  res.json(q_res.rows[0])
                  if (q_err) {
                    res.send(q_err)
                  }
      })
})

router.get('/tough', (req, res, next) => {
  pool.query("SELECT sudoku, solution, level, id FROM puzzle_table WHERE level='Tough' ORDER BY RANDOM() LIMIT 1;",
              (q_err, q_res ) => {
                  res.json(q_res.rows[0])
                  if (q_err) {
                    res.send(q_err)
                  }
      })
})
router.get('/moderate', (req, res, next) => {
  pool.query("SELECT sudoku, solution, level, id FROM puzzle_table WHERE level='Moderate' ORDER BY RANDOM() LIMIT 1;",
              (q_err, q_res ) => {
                console.log("QRES MOD", q_res)
                  res.json(q_res.rows[0])
                  if (q_err) {
                    res.send(q_err)
                  }
      })
})
router.get('/gentle', (req, res, next) => {
  pool.query("SELECT sudoku, solution, level, id FROM puzzle_table WHERE level='Gentle' ORDER BY RANDOM() LIMIT 1;",
              (q_err, q_res ) => {
                console.log("QRES GENT", q_res)
                  res.json(q_res.rows[0])
                  if (q_err) {
                    res.send(q_err)
                  }
      })
})
router.get('/test', (req, res, next) => {
  pool.query("SELECT sudoku, solution, level, id FROM puzzle_table WHERE id='5029' LIMIT 1;",
              (q_err, q_res ) => {
                console.log("QRES TEST", q_res)
                  res.json(q_res.rows[0])
                  if (q_err) {
                    res.send(q_err)
                  }
      })
})

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  pool.query(`SELECT sudoku, solution, level, id FROM puzzle_table where id = ${id};`,
              (q_err, q_res ) => {
                console.log("QRES ID", q_res)
                  res.json(q_res.rows[0])
                  if (q_err) {
                    res.send(q_err)
                  }
      })
})

module.exports = router;
