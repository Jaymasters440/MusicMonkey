const db = require('../config/connection');
const { Genre } = require('../models');
const { Song } = require('../models');


const genreSeeds = require('./genreSeeds.json');
const songSeeds = require('./songSeeds.json');

db.once('open', async () => {
  // await genre.deleteMany({});

  const Genres = await Genre.insertMany(genreSeeds);
  const Song = await Song.insertMany(songSeeds);

  console.log('Genres seeded!');
  process.exit(0);
});
