import { gql } from '@apollo/client';


export const QUERY_GENRES = gql`
  query Query {
  allGenres {
    _id
    name
  }
}
`;

export const QUERY_Users = gql`
query user {
  users {
    _id
    email
    username
    playlist {
      _id
      name
      genre {
        _id
        name
      }
      song {
        title
        artist
        _id
        genre {
          _id
          name
        }
      }
    }
  }
}
`;

export const QUERY_PLAYLISTS = gql`
query singlePlaylist($playlistId: [ID]!) {
  playlist(playlistId: $playlistId) {
    name
    _id
    genre {
      name
      _id
    }
    song {
      _id
      title
      artist
      genre {
        name
        _id
      }
    }
  }
}
`;
