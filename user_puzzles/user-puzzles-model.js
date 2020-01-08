const db = require('../database/dbconfig')

module.exports = {
    findPuzzles,
    savePuzzle
};

function findPuzzles(email) {
    return db('user_puzzles')
}

async function savePuzzle(puzzle, puzzleId, userId) {
    async function verify() {
    const results = await db('user_puzzles as p')
    .join('users as u', 'u.id', 'p.user_id')
    .select('p.*', 'u.id', 'p.id')
    .where({ 'u.id': userId })
    .where({ 'p.id': puzzleId })
    if(!results.length){
        return "This puzzle does not belong to the logged user"
    } else {
        const [id] = await db('user_puzzles')
        .insert({
            ...puzzle,
            puzzle_id: puzzleId
        })
        }
    }
    return await verify()
}
