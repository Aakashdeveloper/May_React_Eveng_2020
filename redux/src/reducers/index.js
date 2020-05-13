import {combineReducers}  from 'redux';
import movies from './movie_reducer';

const rootReducer = combineReducers({
    movies
})

export default rootReducer