import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllGenres } from '../utils/api';

// Uncomment import statements below after building queries and mutations
import { useQuery} from '@apollo/client';
import {QUERY_GENRE} from '../utils/queries';

const Home = () => {
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    const getGenreList = async () => {
      try {
        const res = await getAllGenres();
        if (!res.ok) {
          throw new Error('No list of genres');
        }
        const genreList = await res.json();
        setGenreList(genreList);
      } catch (err) {
        console.error(err);
      }
    };
    getGenreList();
  }, []);

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1> Welcome to MusicMonkey! Listen to the stuff you want!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Here is a list of genres listen to:</h2>
        <ul className="square">
          {genreList.map((genre) => {
            return (
              <li key={genre._id}>
                <Link to={{ pathname: `/genre/${genre._id}` }}>
                  {genre.tech1} vs. {genre.tech2}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to select a new genre?</h2>
        <Link to="/genre">
          <button className="btn btn-lg btn-danger">Create Genre!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
