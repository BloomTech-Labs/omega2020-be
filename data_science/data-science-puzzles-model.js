const db = 'postgres://postgres:omega2020database@omega2020.cbydc0au6atn.us-east-2.rds.amazonaws.com:5432/postgres'

const { Pool, Client } = require('pg')
const connectionString = 'postgres://postgres:omega2020database@omega2020.cbydc0au6atn.us-east-2.rds.amazonaws.com:5432/postgres'
const pool = new Pool({
  connectionString: connectionString,
})

module.exports = {
    findDSPuzzle,
    // savePuzzle,
    // findUserPuzzleByID
};

function findDSPuzzle() {
    pool.query('SELECT sudoku FROM puzzle_table ORDER BY RANDOM() LIMIT 1;', (err, res) => {
        // console.log(res.rows.sudoku)
        return res.rows
      })
    //      pool.query(
    //          (err, res) => {
    //         return db('puzzle_table as p')
    //         .select('p*, p.sudoku')
    //         .orderBy('random')
    //         .limit(1)
    // })

    // pool.query('SELECT * FROM puzzle_table ORDER BY RANDOM() LIMIT 1;',
    // (err, res) => {
    //     console.log(err, res)
    //     pool.end()
    // // console.log(err, res)
    // // .orderByRand()
    // // .limit(1);
    // })
}