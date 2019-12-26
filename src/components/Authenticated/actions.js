import action from 'actions';
import * as CONS from './constants';

export const getRoles = action(CONS.GET_ROLES, 'data');
export const getRolesSuccess = action(CONS.GET_ROLES_SUCCESS, 'data');
export const getRolesFailure = action(CONS.GET_ROLES_FAILURE, 'error');
