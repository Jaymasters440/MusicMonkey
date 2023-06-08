const { Schema, model } = require('mongoose');

const songSchema = new Schema(
{
    title: {
        type: String,
        required: true,
        trim: true
    },
    artist: {
        type: String,
        required: true,
        trim: true    
    },
    genre: [ 
    { 
        type: Schema.Types.ObjectId, 
        ref: 'Genre' 
    },
    ],

});
const Song = model('Song', songSchema);

module.exports = Song;