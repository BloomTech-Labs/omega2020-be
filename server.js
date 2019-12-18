const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const graphqlExpress = require('express-graphql')
const schema = require('./data/user-schema')
const jwt = require('express-jwt')
var jwks = require('jwks-rsa')


require('dotenv').config()

const PORT = 7000

const app = express()

app.use(cors())

const auth = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.AUTH0_ISSUER}.well-known/jwks.json`
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
    schema,
    context: {
      user: req.user
    }
  }))
)


app.listen(PORT, () => {
  console.log(`The GraphQL server is running on http://localhost:${PORT}/graphql`)
})