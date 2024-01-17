Performer.find ----> Find a list of performers
Performer.findOne -----> Find one individual performer
const foundPerformer = await Performer.findOne({ _id: req.params.performerId })
// returns the individual performer object you can manipulate
foundPerformer.credits.push(foundMovie) // assuming you found a movie in the rest of your code and now you want to say this performer you found in the db appeared in the movie you found in the db
const bradPitt = await Performer.findOne({ _id: req.params.performerId })
const oceans11 = await Movie.findOne({ _id: req.params.movieId })
// bradPitt was in Oceans 11
bradPitt.credits.push(oceans11)
// add brad pitt to oceans 11 cas
oceans11.cast.push(bradPitt)
// .. then save brad pitt and then save oceans11
// then respond with json with the movie and the performer in one object
// add errors and try catch where you need