const { Schema, model } = require('mongoose');

const playlistSchema = new Schema(
    {
        name: {
            type: String,
            required:true,
            unique: true,
            trim: true
        },
        song: {
            type: Schema.Types.ObjectId,
            ref: 'Song'
        },
        genre: {
            type: String,
            ref: 'Genre'
        }
        
    })
    const Playlist = model('Playlist', playlistSchema);

    module.exports = Playlist;