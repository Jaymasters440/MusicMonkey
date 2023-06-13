const db = require('../config/connection');
const { Genre, Song } = require('../models');



const songList = [
    {
      "title":"Born under a Bad Sign",
      "artist": "Robert Johnson",
      "genre": "Blues"
  },
   {
      "title":"The Sky is crying",
      "artist": "Stevie Ray Vaughn",
      "genre":"Blues"
  },
   {
      "title": "Candy Man",
      "artist": "Missisippi John Hurt",
      "genre":"Blues"
  },
   {
      "title":"Rehab",
      "artist":"Amy Winehouse",
      "genre":"Pop"
  },
   {
      "title":"Hey Ya",
      "artist":"OutKast",
      "genre":"Pop"
  },
   {
      "title":"Royals",
      "artist":"Lorde",
      "genre":"Pop"
  },
   {
      "title":"It Wasn't Me",
      "artist":"Shaggy",
      "genre":"R&B"
  },
   {
      "title":"Whatta Man",
      "artist":"Salt N Pepa",
      "genre":"R&B"
  },
   {
      "title":"Family Affair",
      "artist":"Mary J. Blige",
      "genre":"R&B"
  },
   {
      "title":"Play That Funky Music",
      "artist":"Wild Cherry",
      "genre":"Funk"
  },
   {
      "title":"Low Rider",
      "artist":"War",
      "genre":"Funk"
  },
   {
      "title":"Shining Star",
      "artist":"Earth, Wind & Fire",
      "genre":"Funk"
  },
   {
      "title":"Bohemian Rhapsody",
      "artist":"Queen",
      "genre":"Rock"
  },
   {
      "title":"I Can't Get No Satisfaction",
      "artist":"Roling stones",
      "genre":"Rock"
  },
   {
      "title":"Purple Haze",
      "artist":"Jimi Hendrix",
      "genre":"Rock"
  }
];


const genreList = [
    {
      "name": "Hip-hop"
  },
  {
      "name": "Pop"
  },
  {
      "name": "Alternative"
  },
  {
      "name": "Clasic Rock"
  },
  {
      "name": "Reggae"
  },
  {
      "name": "Metal"
  },
  {
      "name": "Classical"
  },
  {
      "name": "Afrobeats"
  },
  {
      "name": "Funk"
  },
  {
      "name": "R&B"
  },
  {
      "name": "Blues"
  },
  {
      "name": "Soft Jazz"
  },
  {
      "name": "Psycadellic"
  },
  {
      "name": "Electronica"
  },
  {
      "name": "Acid-house"
  },
{
      "name":"Folk"
  },
{
      "name":"Punk"
  },
{
      "name":"C-pop"
  },
{
      "name":"J-pop"
  },
{
      "name":"Grupera"
  },
  {
    "name": "Rock"
  }    
   ];


db.once('open', async () => {
   await Genre.deleteMany();

   const genre = await Genre.insertMany(genreList);
   console.log('genres seeded!', genre)
    const songListwithGenreIds = songList.map(song => {
        console.log(song)
        const genreId = genre.filter(item => item.name === song.genre )[0]?._id
        return {
            ...song, 
            genre: [genreId]
        }
    })
   
   
   await Song.deleteMany();
   const songs = await Song.insertMany(songListwithGenreIds);



  console.log('Songs Seeded!');
  process.exit(0);
});
