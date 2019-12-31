import action from 'actions';
import * as CONS from './constants';

export const getUserList = action(CONS.GET_USERLIST, 'page');
export const getUserListSuccess = action(CONS.GET_USERLIST_SUCCESS, 'data');
export const getUserListFailure = action(CONS.GET_USERLIST_FAILURE, 'error');

export const getUser = action(CONS.GET_USER, 'id');
export const getUserSuccess = action(CONS.GET_USER_SUCCESS, 'data');
export const getUserFailure = action(CONS.GET_USER_FAILURE, 'error');

export const updateUser = action(CONS.UPDATE_USER, 'data', 'id', 'redirectUrl');
export const updateUserSuccess = action(CONS.UPDATE_USER_SUCCESS, 'data');
export const updateUserFailure = action(CONS.UPDATE_USER_FAILURE, 'error');
