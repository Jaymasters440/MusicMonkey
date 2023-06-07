//const { AuthenticationError } = require('apollo-server-express');
const { Genre } = require('../models');
//const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    genre: async () => {
      return Genre.find();
    },

    
  },
}

  /* Mutation: {
    // createPlaylist: async (parent, { listGenre = ["pop", "funk", "soul", "disco", "rock", "alternative", "jazz",] }) => {
      // const playlist = []

      for (let Genre of listGenre) {
        let currentList = []
        if (currentList.length > 0) {
          playlist.push(...currentList)
        }
      }

      conslole.log(listGenre)

     
    }
  */
     
module.exports = resolvers;
