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
  },
  {
    "title":"Taste",
    "artist":"Tyga Featuring Offset",
    "genre":"Rap"
},
{
    "title":"Hey Mista",
    "artist":"Isaiah Rashad",
    "genre":"Rap"
},
{
    "title":"AstroThunder",
    "artist":"Travis Scott",
    "genre":"Rap"
},
{
    "title":"Blu Moon",
    "artist":"THEY",
    "genre":"Hip-Hop"
},
{
    "title":"Whole Lotta Money",
    "artist":"BIA",
    "genre":"Hip-Hop"
},
{
    "title":"Middle Child",
    "artist":"J-cole",
    "genre":"Hip-Hop"
},
{
    "title":"Loser",
    "artist":"Beck",
    "genre":"Alternative"
},
{
    "title":"Bastards of Young",
    "artist":"The Replacements",
    "genre":"Alternative"
},
{
    "title":"Creep",
    "artist":"Radiohead",
    "genre":"Alternative"
},
{
    "title":"Whole Lotta Love",
    "artist":"Led Zeppelin",
    "genre":"Classic Rock"
},
{
    "title":"Born to be Wild",
    "artist":"Steppenwolf",
    "genre":"Classic Rock"
},
{
    "title":"Hotel California",
    "artist":"Eagles",
    "genre":"Classic Rock"
},
{
    "title":"No Woman No Cry",
    "artist":"Bob Marley",
    "genre":"Reggae"
},
{
    "title":"Legalize It",
    "artist":"Peter Tosh",
    "genre":"Reggae"
},
{
    "title":"Tomorrow People",
    "artist":"Ziggy Marley",
    "genre":"Reggae"
},
{
    "title":"Angel of Death",
    "artist":"Slayer",
    "genre":"Metal"
},
{
    "title":"Evil",
    "artist":"Mercyful Fate",
    "genre":"Metal"
},
{
    "title":"Sweet Child O' Mine",
    "artist":"Guns N' Roses",
    "genre":"Metal"
},
{
    "title":"Moonlight Sonata",
    "artist":"Beethoven",
    "genre":"Classical"
},
{
    "title":"Orchestral Suite No. 3",
    "artist":"Johann Sebastiean Bach",
    "genre":"Classical"
},
{
    "title":"Swan Lake",
    "artist":"Tchaikovsky",
    "genre":"Classical"
},
{
    "title":"Acid Attack",
    "artist":"Mr. Fingers",
    "genre":"Acid House"
},
{
    "title":"Code-of-Acid",
    "artist":"Code 3",
    "genre":"Acid House"
},
{
    "title":"Harder, Better, Faster, Stronger",
    "artist":"Daft Punk",
    "genre":"Electronic"
},
{
    "title":"Strobe",
    "artist":"Deadmau5",
    "genre":"Electronic"
},
{
    "title":"Flow Coma",
    "artist":"808 State",
    "genre":"Acid House"
},
{
    "title":"Praise you",
    "artist":"Fatboy Slim",
    "genre":"Electronic"
},
{
    "title":"Lucy in the Sky with Diamonds",
    "artist":"The Beatles",
    "genre":"Psycadelic"
},
{
    "title":"White Rabbit",
    "artist":"Jefferson Airplane",
    "genre":"Psycadelic"
},
{
    "title":"The End",
    "artist":"The Doors",
    "genre":"Psycadelic"
},
{
    "title":"Tiánmì mì ",
    "artist":"Tiánmì mì ",
    "genre":"C Pop"
},
{
    "title":"Xiǎo píngguǒ",
    "artist":"Chopstick Brothers",
    "genre":"C Pop"
},
{
    "title":"Dāng (当)",
    "artist":"Power Station",
    "genre":"C Pop"
},
{
    "title":"LADY",
    "artist":"Kenshi Yonezu",
    "genre":"J-pop"
},
{
    "title":"NIGHT DANCER",
    "artist":"imase",
    "genre":"J-pop"
},
{
    "title":"Matsuri",
    "artist":"Fuji Kaze",
    "genre":"J-pop"
},
{
    "title":"Here Comes Your Man",
    "artist":"Pixies",
    "genre":"Indie"
},
{
    "title":"Ball And Biscuit",
    "artist":"the White Stripes",
    "genre":"Indie"
},
{
    "title":"Radio Free Europe",
    "artist":"R.E.M.",
    "genre":"Indie"
},
{
    "title":"Unforgettable",
    "artist":"French Montana",
    "genre":"Afrobeats"
},
{
    "title":"Woman",
    "artist":"Doja Cat",
    "genre":"Afrobeats"
},
{
    "title":"Soweto",
    "artist":"Victony",
    "genre":"Afrobeats"
},
{
    "title":"Just the Two of Us",
    "artist":"Grover Washington, Jr.",
    "genre":"Soft Jazz"
},
{
    "title":"Smooth Operator",
    "artist":"Sade",
    "genre":"Soft Jazz"
},
{
    "title":"White",
    "artist":"Frank Ocean",
    "genre":"Soft Jazz"
},
{
    "title":"Like a Rolling Stone",
    "artist":"Bob Dylan",
    "genre":"Folk"
},
{
    "title":"Hurt",
    "artist":"Johnny Cash",
    "genre":"Folk"
},
{
    "title":"Skinny Love",
    "artist":"Bon Iver",
    "genre":"Folk"
},
{
    "title":"La Chona",
    "artist":"Los Tucanes De Tijuana",
    "genre":"Grupera"
},
{
    "title":"La Puerta Negra",
    "artist":"Los Tigres Del Norte",
    "genre":"Grupera"
},
{
    "title":"Para Que Regreses",
    "artist":"El Chapo De Sinaloa",
    "genre":"Grupera"
},
{
    "title":"Anarchy in the U.K.",
    "artist":"Sex Pistols",
    "genre":"Punk"
},
{
    "title":"London Calling",
    "artist":"The Clash",
    "genre":"Punk"
},
{
    "title":"Blitzkrieg Bop",
    "artist":"Ramones",
    "genre":"Punk"
},
{
    "title":"The Guillotine",
    "artist":"Escape the Fate",
    "genre":"Screamo"
},
{
    "title":"The Crimson",
    "artist":"Atreyu",
    "genre":"Screamo"
},
{
    "title":"I Got Punched in the Nose for Sticking My Face in Other People’s Business",
    "artist":"Boy's Night Out",
    "genre":"Screamo"
},

];


const genreList = [
    {
      "name": "Hip-Hop"
  },
  {
      "name": "Pop"
  },
  {
      "name": "Alternative"
  },
  {
      "name": "Classic Rock"
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
      "name": "Psycadelic"
  },
  {
      "name": "Electronic"
  },
  {
      "name": "Acid House"
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
  },
  {
    "name": "Rap"
  } , 
  {
    "name": "Indie"
  },
  {
    "name": "Screamo"
  },
  
  
  

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
