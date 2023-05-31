import { gql } from '@apollo/client';

export const CREATE_GENRE = gql`
  mutation createGenre($tech1: String!, $tech2: String!) {
    createGenre(tech1: $tech1, tech2: $tech2) {
      _id
      country
      western
      rock
      alternative
      funk

    
    }
  }
`;

/*export const CREATE_VOTE = gql`
  mutation createVote($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;*/
