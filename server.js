const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('express-jwt')
var jwks = require('jwks-rsa')
require('dotenv').config()

var port = process.env.PORT || 7777;

const app = express();

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev--g29hine.auth0.com/.well-known/jwks.json'
  }),
  audience: 'http://graphql-auth0-api.com',
  issuer: 'https://dev--g29hine.auth0.com/',
  algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});

app.listen(port, () => {
        console.log(`GraphQL server running on http://localhost:${port}`)
})