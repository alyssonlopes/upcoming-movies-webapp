const express = require('express')
const movieController = require('../controllers/movies.controller')

const router = express.Router()

router.get('/api/movies/:page', movieController.getUpcomingMovies);
router.get('/api/movie/:movie_id', movieController.getMovieDetails);
router.get('/api/search/movie/:query/:page', movieController.searchMovies)

module.exports = router