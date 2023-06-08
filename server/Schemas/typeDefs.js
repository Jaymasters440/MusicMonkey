const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Genre {
    _id:ID!
    name:String!
        
  }
  type Query {
    genre:[Genre]
    
  }

  # type Mutation {
    # createPlaylist(listGenre: [String]): [Song] 
    # login(email: String!, password: String!): Auth
  # }
`;

module.exports = typeDefs;
