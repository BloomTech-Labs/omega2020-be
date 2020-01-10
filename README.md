# Omega2020 - Backend Documentation

This is a full list of the endpoints needed to connect to the Omega2020 API.

This file is subject to change, and as such **should be checked from time to time**.

## Base Url

`https://omega2020.herokuapp.com/`

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

### GET all Puzzle Data

**GET** to `/puzzles`

- Responds with all puzzle data.


### GET Puzzle Data by User

**GET** to `/user-puzzles`

- Responds with puzzle data from the logged-in user only. This can only be accessed if the user is logged in.



### POST User Puzzle Data

**POST** to `/user-puzzles/:userId/:puzzleId`

- Saves a puzzle under the logged in users id.

```
{
	"data": ".48....7...........732.651.7..4.5...3...7...8...8.3..5.541.736...........1....25."
}
```

### PUT Puzzle Data by puzzle id

**PUT** to `/puzzles/puzzleId`

- Updates puzzle data from one puzzle in the DB.

```
{
	"data": ".48....7...........732.651.7..4.5...3...7...8...8.3..5.541.736...........1....25."
}
```
