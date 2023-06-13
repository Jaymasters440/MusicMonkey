import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import { QUERY_USERS, QUERY_ALL_PLAYLISTS, QUERY_PLAYLIST } from '../utils/queries';
import { REMOVE_PLAYLIST } from '../utils/mutations';

import Auth from '../utils/auth';

const Profile = () => {
  // selectedPlaylist will store the ID of whichever playlist you click on
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  // playlistSelected is a boolean that changes to true when you click on a playlist.
  const [playlistSelected, setPlaylistSelected] = useState(false);
  const {loading, error, data} = useQuery(QUERY_ALL_PLAYLISTS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  // Check if you're logged in.  If you're not, display a page telling you to login and a link to the login page.
  if (!Auth.loggedIn()) {
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
                <h2 className="subtitle">You need to be logged in to use this sight. Use the Login page to log in or sign up on the Signup page!</h2>
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column is-flex is-flex-direction-column is-align-items-center">
                <Link to= "/login" className="button buttonWhite">LOG IN!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  } else {
    // The code below will show if you are logged in.
    return (
      // here it checks if playlistSelected is false.  If its false it will show all your playlists.
      !playlistSelected ?
      <div className="hero is-black is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="has-border-glow">
              <div className="columns">
                <div className="column">
                  <h1 className='title'>Your Playlists:</h1>
                </div>
              </div>
              <div className='columns is-multiline'>
                {data.allPlaylists.map((playlist) => (
                  // The code below will filter the list of playlists to only show ones that are tied to your account
                  playlist.userId == Auth.getProfile().data._id ?
                  <div className='column is-one-quarter'>
                    <div 
                      className='button buttonWhite' 
                      onClick={()=> {
                      setPlaylistSelected(true);
                      setSelectedPlaylist(playlist._id);
                    }}>
                      {playlist.name}
                    </div>
                  </div>
                  :
                  <></>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      :
      // if playlistSelected is true, it'll display the playlist component.  We pass in the ID of the playlist you click on (selectedPlaylist), and we also pass in a function that sets playlistSelected to false, so we can look at all the playlists again.
      <Playlist playlist={selectedPlaylist} setPlaylistSelected={()=>setPlaylistSelected(false)}/>
    );
  }
}

const Playlist = ({playlist, setPlaylistSelected}) => {
  // we query a single playlist based on the ID passed in as "playlist" to this component.
  const { data, loading, error } = useQuery(QUERY_PLAYLIST, {variables: { playlistId: playlist},
  });

  console.log(data)

  if (loading) return 'Loading';
  if (error) return `Error! ${error.message}`;

  return (
    <div className="hero is-black is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="has-border-glow">
              <div className="columns">
                <div className="column">
                  <h1 className='title'>{data.singlePlaylist.name}</h1>
                </div>
              </div>
              <h2 className='subtitle'>Genres:</h2>
              <ul>
              {data.singlePlaylist.genre.map((genre) => (
                <li>
                  <h1>{genre.name}</h1>
                </li>
              ))}
              </ul>
              <h2 className='subtitle'>Songs:</h2>
              <ul>
              {data.singlePlaylist.song.map((song) => (
                <li>
                  <h1>{song.title} - {song.artist}</h1>
                </li>
              ))}
              </ul>
              {/* We pass the playlist id into the DeletePlaylist component so we can use it when we run the mutation*/}
              <DeletePlaylist playlist={data.singlePlaylist._id}/>
              {/* this button sets playlistSelected to false, so we are no longer just viewing a single playlist */}
              <button className='button buttonWhite' onClick={setPlaylistSelected}>View All Playlists</button>
          </div>
        </div>
      </div>
    </div>
  )
};

const DeletePlaylist = ({playlist}) => {
  const [deletePlaylist, { data, loading, error }] = useMutation(REMOVE_PLAYLIST);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <button   
        onClick={async () => {
          await deletePlaylist({ variables: { removePlaylistPlaylistId2: playlist } });
          window.location.reload(true);
        }}
        className='button buttonWhite'>
          Delete Playlist
      </button>
    </div>
  )
};



export default Profile;
