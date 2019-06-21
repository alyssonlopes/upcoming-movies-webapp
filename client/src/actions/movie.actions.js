import { createAsyncActionCreator } from '../helpers/redux.helper';
import * as movieService from '../services/movie.service';

export const ACTIONS = {
    GET_UPCOMING_MOVIES: 'GET_UPCOMING_MOVIES',
    SEARCH_MOVIES: 'SEARCH_MOVIES',
    GET_MOVIE_DETAILS: 'GET_MOVIE_DETAILS'
};

export const getUpcomingMovies = (page) => createAsyncActionCreator(
    ACTIONS.GET_UPCOMING_MOVIES,
    movieService.getUpcomingMovies,
    { page }
);

export const searchMovies = (query, page) => createAsyncActionCreator(
    ACTIONS.SEARCH_MOVIES,
    movieService.searchMovies,
    { query, page }
);

export const getMovieDetails = (movieId) => createAsyncActionCreator(
    ACTIONS.GET_MOVIE_DETAILS,
    movieService.getMovieDetails,
    { movieId }
);
