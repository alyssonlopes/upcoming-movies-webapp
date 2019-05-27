const IMAGE_BASE_URL = (width = 300) => `https://image.tmdb.org/t/p/w${width}`;

exports.updateMoviePictureUrls = (movieResult, width = 300) => {
    if (movieResult) {
        return {
            ...movieResult,
            backdrop_path: `${IMAGE_BASE_URL(width)}${movieResult.backdrop_path}`,
            poster_path: `${IMAGE_BASE_URL(width)}${movieResult.poster_path}`,
        }
    }
    return {};
};