const request = require('axios')
const { API_ENDPOINT, API_KEY } = require('../../config')

/**
 * Get a list of upcoming movies by page.
 * 
 * @param {number} [page=1] Number of the page to query
 * @return {Array} Movies list
 */
const getUpcomingMovies = async (page = 1) => {
    const result = await request.get(`${API_ENDPOINT}/movie/upcoming?api_key=${API_KEY}&page=${page}`)
    return result.data.results
}

/**
 * Get the movie details
 * 
 * @param {number} movieId Movie ID
 * @return {object} Movie Details
 */
const getMovieDetails = async (movieId) => {
    const result = await request.get(`${API_ENDPOINT}/movie/${movieId}?api_key=${API_KEY}`)
    return result.data
}

/**
 * Search for movies
 * 
 * @param {string} query Text query to search
 * @param {number} [page=1] Number of the page to query
 * @return {Array} Movies list
 */
const searchMovies = async (query, page = 1) => {
    const result = await request.get(`${API_ENDPOINT}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`)
    return result.data.results
}

module.exports = {
    getUpcomingMovies,
    getMovieDetails,
    searchMovies
}
