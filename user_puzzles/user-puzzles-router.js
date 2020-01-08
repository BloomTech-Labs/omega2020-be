const router = require('express').Router();
const restricted = require('../auth/restricted-middleware.js')
const UserPuzzles = require('./user-puzzles-model')

router.get('/', restricted, (req, res) => {
    UserPuzzles
    .findPuzzles()
    .then(puzzles => {
        res.json(puzzles)
    })
    .catch(err => res.send(err))
})

router.post('/:id', restricted, (req, res) => {
    const id = req.params.puzzleId
    const puzzle = req.body
    UserPuzzles
    .savePuzzle(puzzle, id)
    .then(puzzle => {
        res.json(puzzle)
    })
    .catch(err => res.send(err))
})

module.exports = router;
