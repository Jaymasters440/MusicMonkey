const { Schema, model } = require('mongoose');

const titleSchema = new Schema(
    {
        name: {
            type: String,
            required:true,
            unique: true,
            trim: true
        },
        // add descriptors for Title Schema and requirements
        //  ref: 'Class'
    })
    const Title = model('Title', titleSchema);

    module.exports = Title;