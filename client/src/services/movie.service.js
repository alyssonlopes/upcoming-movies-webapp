
export const getUpcomingMovies = async ({ page }) => {
    return await fetch(`/api/movies/${page}`);
}

export const searchMovies = async ({ query, page }) => {
    return fetch(`/api/search/movie/${query}/${page}`);
}

export const getMovieDetails = async ({ movieId }) => {
    return await fetch(`/api/movie/${movieId}`);
}