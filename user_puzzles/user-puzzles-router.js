const router = require('express').Router();
const restricted = require('../auth/restricted-middleware.js')
const UserPuzzles = require('./user-puzzles-model')

// router.get("/serfg", async (req, res) => {
//     // console.log("REQ1", req)
//     const email = req.decodedJwt.email;
//     console.log("USER EMAIL", email)
//     try {
//     //   console.log("REQ2", req)
//       const allUsers = await UserPuzzles.findPuzzles();
//             // console.log("REQ2", req)

//       console.log("ALL USERS", allUsers)
//       res.status(200).json(allUsers);
//     // console.log("REQ2", req)

      
//     } catch (err) {
//       res.status(500).json({ msg: "erraaaaa"  });
//     }

// })

router.get('/', restricted, (req, res) => {
  const email = req.decodedJwt.email;
  UserPuzzles
  .findPuzzles(email)
  .then(puzzles => {
      res.json(puzzles)
  })
  .catch(err => res.send(err))
})


router.post('/:puzzleId', restricted, async (req, res) => {
  try {
    console.log("PARAMS",req.params)
    const { puzzleId } = req.params;
    const email = req.decodedJwt.email;
    const puzzleStr = req.body;
    console.log("ROUTER GUY", puzzleStr)
    console.log("ROUTER GUY2", email)
    console.log("ROUTER GUY3", puzzleId)
    await UserPuzzles
    .savePuzzle(puzzleStr, email, puzzleId)
    .then(puzzle => {
        console.log("THEN PUZZ", puzzle)
        res.status(200).json(puzzle)
        console.log(email)
      })
    } catch (err) {
      res.status(500).json({ msg: "erraaaaa"  });
    }
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
