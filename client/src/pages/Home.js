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
    <div class="hero is-black is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="has-border-glow">
          <div class="columns">
            <div class="column">
              <h1 class="title">Welcome to Music Monkey! Listen to the stuff you want!</h1>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <h2 class="subtitle">Here is a list of genres to listen to:</h2>
            </div>
          </div>
          <div class="columns is-centered">
            <div class="column is-flex is-flex-direction-column is-align-items-center">
              <h2 class="subtitle">Ready to select a new genre?</h2>
              <button class="button">CREATE GENRE!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Home;
