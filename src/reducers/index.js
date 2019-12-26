import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form';
import authenticatedReducer from 'components/Authenticated/reducer';
import registrationReducer from 'components/Authenticated/Modules/Registration/reducer';
import authenticationReducer from 'components/Authentication/reducer';
import genericValuesReducer from 'components/Authenticated/Admin/GenericValues/reducer';
import doctorsReducer from 'components/Authenticated/Admin/Doctors/reducer';
import employeesReducer from 'components/Authenticated/Admin/Employees/reducer';
import usersReducer from 'components/Authenticated/Admin/Users/reducer';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    form,
    usersReducer,
    registrationReducer,
    authenticationReducer,
    genericValuesReducer,
    doctorsReducer,
    employeesReducer,
    authenticatedReducer
  });

export default createRootReducer;
