import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllGenres } from '../utils/api';

// Uncomment import statements below after building queries and mutations
//import { useQuery} from '@apollo/client';
//import {QUERY_GENRE} from '../utils/queries';

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
    <div className="hero is-black is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="has-border-glow">
          <div className="columns">
            <div className="column">
              <h1 className="title hometitle">Welcome to Music Monkey!</h1>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <h2 className="subtitle homesubtitle">Pick your favorite genres, let us do the rest!</h2>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-flex is-flex-direction-column is-align-items-center">
              <h2 className="subtitle homesubtitle">Get started by signing up or logging in here!</h2>
              <Link to= "/login" className="button">LOG IN!</Link>
              <Link to= "/signup" className="button">SIGN UP!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Home;
