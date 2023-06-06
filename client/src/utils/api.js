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
  
  
  