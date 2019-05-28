const DEFAULT_WIDTH = 500
const IMAGE_BASE_URL = (width = DEFAULT_WIDTH) => `https://image.tmdb.org/t/p/w${width}`;

exports.updateMoviePictureUrls = (movieResult, width = DEFAULT_WIDTH) => {
    if (movieResult) {
        return {
            ...movieResult,
            backdrop_path: `${movieResult.backdrop_path && IMAGE_BASE_URL(width) + movieResult.backdrop_path}`,
            poster_path: `${movieResult.poster_path && IMAGE_BASE_URL(width) + movieResult.poster_path}`,
        }
    }
    return {};
};