const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID
    username: String
    password: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Matchup {
    id: ID
    animal_1: String
    animal_2: String
  }

  type Vote {
    id: ID
    vote: Int
    matchup_id: Int
    user_id: Int
  }

  type Comment {
    id: ID
    comment: String
    color: Int
    matchup_id: Int
    user_id: Int
    username: String
  }

  type Query {
    getAllUsers(): User
    getUser(id: ID!): User
    getMatchup(id: ID!): Matchup
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    vote(vote: Int!, matchup_id: Int!): Vote
    comment(comment: String!, color: Int!, matchup_id: Int!): Comment
  }
`;

module.exports = typeDefs;
