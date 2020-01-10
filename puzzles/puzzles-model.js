const db = require('../database/dbconfig')

module.exports = {
    findPuzzle,
    findPuzzles,
    editPuzzle
};

function findPuzzle(puzzleID){
    return db('puzzles as p')
    .select('p.*')
    .where({ puzzleID })
}

function findPuzzles(){
    return db('puzzles as p')
    .select('p.*')
}

function editPuzzle(id, puzzle) {
    return db('puzzles')
        .where({ id })
        .update(puzzle, '*')
}