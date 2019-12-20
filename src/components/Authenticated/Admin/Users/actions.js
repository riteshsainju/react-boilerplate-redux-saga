import action from 'actions';
import * as CONS from './constants';

export const getUserList = action(CONS.GET_USERLIST, 'page');
export const getUserListSuccess = action(CONS.GET_USERLIST_SUCCESS, 'data');
export const getUserListFailure = action(CONS.GET_USERLIST_FAILURE, 'error');

