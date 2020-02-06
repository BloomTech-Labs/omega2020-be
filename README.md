# Omega2020 - Backend Documentation

This is a full list of the endpoints needed to connect to the Omega2020 API.

This file is subject to change, and as such **should be checked from time to time**.

## Base Url

`https://omega2020.herokuapp.com/`

Login with Omega 2020 google account

## Frontend Repository

`https://github.com/Lambda-School-Labs/omega2020-fe`

## Authentication

- When logging in, an Authorization token is generated that contains the encoded `CLIENT_ID` and `CLIENT_SECRET` that match the server. Authorization must then be sent containing this information via the Request Header in order to gain access to restricted areas like 'user puzzles'.

## Login and Registration

### Register

**To add a new user, you must have _no authentication token_ in your server request.**
- As a result of this, a new user will not be automatically logged in (This may change in the future), and instead should be routed to the Login page.

**POST** to `/auth/register`

**Request Body**
```
{
	"password": "secret",
	"email": "janedoe@mail.com"
}
```

### Login

**To add a new user, an _authentication token must be_ in your server request.**
- A token will then be generated and given to the user, granting access to previously restricted areas.

**POST** to `/auth/login`

**Request Body**
```
{
	"password": "secret",
	"email": "janedoe@mail.com"
}
```

## Data

### GET random Puzzle Data

**GET** to `/puzzle`

- Responds with one randomly selected puzzle from the data science database.

```
{
  "sudoku": "....7...1.7..3..8..63...47.7..986..4.........9..123..7.27...13..9..5..2.6...1....",
  "solution": "289674351574231986163598472732986514816745293945123867427869135391457628658312749",
  "level": "Diabolical",
  "id": 5029
}
```
### GET random easy Puzzle Data

**GET** to `/puzzle/gentle`

- Responds with one randomly selected easy puzzle from the data science database.

```
{
  "sudoku": "....3...9.14...6.7..6...8.......9...5..782......6.......3......8.7...2562...5.1..",
  "solution": "785136429914825637326974815632549781591782364478613592153267948847391256269458173",
  "level": "Gentle",
  "id": 3726
}
```
### GET random moderate Puzzle Data

**GET** to `/puzzle/moderate`

- Responds with one randomly selected moderate puzzle from the data science database.

```
{
  "sudoku": "8...1..37...9...5..29.6....1...2.376..........57.9...4....7.48..1...4...78..3...1",
  "solution": "846512937371948652529763148198425376463187295257396814635271489912854763784639521",
  "level": "Moderate",
  "id": 2568
}
```
### GET random hard Puzzle Data

**GET** to `/puzzle/tough`

- Responds with one randomly selected hard puzzle from the data science database.

```
{
  "sudoku": "......12...64..3....3..87..8.........4..5..6....3.1..8..85..2....5..26...27....1.",
  "solution": "584739126716425389293618754879246531341857962652391478168574293935182647427963815",
  "level": "Tough",
  "id": 869
}
```
### GET random very hard Puzzle Data

**GET** to `/puzzle/diabolical`

- Responds with one randomly selected very hard puzzle from the data science database.

```
{
  "sudoku": "....7...1.7..3..8..63...47.7..986..4.........9..123..7.27...13..9..5..2.6...1....",
  "solution": "289674351574231986163598472732986514816745293945123867427869135391457628658312749",
  "level": "Diabolical",
  "id": 5029
}
```

### GET Puzzle Data by Id

**GET** to `/puzzle/:id`

- Responds with a puzzle with the matching id.

```
{
  "sudoku": "....7...1.7..3..8..63...47.7..986..4.........9..123..7.27...13..9..5..2.6...1....",
  "solution": "289674351574231986163598472732986514816745293945123867427869135391457628658312749",
  "level": "Diabolical",
  "id": 5029
}
```

### GET Puzzle Data by User

**GET** to `/user-puzzles`

- Responds with most recently saved puzzle data from the logged-in user only. This can only be accessed if the user is logged in.

```
{
  "time": null,
  "difficulty": null,
  "original": ".1.....7...5.1.6..6.7...8.31..9.4..7.........9..8.6...8.4...7.1..6.7.2...3.....5.",
  "solved": "319648572285713649647592813158924367462137985973856124824365791596471238731289456",
  "data": ".1..1..7..15.1.6..6.7.1.8.31..9.4.17.1..1.1..9..8.6.1.8.4...7.1.1617.2...3.1...5.",
  "id": 143,
  "user_id": null,
  "puzzleDs": 142,
  "email": "sully"
}
```

### POST User Puzzle Data

**POST** to `/user-puzzles/:puzzleId`

- Saves a puzzle under the logged in users email with the id of the puzzle.
- Currently any uploaded and then saved puzzle on the frontend is saved with a puzzle id of 100.

```
{
	"data": ".48....7...........732.651.7..4.5...3...7...8...8.3..5.541.736...........1....25."
}
```