const db = require('../database/dbconfig')

module.exports = {
    findPuzzles,
    savePuzzle
};

function findPuzzles(userId) {
    return db('user_puzzles').where({'user_id': userId});
}


async function savePuzzle(puzzle, { userId, puzzleId }, email) {
    console.log(puzzle)
    console.log(userId)
    console.log(puzzleId)
    
    return await db('user_puzzles')
        .insert({
            ...puzzle,
            user_id: userId,
            puzzle_id: puzzleId
        }).catch(e => {
            console.log(e);
            throw e;
        })
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

//preparing an endpoint to resave an existing saved puzzle

// async function savePuzzle(puzzle, { userId, puzzleId }, email) {
//     async function verify() {
//      const results = await db('user_puzzles as p')
//     .join('puzzles as z', 'z.id', 'p.puzzle_id')
//     .join('users as u', 'u.id', 'p.user_id')
//     .select('p.*', 'u.email', 'z.id', 'p.id')
//     .where({ 'u.email': email })
//     .where({ 'z.id': puzzleId })
//     .where({ 'u.id': userId })
//     if(results.length){
//         return "This puzzle does not belong to the logged user"
//     } else {
//         await db('user_puzzles')
//         .insert({
//             ...puzzle,
//         })
//         return "Successfully added puzzle"
//         }
//     }
//     return await verify()
// }