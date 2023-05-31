import { gql } from '@apollo/client';


export const QUERY_GENRE = gql`
  query genres($_id: String) {
    genres(_id: $_id) {
      _id
      country
      western
      rock
      alternative
      funk
      
    }
  }
`;

