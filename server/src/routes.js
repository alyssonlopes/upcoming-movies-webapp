const express = require('express')
const movieController = require('./controllers/movies.controller')

const router = express.Router()

router.get('/movies/:page', movieController.getUpcomingMovies);
router.get('/movie/:movie_id', movieController.getMovieDetails);
router.get('/search/movie/:query/:page', movieController.searchMovies)

module.exports = router