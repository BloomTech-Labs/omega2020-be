const router = require('express').Router();
const Puzzles = require('./puzzles-model')
const restricted = require('../auth/restricted-middleware.js')

router.get('/', (req, res) => {
    Puzzles
    .findPuzzles()
    .then(puzzles => {
        res.json(puzzles)
    })
    .catch(err => res.send(err))
})
module.exports = router;
