const db = require('../database/dbconfig');

module.exports = {
	findPuzzles,
	savePuzzle,
	findUserPuzzleByID,
	getUserPuzzles
};

function findPuzzles(email) {
	return db('user_puzzles')
		.where({ email: email })
		.orderBy('id', 'DESC')
		.first();
}

function getUserPuzzles() {
	const thang = db('user_puzzles').where({ data: '4' });
	return thang;
}

async function savePuzzle(puzzle, email, puzzleId, original) {
	await db('user_puzzles')
		.insert({
			...puzzle,
			email: email,
			puzzleDs: puzzleId,
			original: original
		})
		.catch((err) => {
			console.log(err);
			throw err;
		});
	const savedPuzzle = {
		...puzzle,
		email,
		puzzleId,
		original
	};
	return savedPuzzle;
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
	return db('puzzles as p').select('p.*').where({ puzzleID });
}
