import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { QUERY_GENRES} from '../utils/queries'
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
// Uncomment import statements below after building queries and mutations
//import { useQuery} from '@apollo/client';
//import {QUERY_GENRE} from '../utils/queries';

const Home = () => {
  const [genreList, setGenreList] = useState([]);

  const allGenres = useQuery(QUERY_GENRES)
  useEffect(() => {
    const getGenreList = async () => {
      try {
        const res = await allGenres();
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
              <h1 className="title">Welcome to Music Monkey! Listen to the stuff you want!</h1>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <h2 className="subtitle">Here is a list of genres to listen to:</h2>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-flex is-flex-direction-column is-align-items-center">
              <h2 className="subtitle">Ready to select a new genre?</h2>
              {!Auth.loggedIn() ? 
                <Link to= "/login" className="button">LOG IN!</Link>  
              : 
                <Link to= "/genre" className="button">GENRES</Link>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Home;
