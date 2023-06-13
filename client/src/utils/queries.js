import { gql } from '@apollo/client';


export const QUERY_GENRES = gql`
  query Query {
  allGenres {
    _id
    name
  }
}
`;

export const QUERY_USERS = gql`
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

export const QUERY_PLAYLIST = gql`
query SinglePlaylist($playlistId: ID!) {
  singlePlaylist(playlistId: $playlistId) {
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

export const QUERY_ALL_PLAYLISTS = gql`
query Query {
  allPlaylists {
    _id
    name
    userId
    genre {
      name
    }
  }
}`
