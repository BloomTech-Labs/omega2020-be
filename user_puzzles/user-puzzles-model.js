const db = require('../database/dbconfig');

function findUserPuzzles(email) {
	return db('user_puzzles')
		.where({ email: email })
		.orderBy('id', 'DESC')
		.select();
}

async function saveUserPuzzle(puzzle, email, puzzleId, original) {
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
}

// async function saveUserPuzzle(userPuzzle) {
// 	const [email] = await db('user_puzzles').insert(userPuzzle)
// 	return db('user_puzzles')
// 		// .where({ id })
// 		.where({ email: email })
// 		.first()
// };

module.exports = {
	findUserPuzzles,
	saveUserPuzzle,
	// findUserPuzzleByID,
	// getUserPuzzles
};



// function findUserPuzzleByID(id) {
// 	return db('user_puzzles').where({ puzzleID }).first();
// }

	// function getUserPuzzles() {
	// 	const thang = db('user_puzzles').where({ data: '4' });
	// 	return thang;
	// }


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
// }

