import { gql } from '@apollo/client';

export const ADD_USER = gql`
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
mutation Mutation($id: ID!) {
  removePlaylist(_id: $id) {
    _id
    email
    username
    playlist {
      _id
      name
      genre {
        name
        _id
      }
      song {
        _id
        title
        artist
        genre {
          _id
          name
        }
      }
    }
  }
}`
