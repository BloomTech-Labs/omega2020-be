const db = 'postgres://postgres:omega2020database@omega2020.cbydc0au6atn.us-east-2.rds.amazonaws.com:5432/postgres'

const { Pool, Client } = require('pg')
const connectionString =
	'postgres://postgres:omega2020database@database-1.ctsy0o6uydaq.us-east-1.rds.amazonaws.com:5432/postgres';
const pool = new Pool({
  connectionString: connectionString,
})

module.exports = {
  connectionString,
  findDSPuzzle,
    find4x4Puzzle
    // savePuzzle,
    // findUserPuzzleByID
};

function find4x4Puzzle() {
  pool.query(
    'SELECT sudoku FROM 4x4_puzzles ORDER BY RANDOM() LIMIT 1;', (err, res) => {
      return res.rows
    }
	);
}

function findDSPuzzle() {
    pool.query('SELECT sudoku FROM _9x9_puzzles ORDER BY RANDOM() LIMIT 1;', (err, res) => {
        // console.log(res.rows.sudoku)
        return res.rows
      })
    //      pool.query(
    //          (err, res) => {
    //         return db('_9x9_puzzles as p')
    //         .select('p*, p.sudoku')
    //         .orderBy('random')
    //         .limit(1)
    // })

    // pool.query('SELECT * FROM _9x9_puzzles ORDER BY RANDOM() LIMIT 1;',
    // (err, res) => {
    //     console.log(err, res)
    //     pool.end()
    // // console.log(err, res)
    // // .orderByRand()
    // // .limit(1);
    // })
}