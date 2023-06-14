import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_GENRES } from '../utils/queries.js';
import { CREATE_PLAYLIST } from '../utils/mutations.js';
import gifBackground from './black-particle.gif';

const Genres = () => {
  const { loading, error, data } = useQuery(QUERY_GENRES);
  const [selectedGenres, setSelectedGenres] = useState([]);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {/* Once data can be fetched, this should loop through and create a div and a button for each genre. When you click the button it should add that genre to the selectedGenres array. */}
      <div className='columns is-multiline'>
        {data.allGenres.map((genre) => (
          <div className='column is-one-quarter'>
            <div
              className='button buttonWhite'
              onClick={() => setSelectedGenres((previous) => [...previous, genre.name])}
            >
              {genre.name}
            </div>
          </div>
        ))}
      </div>
      {/* We can also show the currently selected genres. */}
      <h1 className='subtitle has-text-white'>Selected Genres:</h1>
      {selectedGenres.map((genre) => (
        <div>
          <h1 className='subtitle has-text-white'>{genre}</h1>
        </div>
      ))}
      <div className='button' onClick={() => setSelectedGenres([])}>
        Reset
      </div>
      <GeneratePlaylist selectedGenres={selectedGenres} />
    </div>
  );
};

const GeneratePlaylist = ({ selectedGenres }) => {
  let input;

  const [createPlaylist, { data, loading, error }] = useMutation(CREATE_PLAYLIST);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  if (!Auth.loggedIn()) {
    return false;
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPlaylist({ variables: { genres: selectedGenres, name: input.value } });
          input.value = '';
        }}
      >
        <input className='input'
          ref={(node) => {
            input = node;
          }}
        />
        <button type='submit' className='sbutton'>Create playlist</button>
      </form>
    </div>
  );
};

const Home = () => {
  //   const [genreList, setGenreList] = useState([]);

  //   useEffect(() => {
  //     const getGenreList = async () => {
  //       try {
  //         const res = await getAllGenres();
  //         if (!res.ok) {
  //           throw new Error('No list of genres');
  //         }
  //         const genreList = await res.json();
  //         setGenreList(genreList);
  //       } catch (err) {
  //         console.error(err);
  //       }
  //     };
  //     getGenreList();
  //   }, []);

  return (
    <div
      className='hero-background'
      style={{
        backgroundImage: `url(${gifBackground})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className='container has-text-centered'>
        <div className='has-border-glow'>
          <div className='columns'>
            <div className='column'>
              <h1 className='title has-text-white'>Welcome to Music Monkey! Listen to the stuff you want!</h1>
            </div>
          </div>
          <div className='columns'>
            <div className='column'>
              <h2 className='subtitle has-text-white'>Here is a list of genres to listen to:</h2>
              <Genres />
            </div>
          </div>
          <div className='columns is-centered'>
            <div className='column is-flex is-flex-direction-column is-align-items-center'>
              <h2 className='subtitle has-text-white'>Ready to select a new genre?</h2>
              <Link to='/login' className='button'>
                LOG IN!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
