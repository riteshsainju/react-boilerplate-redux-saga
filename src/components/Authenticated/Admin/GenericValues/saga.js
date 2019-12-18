import { take, cancel, fork, takeLatest, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { LOCATION_CHANGE } from 'react-router-redux';
import { toast } from 'react-toastify';

import { AppSaga } from 'sagas';

// import { API_BASE } from 'constants';
import * as CONS from './constants';
import {
  getGenericValuesList as getUpdatedGenericValuesList,
  getGenericValuesListSuccess,
  getGenericValuesListFailure,
  getGenericValuesSuccess,
  getGenericValuesFailure,
  addGenericValuesSuccess,
  addGenericValuesFailure,
  updateGenericValuesSuccess,
  updateGenericValuesFailure,
  deleteGenericValuesSuccess,
  deleteGenericValuesFailure,
} from './actions';

const API_BASE = process.env.REACT_APP_API_URL;

function* redirectOnSuccess(type) {
  if (type === 'getGenericValuesListSuccess') {
    const action = yield take(CONS.GET_GENERICVALUESLIST_SUCCESS);
    const { data } = action;
    if (data) {
      console.log('data fetched successfully');
    }
  }
  if (type === 'getGenericValuesSuccess') {
    const action = yield take(CONS.GET_GENERICVALUES_SUCCESS);
    const { data } = action;
    if (data) {
      console.log('Patent data fetched successfully');
    }
  }
  if (type === 'addGenericValuesSuccess') {
    const action = yield take(CONS.ADD_GENERICVALUES_SUCCESS);
    const { data } = action;
    if (data) {
      toast.success('GenericValues Data Saved Succesfully');
      yield put(push('/admin/generic-values'));
    }
  }
  if (type === 'updateGenericValuesSuccess') {
    const action = yield take(CONS.UPDATE_GENERICVALUES_SUCCESS);
    const { data } = action;
    if (data) {
      toast.success('GenericValues Data Updated Succesfully');
      yield put(push('/admin/generic-values'));
    }
  }
  if (type === 'deleteGenericValuesSuccess') {
    const action = yield take(CONS.DELETE_GENERICVALUES_SUCCESS);
    const { data } = action;
    if (data) {
      toast.success('GenericValues Data Deleted Succesfully');
      yield put(getUpdatedGenericValuesList());
    }
  }
}

function* redirectOnError(type) {
  if (type === 'getGenericValuesListFailure') {
    const action = yield take(CONS.GET_GENERICVALUESLIST_FAILURE);
    if (action.data) {
      toast.error('Error Fetching data');
    }
  }
  if (type === 'getGenericValuesFailure') {
    const action = yield take(CONS.GET_GENERICVALUES_FAILURE);
    if (action.data) {
      toast.error('Error Fetching patent data');
    }
  }
  if (type === 'addGenericValuesFailure') {
    const action = yield take(CONS.ADD_GENERICVALUES_FAILURE);
    const { data } = action;
    if (data) {
      toast.error('Error saving data');
    }
  }
  if (type === 'updateGenericValuesFailure') {
    const action = yield take(CONS.UPDATE_GENERICVALUES_FAILURE);
    const { data } = action;
    if (data) {
      toast.error('Error saving data');
    }
  }
  if (type === 'deleteGenericValuesFailure') {
    const action = yield take(CONS.DELETE_GENERICVALUES_FAILURE);
    const { data } = action;
    if (data) {
      toast.error('Error deleting data');
    }
  }
}

function* getGenericValuesList(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'getGenericValuesListSuccess');
  const errorWatcher = yield fork(redirectOnError, 'getGenericValuesListFailure');

  yield fork(AppSaga.get(`${API_BASE}/generic/?page=${action.page}`, getGenericValuesListSuccess, getGenericValuesListFailure, ''));
  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* getGenericValues(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'getGenericValuesSuccess');
  const errorWatcher = yield fork(redirectOnError, 'getGenericValuesFailure');
  yield fork(AppSaga.get(`${API_BASE}/generic/${action.id}`, getGenericValuesSuccess, getGenericValuesFailure));
  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* addGenericValues(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'addGenericValuesSuccess');
  const errorWatcher = yield fork(redirectOnError, 'addGenericValuesFailure');
  yield fork(AppSaga.post(`${API_BASE}/generic`, addGenericValuesSuccess, addGenericValuesFailure, action.data));
  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* updateGenericValues(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'updateGenericValuesSuccess');
  const errorWatcher = yield fork(redirectOnError, 'updateGenericValuesFailure');
  yield fork(
    AppSaga.put(
      `${API_BASE}/generic/${action.data.id}`,
      updateGenericValuesSuccess,
      updateGenericValuesFailure,
      action.data,
    ),
  );
  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* deleteGenericValues(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'deleteGenericValuesSuccess', action.redirectUrl);
  const errorWatcher = yield fork(redirectOnError, 'deleteGenericValuesFailure');
  yield fork(
    AppSaga.delete(`${API_BASE}/generic/${action.id}`, deleteGenericValuesSuccess, deleteGenericValuesFailure),
  );
  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* genericValuesSaga() {
  yield takeLatest(CONS.GET_GENERICVALUESLIST, getGenericValuesList);
  yield takeLatest(CONS.GET_GENERICVALUES, getGenericValues);
  yield takeLatest(CONS.ADD_GENERICVALUES, addGenericValues);
  yield takeLatest(CONS.UPDATE_GENERICVALUES, updateGenericValues);
  yield takeLatest(CONS.DELETE_GENERICVALUES, deleteGenericValues);
}

export default genericValuesSaga;
