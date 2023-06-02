const { Schema, model } = require('mongoose');

const playlistSchema = new Schema(
    {
        name: {
            type: String,
            required:true,
            unique: true,
            trim: true
        },
        // add descriptors for artist Schema and requirements
        //  ref: 'Class'
    })
    const Playlist = model('Playlist', playlistSchema);

    module.exports = Playlist;