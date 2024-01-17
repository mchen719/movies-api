const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: String, 
    releaseYear: Number, 
    mpaaRating: String,
    cast: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Performer'}]
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie