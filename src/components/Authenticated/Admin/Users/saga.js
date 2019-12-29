import { take, cancel, fork, takeLatest, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { toast } from 'react-toastify';

import { AppSaga } from 'sagas';

// import { API_BASE } from 'constants';
import * as CONS from './constants';
import {
  getUserListSuccess,
  getUserListFailure,
  getUserSuccess,
  getUserFailure,
  updateUserSuccess,
  updateUserFailure,
  getUserList
} from './actions';

const API_BASE = process.env.REACT_APP_API_URL;
function* redirectOnSuccess(type) {
  if (type === 'getUserListSuccess') {
    const action = yield take(CONS.GET_USERLIST_SUCCESS);
    const { data } = action;
    if (data) {
      console.log('data fetched successfully');
    }
  }

  if (type === 'getUserSuccess') {
    const action = yield take(CONS.GET_USER_SUCCESS);
    debugger
    const { data } = action;
    if (data) {
      console.log('data fetched successfully');
    }
  }

  if (type === 'updateUserSuccess') {
    debugger
    const action = yield take(CONS.UPDATE_USER_SUCCESS);
    debugger
    const { data } = action;
    if (data) {
      debugger
      console.log('data updateed successfully');
      toast.success('User Data Updated Successfully')
      yield put(getUserList());
    }
  }
}

function* redirectOnError(type) {
  if (type === 'getUserListFailure') {
    const action = yield take(CONS.GET_USERLIST_FAILURE);
    if (action.data) {
      toast.error('Error Fetching data');
    }
  }
  if (type === 'getUserFailure') {
    const action = yield take(CONS.GET_USER_FAILURE);
    if (action.data) {
      toast.error('Error Fetching data');
    }
  }
  if (type === 'getUserListFailure') {
    const action = yield take(CONS.UPDATE_USER_FAILURE);
    if (action.data) {
      toast.error('Error Fetching data');
    }
  }
}

function* getUsers(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'getUserListSuccess');
  const errorWatcher = yield fork(redirectOnError, 'getUserListFailure');
  yield fork(
    AppSaga.get(`${API_BASE}/user/?page=${action.page}`, getUserListSuccess, getUserListFailure, ''),
  );
  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* getUser(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'getUserSuccess');
  const errorWatcher = yield fork(redirectOnError, 'getUserFailure');
  yield fork(AppSaga.get(`${API_BASE}/user/${action.id}`, getUserSuccess, getUserFailure));
  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* updateUser(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'updateUserSuccess');
  const errorWatcher = yield fork(redirectOnError, 'updateUserFailure');
  yield fork(
    AppSaga.put(`${API_BASE}/user/${action.data.id}`, updateUserSuccess, updateUserFailure, action.data),
  );
  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* usersSaga() {
  yield takeLatest(CONS.GET_USERLIST, getUsers);
  yield takeLatest(CONS.GET_USER, getUser);
  yield takeLatest(CONS.UPDATE_USER, updateUser);
}

export default usersSaga;
