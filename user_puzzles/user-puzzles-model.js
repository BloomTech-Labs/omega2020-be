const db = require('../database/dbconfig')

module.exports = {
    findPuzzles,
    savePuzzle,
    findUserPuzzleByID
};

function findPuzzles(userId) {
    return db('user_puzzles').where({'user_id': userId});
}

async function savePuzzle(puzzle, { email, puzzleId }) {
    console.log(puzzle)
    console.log(email)
    console.log(puzzleId)

    const test = await db('user_puzzles')
        .insert({
            ...puzzle,
            email: email,
            puzzleDs: puzzleId
        }).catch(e => {
            console.log(e);
            throw e;
        })
        // console.log("TEST", test)
        
    // async function verify() {
    //  const results = await db('user_puzzles as p')
    // .join('puzzles as z', 'z.id', 'p.puzzle_id')
    // .join('users as u', 'u.id', 'p.user_id')
    // .select('p.*', 'u.email', 'z.id', 'p.id')
    // .where({ 'u.email': email })
    // .where({ 'z.id': puzzleId })
    // .where({ 'u.id': userId })
    //     await db('user_puzzles')
    //     .insert({
    //         ...puzzle,
    //         user_id: userId,
    //         puzzle_id: puzzleId
    //     })
    //     return "Successfully added puzzle"
        
    // }
    // return await verify()
}

function findUserPuzzleByID(email) {
    return db('puzzles as p')
    .select('p.*')
    .where({ puzzleID })}
