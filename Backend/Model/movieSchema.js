const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        unique: true
    },
    director : {
        type: String,
        required: true
    },
    releaseYear : {
        type: Number,
        required: true
    },
    genre : {
        type: String,
        required: true
    },
    Rating : {
        type : Number,
        required : true
    }
})

module.exports = mongoose.model("movieModel",movieSchema);