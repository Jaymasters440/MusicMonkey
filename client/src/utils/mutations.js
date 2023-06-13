import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
mutation Mutation($username: String!, $email: String!, $password: String) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      email
      username
      _id
    }
  }
}
`;

export const LOGIN_USER = gql`
mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const CREATE_PLAYLIST = gql`
mutation Mutation($genres: [String], $name: String) {
  createPlaylist(genres: $genres, name: $name) {
    song {
      title
      artist
      _id
      genre {
        name
      }
    }
    genre {
      name
      _id
    }
  }
}
`;

export const REMOVE_PLAYLIST = gql`
mutation Mutation($removePlaylistPlaylistId2: ID!) {
  removePlaylist(playlistId: $removePlaylistPlaylistId2) {
    itemDeleted {
      _id
      genre {
        _id
        name
      }
      name
      song {
        _id
        artist
        genre {
          _id
          name
        }
        title
      }
      userId
    }
    message
  }
}`
