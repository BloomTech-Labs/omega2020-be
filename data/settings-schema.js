const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

const typeDefs = `
type Setting {
    id: Int
    user_id: Int
    theme: 
  }

  type Query {
  }

  type Mutation {
  }
`

module.exports = makeExecutableSchema({ typeDefs, resolvers })