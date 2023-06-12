const { AuthenticationError } = require('apollo-server-express');
const { Genre } = require('../models');
const { Playlist } = require('../models');
const { Song } = require('../models');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    allGenres: async () => {
      return Genre.find();
    },
    user: async (parent, args, context) => {
      if (context.user) {
          return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    allPlaylists: async () => {
      return Playlist.find().populate({
        path: "song",
        populate: {
          path:"genre"
        }
      }).populate('genre');
    },
    singlePlaylist: async (parent, { playlistId }) => {
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
          throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
  },
     createPlaylist: async (parent, {genres, name}, context ) => {
      console.log(genres)
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      if (!Array.isArray(genres) || !genres.length > 0) {
        throw new Error ("You need to select at least 1 genre!")
      }

      if (!(typeof name === "string")) {
        throw new Error ("You must give your playlist a name!")
      }

      let songList = [];
      for (let genre of genres) {
        const currentList = await Song.find().populate("genre")
      // console.log(genre) 
      // console.log("Blues", currentList)
      const filterCurrentList = currentList.filter(song => {
      const allGenres = song.genre
      return allGenres.some(item => item.name === genre)
      })
      // console.log(filterCurrentList)

      songList.push(...filterCurrentList)
      } 
      let uniqueGenres = [...songList.map(song => song.genre[0])]
      uniqueGenres = [...new Set(uniqueGenres)]
      let playlist = await Playlist.create({
        name: name,
        song: songList.map(song => song._id),
        genre: uniqueGenres,
        userId:context.user._id
      }) 
      // Populate song field
      playlist = await Playlist.findById(playlist._id).populate({
        path: "song",
        populate: {
          path:"genre"
        }
      }).populate('genre');
      return playlist;
     },


    removePlaylist: async (parent, { playlistId }, context) => {
      console.log(context.user._id)
      if (context.user) {
        try{
          const deletedPlaylist = await Playlist.findOneAndDelete({_id:playlistId, userId:context.user._id })
          .populate({
            path: "song",
            populate: {
              path:"genre"
            }
          }).populate('genre');
          console.log(deletedPlaylist)
          return {
            itemDeleted:deletedPlaylist,
            message:`Successfully deleted playlist: ${deletedPlaylist.name}`
          }
        } catch(e){
          //update message 
          throw new AuthenticationError('This is not your playlist!');
        }


      // return Playlist.findOneAndUpdate(
      //   { _id: context.user._id },
      //   { $pull: { playlists: { _id: playlistId}}},
      //   { new: true }
      // );

    }
    throw new AuthenticationError('You need to be logged in!');
  },
}};

     
    
     
module.exports = resolvers;
