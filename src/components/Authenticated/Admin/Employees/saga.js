import { take, cancel, fork, takeLatest, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { LOCATION_CHANGE } from 'react-router-redux';
import { toast } from 'react-toastify';
import { EMPLOYEES } from 'constants/routes'

import { AppSaga } from 'sagas';

// import { API_BASE } from 'constants';
import * as CONS from './constants';
import {
  getEmployeeListSuccess,
  getEmployeeListFailure,
  getEmployeeSuccess,
  getEmployeeFailure,
  addEmployeeSuccess,
  addEmployeeFailure,
  updateEmployeeSuccess,
  updateEmployeeFailure,
  deleteEmployeeSuccess,
  deleteEmployeeFailure,
  getEmployeeList,
} from './actions';

const API_BASE = process.env.REACT_APP_API_URL;
function* redirectOnSuccess(type) {
  debugger
  if (type === 'getEmployeeListSuccess') {
    const action = yield take(CONS.GET_EMPLOYEELIST_SUCCESS);
    const { data } = action;
    if (data) {
      console.log('data fetched successfully');
    }
  }
  if (type === 'getEmployeeSuccess') {
    const action = yield take(CONS.GET_EMPLOYEE_SUCCESS);
    const { data } = action;
    if (data) {
      console.log('Employee data fetched successfully');
    }
  }
  if (type === 'addEmployeeSuccess') {
    const action = yield take(CONS.ADD_EMPLOYEE_SUCCESS);
    const { data } = action;
    if (data) {
      toast.success('Employee Data Saved Succesfully');

      yield put(push(`${EMPLOYEES.EMPLOYEES_ROUTE}`));
    }
  }
  if (type === 'updateEmployeeSuccess') {
    const action = yield take(CONS.UPDATE_EMPLOYEE_SUCCESS);
    const { data } = action;
    if (data) {
      toast.success('Employee Data Updated Succesfully');

      yield put(push(`${EMPLOYEES.EMPLOYEES_ROUTE}`));
    }
  }
  if (type === 'deleteEmployeeSuccess') {
    const action = yield take(CONS.DELETE_EMPLOYEE_SUCCESS);
    const { data } = action;
    if (data) {
      toast.success('Employee Data Deleted Succesfully');
      yield put(getEmployeeList());
    }
  }
}

function* redirectOnError(type) {
  if (type === 'getEmployeeListFailure') {
    const action = yield take(CONS.GET_EMPLOYEELIST_FAILURE);
    if (action.data) {
      toast.error('Error Fetching data');
    }
  }
  if (type === 'getEmployeeFailure') {
    const action = yield take(CONS.GET_EMPLOYEE_FAILURE);
    if (action.data) {
      toast.error('Error Fetching patent data');
    }
  }
  if (type === 'addEmployeeFailure') {
    const action = yield take(CONS.ADD_EMPLOYEE_FAILURE);
    const { data } = action;
    if (data) {
      toast.error('Error saving data');
    }
  }
  if (type === 'updateEmployeeFailure') {
    const action = yield take(CONS.UPDATE_EMPLOYEE_FAILURE);
    const { data } = action;
    if (data) {
      toast.error('Error saving data');
    }
  }
  if (type === 'deleteEmployeeFailure') {
    const action = yield take(CONS.DELETE_EMPLOYEE_FAILURE);
    const { data } = action;
    if (data) {
      toast.error('Error deleting data');
    }
  }
}

function* getEmployees(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'getEmployeeListSuccess');
  const errorWatcher = yield fork(redirectOnError, 'getEmployeeListFailure');
  yield fork(
    AppSaga.get(`${API_BASE}/employee/?page=${action.page}`, getEmployeeListSuccess, getEmployeeListFailure, ''),
  );
  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* getEmployee(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'getEmployeeSuccess');
  const errorWatcher = yield fork(redirectOnError, 'getEmployeeFailure');
  yield fork(AppSaga.get(`${API_BASE}/employee/${action.id}`, getEmployeeSuccess, getEmployeeFailure));
  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* addEmployee(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'addEmployeeSuccess');
  const errorWatcher = yield fork(redirectOnError, 'addEmployeeFailure');
  
  yield fork(AppSaga.post(`${API_BASE}/employee`, addEmployeeSuccess, addEmployeeFailure, action.data));
  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* updateEmployee(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'updateEmployeeSuccess');
  const errorWatcher = yield fork(redirectOnError, 'updateEmployeeFailure');
  yield fork(
    AppSaga.put(`${API_BASE}/employee/${action.data.id}`, updateEmployeeSuccess, updateEmployeeFailure, action.data),
  );
  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* deleteEmployee(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'deleteEmployeeSuccess', action.redirectUrl);
  const errorWatcher = yield fork(redirectOnError, 'deleteEmployeeFailure');
  yield fork(AppSaga.delete(`${API_BASE}/employee/${action.id}`, deleteEmployeeSuccess, deleteEmployeeFailure));
  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* employeesSaga() {
  yield takeLatest(CONS.GET_EMPLOYEELIST, getEmployees);
  yield takeLatest(CONS.GET_EMPLOYEE, getEmployee);
  yield takeLatest(CONS.ADD_EMPLOYEE, addEmployee);
  yield takeLatest(CONS.UPDATE_EMPLOYEE, updateEmployee);
  yield takeLatest(CONS.DELETE_EMPLOYEE, deleteEmployee);
}

export default employeesSaga;
