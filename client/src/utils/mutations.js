import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const ADD_VOTE = gql`
  mutation vote($vote: Int!, $matchup_id: Int!) {
    vote(vote: $vote, matchup_id: $matchup_id) {
      id
      vote
      matchup_id
      user_id
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation comment($comment: String!, $color: Int!, $matchup_id: Int!) {
    comment(comment: $comment, color: $color, matchup_id: $matchup_id) {
      id
      comment
      color
      matchup_id
      user_id
      username
    }
  }
`;