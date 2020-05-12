import {createStore, applyyMiddleware} from 'redux';
import {logger} from 'redux-logger';

import reducer from '../reducers';

let store = createStore(reducer,applyyMiddleware(logger));

export default store;

