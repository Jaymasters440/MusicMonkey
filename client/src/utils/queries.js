import { gql } from '@apollo/client';


export const QUERY_GENRES = gql`
  query getAllGenres {
  genres {
    _id
    name
  }
}
`;

export const QUERY_PLAYLISTS = gql`
query Playlists {
  playlists {
    name
    genre {
      name
      _id
    }
    song {
      title
      artist
    }
  }
}
`;