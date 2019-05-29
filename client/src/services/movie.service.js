const API_URL = process.env.REACT_APP_API_URL

export const getUpcomingMovies = async ({ page }) => {
    return await fetch(`${API_URL}/api/movies/${page}`);
}

export const searchMovies = async ({ query, page }) => {
    return fetch(`${API_URL}/api/search/movie/${query}/${page}`);
}

export const getMovieDetails = async ({ movieId }) => {
    return await fetch(`${API_URL}/api/movie/${movieId}`);
}