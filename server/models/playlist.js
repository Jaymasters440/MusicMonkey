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
            type: Schema.types.ObjectId,
            ref: 'Song'
        },
        genre: {
            type: Schema.Types.ObjectId,
            ref: 'Genre'
        }
        
    })
    const Genre = model('Genre', genreSchema);

    module.exports = Genre;