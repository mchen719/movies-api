const mongoose = require('mongoose')
const Movie = require('./movie') ///Arthur did not include it in his so we may need to remove 

const performerSchema = new mongoose.Schema({
    name: { type: String, require: true, unique: true},
    born: String, 
    credits:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie'}]
},
    { timestamps: true}
)

const Performer = mongoose.model('Perfomer', performerSchema)

module.exports = Performer 