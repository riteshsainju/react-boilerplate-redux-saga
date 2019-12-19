import { take, cancel, fork, takeLatest, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { LOCATION_CHANGE } from 'react-router-redux';
import { toast } from 'react-toastify';
import { DOCTORS } from 'constants/routes'

import { AppSaga } from 'sagas';

// import { API_BASE } from 'constants';
import * as CONS from './constants';
import {
  getDoctorListSuccess,
  getDoctorListFailure,
  getDoctorSuccess,
  getDoctorFailure,
  addDoctorSuccess,
  addDoctorFailure,
  updateDoctorSuccess,
  updateDoctorFailure,
  deleteDoctorSuccess,
  deleteDoctorFailure,
  getDoctorList,
} from './actions';

const API_BASE = process.env.REACT_APP_API_URL;
function* redirectOnSuccess(type) {
  if (type === 'getDoctorListSuccess') {
    const action = yield take(CONS.GET_DOCTORLIST_SUCCESS);
    const { data } = action;
    if (data) {
      console.log('data fetched successfully');
    }
  }
  if (type === 'getDoctorSuccess') {
    const action = yield take(CONS.GET_DOCTOR_SUCCESS);
    const { data } = action;
    if (data) {
      console.log('Doctor data fetched successfully');
    }
  }
  if (type === 'addDoctorSuccess') {
    const action = yield take(CONS.ADD_DOCTOR_SUCCESS);
    const { data } = action;
    if (data) {
      toast.success('Doctor Data Saved Succesfully');
      yield put(push(`${DOCTORS.DOCTORS_ROUTE}`));
    }
  }
  if (type === 'updateDoctorSuccess') {
    const action = yield take(CONS.UPDATE_DOCTOR_SUCCESS);
    const { data } = action;
    if (data) {
      toast.success('Doctor Data Updated Succesfully');
      yield put(push(`${DOCTORS.DOCTORS_ROUTE}`));
    }
  }
  if (type === 'deleteDoctorSuccess') {
    const action = yield take(CONS.DELETE_DOCTOR_SUCCESS);
    const { data } = action;
    if (data) {
      toast.success('Doctor Data Deleted Succesfully');
      yield put(getDoctorList());
    }
  }
}

function* redirectOnError(type) {
  if (type === 'getDoctorListFailure') {
    const action = yield take(CONS.GET_DOCTORLIST_FAILURE);
    if (action.data) {
      toast.error('Error Fetching data');
    }
  }
  if (type === 'getDoctorFailure') {
    const action = yield take(CONS.GET_DOCTOR_FAILURE);
    if (action.data) {
      toast.error('Error Fetching patent data');
    }
  }
  if (type === 'addDoctorFailure') {
    const action = yield take(CONS.ADD_DOCTOR_FAILURE);
    const { data } = action;
    if (data) {
      toast.error('Error saving data');
    }
  }
  if (type === 'updateDoctorFailure') {
    const action = yield take(CONS.UPDATE_DOCTOR_FAILURE);
    const { data } = action;
    if (data) {
      toast.error('Error saving data');
    }
  }
  if (type === 'deleteDoctorFailure') {
    const action = yield take(CONS.DELETE_DOCTOR_FAILURE);
    const { data } = action;
    if (data) {
      toast.error('Error deleting data');
    }
  }
}

function* getDoctors(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'getDoctorListSuccess');
  const errorWatcher = yield fork(redirectOnError, 'getDoctorListFailure');
  yield fork(
    AppSaga.get(`${API_BASE}/doctor/?page=${action.page}`, getDoctorListSuccess, getDoctorListFailure, ''),
  );
  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* getDoctor(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'getDoctorSuccess');
  const errorWatcher = yield fork(redirectOnError, 'getDoctorFailure');
  yield fork(AppSaga.get(`${API_BASE}/doctor/${action.id}`, getDoctorSuccess, getDoctorFailure));
  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* addDoctor(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'addDoctorSuccess');
  const errorWatcher = yield fork(redirectOnError, 'addDoctorFailure');
  yield fork(AppSaga.post(`${API_BASE}/doctor`, addDoctorSuccess, addDoctorFailure, action.data));
  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* updateDoctor(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'updateDoctorSuccess');
  const errorWatcher = yield fork(redirectOnError, 'updateDoctorFailure');
  yield fork(
    AppSaga.put(`${API_BASE}/doctor/${action.data.id}`, updateDoctorSuccess, updateDoctorFailure, action.data),
  );
  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* deleteDoctor(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'deleteDoctorSuccess', action.redirectUrl);
  const errorWatcher = yield fork(redirectOnError, 'deleteDoctorFailure');
  yield fork(AppSaga.delete(`${API_BASE}/doctor/${action.id}`, deleteDoctorSuccess, deleteDoctorFailure));
  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* doctorsSaga() {
  yield takeLatest(CONS.GET_DOCTORLIST, getDoctors);
  yield takeLatest(CONS.GET_DOCTOR, getDoctor);
  yield takeLatest(CONS.ADD_DOCTOR, addDoctor);
  yield takeLatest(CONS.UPDATE_DOCTOR, updateDoctor);
  yield takeLatest(CONS.DELETE_DOCTOR, deleteDoctor);
}

export default doctorsSaga;
