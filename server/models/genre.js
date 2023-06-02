const { Schema, model } = require('mongoose');

const genreSchema = new Schema(
    {
        name: {
            type: String,
            required:true,
            unique: true,
            trim: true
        },
        // add descriptors for Ggenre Schema and requirements
        //  ref: 'Class'
    })
    const Genre = model('Genre', genreSchema);

    module.exports = Genre;