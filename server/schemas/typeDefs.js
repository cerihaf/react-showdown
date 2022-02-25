const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID
    username: String
    password: String
  }

  type Matchup {
    id: ID
    animal_1: String
    animal_2: String
    blueVoteCount: Int
    redVoteCount: Int
    hasVoted: Boolean
    comments: [Comment]
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

  type Auth {
    token: ID
    user: User
  }

  type Query {
    helloWorld: String
    getMatchup(id: ID!): Matchup
  }

  type Mutation {
    vote(vote: Int!, matchup_id: Int!): Vote
    comment(comment: String!, color: Int!, matchup_id: Int!): Comment
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
