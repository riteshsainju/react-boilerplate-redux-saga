import { take, cancel, fork, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { toast } from 'react-toastify';

import { AppSaga } from 'sagas';

// import { API_BASE } from 'constants';
import * as CONS from './constants';
import { getPatientListSuccess, getPatientListFailure, addNewPatientSuccess, addNewPatientFailure } from './actions';

function* redirectOnSuccess(type) {
  if (type === 'getPatientListSuccess') {
    const action = yield take(CONS.GET_PATIENTLIST_SUCCESS);
    const { data } = action;
    if (data) {
      toast.success('Patient Data Fetched Succesfully');
      console.log('data fetched successfully');

      // toast.success('All content list fetched successfully.');
    }
  }
  if (type === 'addNewPatientSuccess') {
    const action = yield take(CONS.ADD_NEW_PATIENT_SUCCESS);
    const { data } = action;
    if (data) {
      console.log('new patient added successfully');
      toast.success('Patient Data Saved Succesfully');

      // toast.success('All content list fetched successfully.');
    }
  }
}

function* redirectOnError(type) {
  if (type === 'getPatientListFailure') {
    const action = yield take(CONS.GET_PATIENTLIST_FAILURE);
    if (action.data) {
      console.log('error fetching data');
      toast.error('Error Fetching data');
    }
  }
  if (type === 'addNewPatientFailure') {
    const action = yield take(CONS.ADD_NEW_PATIENT_FAILURE);
    const { data } = action;
    if (data) {
      console.log('error adding new patient');
      toast.error('Error saving data');

      // toast.success('All content list fetched successfully.');
    }
  }
}

function* getPatientList(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'getPatientListSuccess');
  const errorWatcher = yield fork(redirectOnError, 'getPatientListFailure');

  // yield fork(AppSaga.get(`${API_BASE}/patient/list/${action.data}`, getContentListSuccess, getContentListFailure, ''));
  yield fork(
    AppSaga.get('https://jsonplaceholder.typicode.com/users', getPatientListSuccess, getPatientListFailure, ''),
  );

  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* addNewPatient(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'addNewPatientSuccess');
  const errorWatcher = yield fork(redirectOnError, 'addNewPatientFailure');

  // yield fork(AppSaga.post(`${API_BASE}/registration`, addNewPatientSuccess, addNewPatientFailure, action.data));
  yield fork(AppSaga.get('https://jsonplaceholder.typicode.com/users', addNewPatientSuccess, addNewPatientFailure, ''));

  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* registrationSaga() {
  yield takeLatest(CONS.GET_PATIENTLIST, getPatientList);
  yield takeLatest(CONS.ADD_NEW_PATIENT, addNewPatient);
}

export default registrationSaga;
