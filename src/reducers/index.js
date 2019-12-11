import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form';

import usersReducer from './users';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    form,
    usersReducer,
  });

export default createRootReducer;
