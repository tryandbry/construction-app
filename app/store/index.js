import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import estimate from './estimate';

export default createStore(
  combineReducers({
    estimate,
  }),
  applyMiddleware(createLogger,thunkMiddleware)
);
