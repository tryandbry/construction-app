import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import estimate from './estimate';
import demolition from './demolition';

export default createStore(
  combineReducers({
    estimate,
    demolition
  }),
  applyMiddleware(createLogger,thunkMiddleware)
);
