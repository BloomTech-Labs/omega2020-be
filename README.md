<h1 align="center">Welcome to Sudomega</h1>
<p align="center">The online sudoku website.</p>

<div align="center">
   
[![Maintainability](https://api.codeclimate.com/v1/badges/bd4c771bb16203fb57de/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/omega2020-be/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/bd4c771bb16203fb57de/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/omega2020-be/test_coverage)
  [![Website](https://img.shields.io/website?color=green&style=flat-square&url=https://sudomega.com/)](https://sudomega.com/)

</div>

<p align="center"> 🛠 This is home to the backend repository for Sudomega, an online sudoku app geared towards sudoku lovers and people who want to improve their sudoku skills. Learn how to play, upload your own sudoku games, and compete with friends :) </p>

<br/>

---

This repo hosts:

- The [Sudomega](#) backend code
- Important links

:desktop_computer: Deployed URL: [Sudomega.com](https://www.sudomega.com/)

## Contributors

🙌 This project exists thanks to all the people who contribute. [[Contribute](#)].

> LABSPT11

|                                            [Jessica Dosseh](https://github.com/JessicaDosseh)                                             |                           [Alexis Anderson](https://github.com/#)                           |                           [Carlos Turcios](https://github.com/#)                            |                            [Tara Sherman](https://github.com/#)                             |                           [Vincent Adeniji](https://github.com/#)                           |
| :---------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
|                  [<img src="assets/user-icon.png" width = "100" border-radius="50%"/>](https://github.com/JessicaDosseh)                  | [<img src="assets/user-icon.png" width = "100" border-radius="50%"/>](https://github.com/#) | [<img src="assets/user-icon.png" width = "100" border-radius="50%"/>](https://github.com/#) | [<img src="assets/user-icon.png" width = "100" border-radius="50%"/>](https://github.com/#) | [<img src="assets/user-icon.png" width = "100" border-radius="50%"/>](https://github.com/#) |
|                        [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/JessicaDosseh)                         |       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/#)        |       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/#)        |       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/#)        |       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/#)        |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/jessica-dosseh-452a10173/) |    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](#)    |    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](#)    |    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](#)    |    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](#)    | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](#) |

---

# Getting Started

## Project Set Up

- [ ] Create a forked copy of this project.
- [ ] Clone your OWN version of the repository in your terminal.
- [ ] `git pull` to make sure you are uptodate
- [ ] `git checkout -b new-branch-name`
- [ ] Run `yarn` to install node_module.
- [ ] Run `yarn start` to start.

:rocket: DO your magic!

---

# Development Info

## Tech Stack

> TBD

### API Documentation

> URL

> > **Base URL** > > `https://omega2020.herokuapp.com/`

> > **Frontend Repository** > > `https://github.com/Lambda-School-Labs/omega2020-fe`

> > **DS Puzzles API**
> > `postgres://postgres:omega2020database@omega2020.cbydc0au6atn.us-east-2.rds.amazonaws.com:5432/postgres`

> > **DS Computer Vision (Upload) API** > > `https://api.lambda-omega2020.com/demo_file`

> > **DS Repository** > > `https://github.com/Lambda-School-Labs/omega2020-ds`

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
### GET random easy 9x9 Puzzle Data

**GET** to `/puzzle/9x9/easy`

- Responds with one randomly selected easy puzzle from the data science database.

```
{
  "gridlength": "9",
  "row": "3",
  "col": "3",
  "sudoku": "......3...14...8.....684..7....9..5.2.7...9.3.96.1..2.4..973.....5...67...9......",
  "solution": "678159342914237865523684197841392756257846913396715428462973581135428679789561234",
  "level": "Easy",
  "id": 2015
}
```
### GET random moderate 9x9 Puzzle Data

**GET** to `/puzzle/medium`

- Responds with one randomly selected medium puzzle from the data science database.

```
{
  "gridlength": "9",
  "row": "3",
  "col": "3",
  "sudoku": "....2.....4.6..79.2.1...4.8..41.23......6......87.49..6.2...5.1.97..6.2.....3....",
  "solution": "976428135843615792251379468564192387719863254328754916632987541197546823485231679",
  "level": "Medium",
  "id": 4504
}
```
### GET random hard 9x9 Puzzle Data

**GET** to `/puzzle/hard`

- Responds with one randomly selected hard puzzle from the data science database.

```
{
  "gridlength": "9",
  "row": "3",
  "col": "3",
  "sudoku": "..91..3...8.....4.2.58.6.1...3.....5.9.2.5.8.5.....9...7.6.85.4.6.....2...8..96..",
  "solution": "649172358781953246235846719823791465497265183516384972372618594964537821158429637",
  "level": "Hard",
  "id": 3746
}
```

### GET random easy 4x4 Puzzle Data

**GET** to `/puzzle/4x4/easy`

- Responds with one randomly selected easy 4x4 puzzle from the data science database.
- Currently only easy 4x4 puzzles are available, although routes are already set up for `/puzzle/4x4/medium` and `/puzzle/4x4/hard`.

```
{
  "gridlength": "4",
  "row": "2",
  "col": "2",
  "sudoku": "1..3..1224..3.2.",
  "solution": "1243431224313124",
  "level": "Easy",
  "id": 589692
}
```

### GET random easy 6x6 Puzzle Data

**GET** to `/puzzle/6x6/easy`

- Responds with one randomly selected easy 6x6 puzzle from the data science database.
- Currently only easy 4x4 puzzles are available, although routes are already set up for `/puzzle/6x6/medium` and `/puzzle/6x6/hard`.

```
{
  "sudoku": ".1.4423..34.2...",
  "solution": "3124423113422413",
  "level": "Easy",
  "id": 417417
}
```

### GET Puzzle Data by User

**GET** to `/user-puzzles`

- Responds with all saved puzzle data from the logged-in user only. This can only be accessed if the user is logged in.

```
[
  {
    "time": null,
    "difficulty": null,
    "original": null,
    "solved": null,
    "data": ".48....7...........732.651.7..4.5...3...7...8...8.3..5.541.736...........1....25.",
    "id": 13,
    "user_id": null,
    "puzzleDs": null,
    "email": "janedoe@mail.com"
  },
  {
    "time": null,
    "difficulty": null,
    "original": null,
    "solved": null,
    "data": ".1...412.....234",
    "id": 12,
    "user_id": null,
    "puzzleDs": null,
    "email": "janedoe@mail.com"
  },
  {
    "time": null,
    "difficulty": null,
    "original": null,
    "solved": null,
    "data": ".1...412.....234",
    "id": 11,
    "user_id": null,
    "puzzleDs": null,
    "email": "janedoe@mail.com"
  },
  {
    "time": null,
    "difficulty": null,
    "original": null,
    "solved": null,
    "data": ".1...412.....234",
    "id": 10,
    "user_id": null,
    "puzzleDs": null,
    "email": "janedoe@mail.com"
  }
```

### POST User Puzzle Data

**POST** to `/user-puzzles`

- Saves a puzzle to the user's email. User must be logged in to save puzzle data.
- The data field cannot be NULL; all other fields are not required to save a puzzle.

- Request body:
```
{ 
	"data": ".48....7...........732.651.7..4.5...3...7...8...8.3..5.541.736...........1....25."
}
```
- Returns
```
{
  "data": ".48....7...........732.651.7..4.5...3...7...8...8.3..5.541.736...........1....25.",
  "email": "janedoe@mail.com"
}
```