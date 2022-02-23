const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID
    username: String
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    helloWorld: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
