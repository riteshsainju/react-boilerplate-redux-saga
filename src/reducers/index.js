import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import usersReducer from './users';

const createRootReducer = history => combineReducers({
  router: connectRouter(history),

  usersReducer
});

export default createRootReducer
