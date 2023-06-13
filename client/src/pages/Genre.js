import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { useMutation, useQuery} from '@apollo/client';
import { QUERY_GENRES } from '../utils/queries.js';
import { CREATE_PLAYLIST } from '../utils/mutations.js';


const Genres = () => {
  const {loading, error, data} = useQuery(QUERY_GENRES);
  const [selectedGenres, setSelectedGenres] = useState([]);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {/* Once data can be fetched, this should loop through and create a div and a button for each genre. When you click the button it should add that genre to the selectedGenres array. */}
      <div className='columns is-multiline'>
        {data.allGenres.map((genre, index) => (
          <div key={index} className='column is-one-quarter'>
            <div className='button buttonWhite' onClick={ () => setSelectedGenres(previous => [...previous, genre.name])}>{genre.name}</div>
          </div>
        ))}
      </div>
      {/* We can also show the currently selected genres. */}
      <h1 className='subtitle'>Selected Genres:</h1>
      {selectedGenres.map((genre, index) => (
        <div key={index}>
          <h1 className='subtitle'>{genre}</h1>
        </div>
      ))}
      <div className='button buttonWhite' onClick={()=> setSelectedGenres([])}>Reset</div>
      <GeneratePlaylist selectedGenres={selectedGenres}/>
    </div>
  );
}

const GeneratePlaylist = ({selectedGenres}) => {
  let input;
  console.log(selectedGenres);
  const [createPlaylist, { data, loading, error }] = useMutation(CREATE_PLAYLIST);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;
  
  if (!Auth.loggedIn()) {
    return false;
  }
  
  // try {
  //   await createPlaylist(
  //     {
  //       variables: {
  //         genres: selectedGenres,
  //         name: 
  //       }
  //     }
  //   );
  // }
  // catch (err) {
  //   console.error(err)
  // }
  
  return (
    <div>
      <h1 className='subtitle'>Playlist Name:</h1>
      <form
        onSubmit={() => {
          createPlaylist({ variables: { genres: selectedGenres, name: input.value } });
          input.value = '';
        }}
      >
        <input 
          className='input'
          ref={node => {
            input = node;
          }}
        />
        <button type="submit" className='button buttonWhite'>Create playlist</button>
      </form>
    </div>
  );
}

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
              <Genres/>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-flex is-flex-direction-column is-align-items-center">
              <h2 className="subtitle">Ready to select a new genre?</h2>
              <Link to= "/login" className="button buttonWhite">LOG IN!</Link>
              <Link to= "/profile" className="button buttonWhite">PROFILE</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Home;