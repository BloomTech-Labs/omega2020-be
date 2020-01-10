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

router.put('/:id', (req, res) => {
    const changes = req.body;
    Puzzles
    .editPuzzle(req.params.id, changes)
      .then(puzzle => {
        if (puzzle) {
          res.status(200).json(puzzle);
        } else {
          res.status(404).json({ message: 'The puzzle could not be found' });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Error updating the puzzle',
        });
      });
  });

module.exports = router;
