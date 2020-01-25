const db = require('../database/dbconfig')

module.exports = {
    findPuzzles,
    savePuzzle,
    findUserPuzzleByID,
    getUserPuzzles
};

function findPuzzles(userId) {
    return db('user_puzzles').where({'user_id': userId});
}

function getUserPuzzles() {
    console.log("here")
    const thang = db('user_puzzles');
    console.log(process.env)
        console.log("THANG1", thang)
        return thang
}

async function savePuzzle(puzzle, email, puzzleId) {
    console.log(puzzle)
    console.log(email)
    console.log(puzzleId)

    const test = await db('user_puzzles')
        .insert({
            data: puzzle,
            email: email,
            puzzleDs: puzzleId
            
        })
        console.log("TEST", test)
        .catch(e => {
            console.log(e);
            throw e;
        })
    // async function verify() {
    //  const results = await db('user_puzzles as p')
    // .join('puzzles as z', 'z.id', 'p.puzzle_id')
    // .join('users as u', 'u.id', 'p.user_id')
    // .select('p.*', 'u.email', 'z.id', 'p.id')
    //     const test2 = await db('user_puzzles')
    //     .insert({
    //         data: puzzle,
    //         email: email,
    //         puzzleDs: puzzleId
    //     })
    //     console.log("TEST2", test2)
        // return "Successfully added puzzle"
        
    // }
    // return await verify()
}

function findUserPuzzleByID(email) {
    return db('puzzles as p')
    .select('p.*')
    .where({ puzzleID })}
