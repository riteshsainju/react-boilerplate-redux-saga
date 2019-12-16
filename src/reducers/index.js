import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form';
import registrationReducer from 'components/Authenticated/Modules/Registration/reducer';
import authenticationReducer from 'components/Authentication/reducer';
import genericValuesReducer from 'components/Authenticated/Settings/Admin/GenericValues/reducer';

import usersReducer from './users';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    form,
    usersReducer,
    registrationReducer,
    authenticationReducer,
    genericValuesReducer,
  });

export default createRootReducer;
