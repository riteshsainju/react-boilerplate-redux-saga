import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form';
import registrationReducer from 'components/Authenticated/Modules/Registration/reducer';

import usersReducer from './users';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    form,
    usersReducer,
    registrationReducer,
  });

export default createRootReducer;
