import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Playlist = ({playlist, setSelectedPlaylist}) => {
  return (
    <div>
      <h1>{playlist.name}</h1>
      <h2>Genres:</h2>
      <ul>
      {playlist.genre.map((genre) => (
        <li>
          <h1>{genre.name}</h1>
        </li>
      ))}
      </ul>
      <h2>Songs:</h2>
      <ul>
      {playlist.song.map((song) => (
        <li>
          <h1>{song.title}</h1>
          <h2>{song.artist}</h2>
        </li>
      ))}
      </ul>
      <button onClick={() => setSelectedPlaylist}>View All</button>
    </div>
  )
};

export default Playlist;