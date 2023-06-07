const db = require('../config/connection');
const { Genre } = require('../models');

const genreSeeds = require('./genreSeeds.json');

db.once('open', async () => {
  // await genre.deleteMany({});

  const Genres = await Genre.insertMany(genreSeeds);

  console.log('Genres seeded!');
  process.exit(0);
});
