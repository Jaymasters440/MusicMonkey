const { AuthenticationError } = require('apollo-server-express');
const { Genre } = require('../models');
const { Playlist } = require('../models');
const { Song } = require('../models');
const { User } = require('../models');
const { signToken } = require('../../client/src/utils/auth');

const resolvers = {
  Query: {
    genres: async () => {
      return Genre.find();
    },
    users: async () => {
      return User.find().populate('playlists');
    },
    playlists: async () => {
      return Playlist.find();
    },
    songs: async () => {
      return Song.find();
    },
    playlist: async (parent, { playlistId }) => {
      return Playlist.findOne({ _id: playlistId });
    }
},

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    //  createPlaylist: async (parent, {playlistArray} ) => {
    //   const getplaylist = await 
    //   const playlist = []

    //   for (let Genre of listGenre) {
    //     let currentList = []
    //     if (currentList.length > 0) {
    //       playlist.push(...currentList)
    //     }
    //   }

      //console.log(listGenre);
     
    removePlaylist: async (parent, { playlistId, userId }) => {
      return Playlist.findOneAndUpdate(
        { _id: userId },
        { $pull: { playlists: { _id: playlistId}}},
        { new: true }
      );
    },
  }
};

     
    
     
module.exports = resolvers;
