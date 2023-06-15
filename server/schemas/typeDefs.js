const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    playlist: [Playlist]
  }

  type Genre {
    _id:ID!
    name: String
  }

  type Playlist {
    _id: ID
    name: String!
    song: [Song]
    genre: [Genre]
    userId: ID
  }

  type Song {
    _id: ID
    title: String
    artist: String
    genre: [Genre]

  }

  type Auth {
    token: ID!
    user: User
  }

  type Message {
    itemDeleted: Playlist
    message:String
  }
 
  type Query {
    user: User
    allGenres:[Genre]
    allPlaylists: [Playlist]
    singlePlaylist(playlistId: ID!): Playlist
    
    
    
  }


  type Mutation {
  login(email: String!, password: String!): Auth

  addUser(username: String!, email: String!, password: String): Auth

  createPlaylist(name: String, genres: [String]): Playlist
    
  removePlaylist(playlistId: ID!): Message
  
  }
`;

module.exports = typeDefs;

//createPlaylist(
  //listGenre: [String]
 //): [Song] 
