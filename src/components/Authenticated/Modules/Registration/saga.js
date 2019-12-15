import { take, cancel, fork, takeLatest, call } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { toast } from 'react-toastify';
import createHistory from 'history/createBrowserHistory';

import { AppSaga } from 'sagas';

// import { API_BASE } from 'constants';
import * as CONS from './constants';
import {
  getPatientListSuccess,
  getPatientListFailure,
  addNewPatientSuccess,
  addNewPatientFailure,
  editPatientSuccess,
  editPatientFailure,
  deletePatientSuccess,
  deletePatientFailure,
} from './actions';

const API_BASE = process.env.REACT_APP_API_URL;
function* redirectOnSuccess(type) {
  if (type === 'getPatientListSuccess') {
    const action = yield take(CONS.GET_PATIENTLIST_SUCCESS);
    const { data } = action;
    if (data) {
      console.log('data fetched successfully');
    }
  }
  if (type === 'addNewPatientSuccess') {
    const action = yield take(CONS.ADD_NEW_PATIENT_SUCCESS);
    const { data } = action;
    const history = createHistory();
    if (data) {
      toast.success('Patient Data Saved Succesfully');
      yield call(history.goBack);
    }
  }
  if (type === 'editPatientSuccess') {
    const action = yield take(CONS.EDIT_PATIENT_SUCCESS);
    const { data } = action;
    const history = createHistory();
    if (data) {
      toast.success('Patient Data Updated Succesfully');
      yield call(history.goBack);
    }
  }
  if (type === 'deletePatientSuccess') {
    const action = yield take(CONS.DELETE_PATIENT_SUCCESS);
    const { data } = action;
    if (data) {
      toast.success('Patient Data Deleted Succesfully');
    }
  }
}

function* redirectOnError(type) {
  if (type === 'getPatientListFailure') {
    const action = yield take(CONS.GET_PATIENTLIST_FAILURE);
    if (action.data) {
      toast.error('Error Fetching data');
    }
  }
  if (type === 'addNewPatientFailure') {
    const action = yield take(CONS.ADD_NEW_PATIENT_FAILURE);
    const { data } = action;
    if (data) {
      toast.error('Error saving data');
    }
  }
  if (type === 'editPatientFailure') {
    const action = yield take(CONS.EDIT_PATIENT_FAILURE);
    const { data } = action;
    if (data) {
      toast.error('Error saving data');
    }
  }
  if (type === 'deletePatientFailure') {
    const action = yield take(CONS.DELETE_PATIENT_FAILURE);
    const { data } = action;
    if (data) {
      toast.error('Error deleting data');
    }
  }
}

function* getPatientList(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'getPatientListSuccess');
  const errorWatcher = yield fork(redirectOnError, 'getPatientListFailure');

  yield fork(AppSaga.get(`${API_BASE}/registration`, getPatientListSuccess, getPatientListFailure, ''));

  // yield fork(
  //   AppSaga.get('https://jsonplaceholder.typicode.com/users', getPatientListSuccess, getPatientListFailure, ''),
  // );

  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* addNewPatient(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'addNewPatientSuccess');
  const errorWatcher = yield fork(redirectOnError, 'addNewPatientFailure');
  yield fork(AppSaga.post(`${API_BASE}/registrations/store`, addNewPatientSuccess, addNewPatientFailure, action.data));
  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* editPatient(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'editPatientSuccess');
  const errorWatcher = yield fork(redirectOnError, 'editPatientFailure');
  yield fork(
    AppSaga.put(`${API_BASE}/registrations/store/${action.id}`, editPatientSuccess, editPatientFailure, action.data),
  );
  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* deletePatient(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'deletePatientSuccess', action.redirectUrl);
  const errorWatcher = yield fork(redirectOnError, 'deletePatientFailure');

  // yield fork(AppSaga.get(`${API_BASE}/registration`, deletePatientSuccess, deletePatientSuccess, ''));

  yield fork(AppSaga.delete(`${API_BASE}/registration/${action.id}`, deletePatientSuccess, deletePatientFailure));
  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* registrationSaga() {
  yield takeLatest(CONS.GET_PATIENTLIST, getPatientList);
  yield takeLatest(CONS.ADD_NEW_PATIENT, addNewPatient);
  yield takeLatest(CONS.EDIT_PATIENT, editPatient);
  yield takeLatest(CONS.DELETE_PATIENT, deletePatient);
}

export default registrationSaga;
