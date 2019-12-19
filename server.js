const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const graphqlExpress = require('express-graphql')
const schema = require('./data/user-schema')
const jwt = require('express-jwt')
var jwks = require('jwks-rsa')
const dummySchema = require('./data/dummy-schema.js')


require('dotenv').config()

const PORT = 7000

const app = express()

app.use(cors())

const auth = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.AUTH0_ISSUER}/.well-known/jwks.json`
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_ISSUER,
  algorithms: ['RS256']
})

var root = {
  message: () => 'GraphQL Woot Woooot!!!'
};  

app.use(
  '/graphql',
  bodyParser.json(),
  auth,
  graphqlExpress(req => ({
    schema: dummySchema,
    graphiql: true,
    context: {
      user: req.user
    }
  }))
)

//Asking Auth0 for a token 

var request = require("request");

var options = { method: 'POST',
  url: 'https://dev--g29hine.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"IDPANEE2anqKutR75So6nvpT6yK6xYzd","client_secret":"ibxsviODk49xMUZaPneO-QdkuOo2BpiE-SqbJ4VSykLUrkRj6xyP2sZgvcepM-xK","audience":"http://graphql-auth0-api.com","grant_type":"client_credentials"}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

////////
// Sending that token to the API

var request = require("request");

var options = { method: 'GET',
  url: 'http://localhost:7000/graphql',
  headers: { authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1UVTJRakF5UlVFMU1EWTVRemREUkRjME1UQkNNelExTjBFd05ETkJRMFk1TTBRMlEwRXhOZyJ9.eyJpc3MiOiJodHRwczovL2Rldi0tZzI5aGluZS5hdXRoMC5jb20vIiwic3ViIjoiSURQQU5FRTJhbnFLdXRSNzVTbzZudnBUNnlLNnhZemRAY2xpZW50cyIsImF1ZCI6Imh0dHA6Ly9ncmFwaHFsLWF1dGgwLWFwaS5jb20iLCJpYXQiOjE1NzY2OTc3MTIsImV4cCI6MTU3Njc4NDExMiwiYXpwIjoiSURQQU5FRTJhbnFLdXRSNzVTbzZudnBUNnlLNnhZemQiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.iECsiunGCBd14zW-hk5ckRfGBRn5LRLnCNPut6nWDuEDxiwkW21_VWShZehhLCcokJYF6LPe1JlCuf5BTDvZ8vf8Co1t0eQmfJTLkBk5KzSlthKibTcVrP4jJUQKlaKhaacdowo3DgM-E2PxA1eo4D9TEAgW43rF2C1QR2UEpw1HemGdGIHzxYs5i0NgJBaCkZqKodus9DJMPDMSLxJdQnRMNmPZ_BjrDpw_ww41J5KQVh8lamzZEkrcNtRrkVKt3tCpjdWkx8J8-9dzzEifI_XPXoK0FfKHuF4mMo-2CgBNEE0XQfUeK5C2f0ZUIh81YeWCIaq-tcddtQvMC_tn-w' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

///////////////////////////////////

app.listen(PORT, () => {
  console.log(`The GraphQL server is running on http://localhost:${PORT}/graphql`)
})