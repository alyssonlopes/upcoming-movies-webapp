import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddlware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import movieReducer from './reducers/movie.reducer';

const loggerMiddleware = createLogger();

const store = createStore(
    movieReducer,
    {},
    compose(
        applyMiddleware(
            thunkMiddlware,
            loggerMiddleware
        )
    )
);

export default store;
