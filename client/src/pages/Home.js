import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { QUERY_GENRES } from '../utils/queries';
import Auth from '../utils/auth';
/*this is used to import the gif so it can be used as a cool background*/
import gifBackground from './black-particle.gif';
import { useLazyQuery } from '@apollo/client';

const Home = () => {
  const [genreList, setGenreList] = useState([]);

  const [loadData, { data }] = useLazyQuery(QUERY_GENRES);

  useEffect(() => {
    const getGenreList = async () => {
      try {
        const { data } = await loadData();
        if (!data) {
          throw new Error('No list of genres');
        }
        setGenreList(data?.allGenres);
      } catch (err) {
        console.error(err);
      }
    };
    getGenreList();
  }, [loadData]);

  return (
    <div className="hero-background" style={{ backgroundImage: `url(${gifBackground})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container has-text-centered">
        <div className="has-border-glow">
          <div className="columns">
            <div className="column">
              <h1 className="title has-text-white">Welcome to Music Monkey! Listen to the stuff you want!</h1>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <h2 className="subtitle has-text-white">Here is a list of genres to listen to:</h2>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-flex is-flex-direction-column is-align-items-center">
              <h2 className="subtitle has-text-white">Ready to select a new genre?</h2>
              {!Auth.loggedIn() ? (
                <Link to="/login" className="button">
                  LOG IN!
                </Link>
              ) : (
                <Link to="/genre" className="button">
                  GENRES
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
