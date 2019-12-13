import action from 'actions';
import * as CONS from './constants';

export const login = action(CONS.LOGIN, 'user', 'params');
export const loginSuccess = action(CONS.LOGIN_SUCCESS, 'data');
export const loginFailure = action(CONS.LOGIN_FAILURE, 'error');
