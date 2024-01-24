const Movie = require('../models/movie')
const Performer = require('../models/performer')

//Index
exports.listMovies = async (req, res) => {
    try {
        const movies = await Movie.find({})

        movies.forEach(movie => res.json(movie))  
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Create 
exports.addMovie = async (req, res) => {
    try {
        const movie = new Movie(req.body)
        await movie.save()
        res.json({movie})
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

//Update
exports.updateMovie = async (req, res) => {
    try {
        const updates = Object.keys(req.body)
        const movie = await Movie.findOne({
            _id: req.params.id
        })

        updates.forEach(update => movie[update] = req.body[update])
            await movie.save()
            res.json(movie)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

//Delete
exports.deleteMovie = async (req, res) => { 
    try {
        await req.movie.deleteOne()
        res.json({message: 'Movie Deleted'})
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

