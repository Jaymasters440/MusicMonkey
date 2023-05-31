export const getAllGenres = () => {
    return fetch('/api/genre', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  
  export const createGenre = (genreData) => {
    return fetch('/api/genre', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(genreData),
    });
  };
  
  export const getGenre = (genreId) => {
    return fetch(`/api/genre/${genreId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  
  /*export const createVote = (voteData) => {
    return fetch(`/api/genre/${voteData}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(voteData),
    });
  };
  
  export const getAllTech = () => {
    return fetch('/api/tech', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  */
  