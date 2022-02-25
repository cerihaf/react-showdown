import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query getAllUsers {
    getAllUsers {
      id
      username
    }
  }
`;

export const GET_USER = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      id
      username
    }
  }
`;

export const GET_MATCHUP = gql`
  query getMatchup($id: ID!) {
    getMatchup(id: $id) {
      id
      animal_1
      animal_2
      hasVoted
      comments {
        id
        user_id
        matchup_id
        username
        color
        comment
      }
      blueVoteCount
      redVoteCount
    }
  }
`;
