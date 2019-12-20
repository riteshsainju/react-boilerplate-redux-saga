import { take, cancel, fork, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { toast } from 'react-toastify';

import { AppSaga } from 'sagas';

// import { API_BASE } from 'constants';
import * as CONS from './constants';
import {
  getUserListSuccess,
  getUserListFailure,
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
}

function* redirectOnError(type) {
  if (type === 'getUserListFailure') {
    const action = yield take(CONS.GET_USERLIST_FAILURE);
    if (action.data) {
      toast.error('Error Fetching data');
    }
  }
}

function* getUsers(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'getUserListSuccess');
  const errorWatcher = yield fork(redirectOnError, 'getUserListFailure');
  yield fork(
    AppSaga.get(`${API_BASE}/doctor/?page=${action.page}`, getUserListSuccess, getUserListFailure, ''),
  );
  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* usersSaga() {
  yield takeLatest(CONS.GET_USERLIST, getUsers);
}

export default usersSaga;
