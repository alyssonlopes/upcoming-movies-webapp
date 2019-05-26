const movieService = require('../services/movies.service')

/**
 * Request the movie list from the service
 * 
 */
const getUpcomingMovies = async (req, res, next) => {
    try {
        const movies = await movieService.getUpcomingMovies(req.params.page)
        res.json(movies)
        next()
    } catch (error) {
        let response = {
            status: 500,
            data: error.message
        }
        if (error.response)
            response = error.response

        res.sendStatus(response.status)
        next(response.data)
    }
}

/**
 * Request the movie details
 * 
 */
const getMovieDetails = async (req, res, next) => {
    try {
        const movie = await movieService.getMovieDetails(req.params.movie_id)
        res.json(movie)
        next()
    } catch (error) {
        let response = {
            status: 500,
            data: error.message
        }
        if (error.response)
            response = error.response

        res.sendStatus(response.status)
        next(response.data)
    }
}

/**
 * Search movies
 */
const searchMovies = async (req, res, next) => {
    try {
        const movies = await movieService.searchMovies(req.params.query, req.params.page)
        res.json(movies)
        next()
    } catch (error) {
        let response = {
            status: 500,
            data: error.message
        }
        if (error.response)
            response = error.response

        res.sendStatus(response.status)
        next(response.data)
    }
}

module.exports = {
    getUpcomingMovies,
    getMovieDetails,
    searchMovies
}