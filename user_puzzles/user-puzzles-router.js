const router = require('express').Router();
const restricted = require('../auth/restricted-middleware.js')
const UserPuzzles = require('./user-puzzles-model')

router.get('/', restricted, (req, res) => {
  const email = req.decodedJwt.email;
  UserPuzzles
  .findUserPuzzles(email)
  .then(puzzles => {
      res.json(puzzles)
  })
  .catch(err => res.send(err))
})

router.post('/', restricted, async (req, res) => {
  try {
    const { puzzleId } = req.params;
    const email = req.decodedJwt.email;
    const puzzleStr = req.body;
    const original = req.body.original;

    await UserPuzzles
    .saveUserPuzzle(puzzleStr, email, puzzleId, original)
    .then(puzzle => {
        res.status(200).json(puzzle)
        console.log(email)
      })
    } catch (err) {
      res.status(500).json({ msg: "internal server error"  });
      console.log(err)
    }
})

// router.post('/', restricted, (req, res) => {
//   const userPuzzleData = req.body;
//   const email = req.decodedJwt.email;

//   UserPuzzles.saveUserPuzzle(userPuzzleData)
//     .then(userPuzzle => {
//       res.status(201).json(userPuzzle);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ message: 'Failed to save user puzzle' })
//     });
// });

module.exports = router;


// router.get("/serfg", async (req, res) => {
//     const email = req.decodedJwt.email;
//     try {
//       const allUsers = await UserPuzzles.findUserPuzzles();
//       res.status(200).json(allUsers);
//     } catch (err) {
//       res.status(500).json({ msg: "erraaaaa"  });
//     }

// })

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



