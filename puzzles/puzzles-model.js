const db = require('../database/dbConfig')

module.exports = {
    findPuzzle,
    findPuzzles
};

function findPuzzle(puzzleID){
    return db('puzzles as p')
    .select('p.*')
    .where({ 'p.id': puzzleID })
}

function findPuzzles(){
    return db('puzzles as p')
    .select('p.*')
}