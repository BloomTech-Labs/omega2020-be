const router = require('express').Router();
const restricted = require('../auth/restricted-middleware.js')
const UserPuzzles = require('./user-puzzles-model')

router.get('/', restricted, (req, res) => {
    const userId = req.decodedJwt.userId;
    UserPuzzles
    .findPuzzles(userId)
    .then(puzzles => {
        console.log('User puzzles')
        console.log(puzzles);
        res.json(puzzles)
    })
    .catch(err => res.send(err))
})


router.post('/:puzzleId', restricted, (req, res) => {
    const { puzzleId } = req.params;
    const email = req.decodedJwt.email;
    const puzzle = req.body;
    UserPuzzles
    .savePuzzle(puzzle, { email, puzzleId })
    .then(puzzle => {
        res.json(puzzle)
        console.log(email)
    })
    .catch(err => res.send(err))
})

// router.post('/puzzles', restricted, (req, res) => {
//     const userId = req.decodedJwt.userId;
//     UserPuzzles
//     .savePuzzle(puzzle, { userId, puzzleId }, email)
//     .then(puzzle => {
//         res.json(puzzle)
//     })
//     .catch(err => res.send(err))
// })
//preparing an endpoint to resave an existing saved puzzle

// router.post('/:userId/:puzzleId', restricted, (req, res) => {
//     const { userId, puzzleId } = req.params
//     const email = req.decodedJwt.email
//     const puzzle = req.body
//     UserPuzzles
//     .savePuzzle(puzzle, { userId, puzzleId }, email)
//     .then(puzzle => {
//         res.json(puzzle)
//     })
//     .catch(err => res.send(err))
// })


module.exports = router;
