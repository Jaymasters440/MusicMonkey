const { Schema, model } = require('mongoose');

const artistSchema = new Schema(
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
    const Artist = model('Artist', artistSchema);

    module.exports = Artist;