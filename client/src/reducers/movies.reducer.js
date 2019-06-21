import { combineReducers } from 'redux';
import { createAsyncReducer } from '../helpers/redux.helper';
import { uniqueArray } from '../helpers/array.util'
import { ACTIONS as MOVIE_ACTIONS } from '../actions/movie.actions';

/**
 * This will create a new state with both the existing movies and new pages of movies
 * 
 * @param {*} state 
 * @param {*} action 
 */
const moviesSuccessReducer = (state, action) => {
    const existingMovies = state.response && action.response.page > 1 ? state.response.results : [];
    const results = uniqueArray([
        ...existingMovies,
        ...action.response.results
    ])
    return {
        ...state,
        isLoading: action.response.page === 1 && action.response.page !== action.response.total_pages,
        response: {
            ...action.response,
            results
        }
    };
}

const moviesReducer = combineReducers({
    upcomingMovies: createAsyncReducer(MOVIE_ACTIONS.GET_UPCOMING_MOVIES, {
        [`${MOVIE_ACTIONS.GET_UPCOMING_MOVIES}_SUCCESS`]: moviesSuccessReducer
    }),
    movieSearch: createAsyncReducer(MOVIE_ACTIONS.SEARCH_MOVIES, {
        [`${MOVIE_ACTIONS.SEARCH_MOVIES}_SUCCESS`]: moviesSuccessReducer
    }),
    movieDetails: createAsyncReducer(MOVIE_ACTIONS.GET_MOVIE_DETAILS),
});

export default moviesReducer;