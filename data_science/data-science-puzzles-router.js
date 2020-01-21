const router = require('express').Router();
const DSPuzzles = require('./data-science-puzzles-model')

const { Pool, Client } = require('pg')
const connectionString = 'postgres://postgres:omega2020database@omega2020.cbydc0au6atn.us-east-2.rds.amazonaws.com:5432/postgres'
const pool = new Pool({
  connectionString: connectionString,
})
pool.query('SELECT * FROM puzzle_table ORDER BY RANDOM() LIMIT 1;', (err, res) => {
  console.log(res.rows)
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
  // const post_id = String(req.query.post_id)
  pool.query('SELECT sudoku, solution, level, id FROM puzzle_table ORDER BY RANDOM() LIMIT 1;',
              (q_err, q_res ) => {
                  res.json(q_res.rows[0])
                  if (q_err) {
                    res.send(q_err)
                  }
      })
})


module.exports = router;
