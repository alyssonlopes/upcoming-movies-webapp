import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddlware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import moviesReducer from './reducers/movies.reducer';

let middleware = [thunkMiddlware]

if (process.env.NODE_ENV === 'development')
    middleware = [...middleware, createLogger()]

const store = createStore(
    moviesReducer,
    {},
    compose(
        applyMiddleware(
            ...middleware
        )
    )
);

export default store;
