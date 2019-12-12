import { takeLatest, fork, cancel, take, put, call } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { push } from 'connected-react-router';
import { cookieJar } from 'utils';
import { toast } from 'react-toastify';

// import createHistory from 'history/createBrowserHistory';

// import { AppSaga } from 'sagas';

// import { API_BASE } from 'constants';
import * as CONS from './constants';
import { loginSuccess, loginFailure } from './actions';

const API_BASE = process.env.REACT_APP_API_URL;
function* redirectOnSuccess(type) {
  if (type === 'loginSuccess') {
    const action = yield take(CONS.LOGIN_SUCCESS);
    const { data } = action;
    if (data) {
      console.log('login successful');

      // toast.success('All content list fetched successfully.');
    }
  }
}

function* redirectOnError(type) {
  if (type === 'loginFailure') {
    const action = yield take(CONS.LOGIN_FAILURE);
    if (action.data) {
      console.log('error fetching data');
      toast.error('Error Fetching data');
    }
  }
}

async function fetchApi(data, url, method, header) {
  const headers = { ...header, 'Content-Type': 'application/json' };
  const response = await fetch(`${API_BASE}${url}`, {
    method,
    headers,
    body: JSON.stringify(data),
  });

  // return response.json();
  return [await response.json(), await response.headers];
}

function* setSessionAndLogin(response, headers, successCB, failureCB, params) {
  if (response && response.access_token) {
    // const sessionValue = Array.from(headers.entries()).reduce((val, entry) => ({ ...val, [entry[0]]: entry[1] }), {});
    const sessionValue = response;
    cookieJar.setSession(sessionValue);
    yield put(push('/dashboard'));
  } else {
    toast.error('Invalid Username Or Password');

    yield put(push('/auth/login'));
  }
}

function* login(action) {
  const successWatcher = yield fork(redirectOnSuccess, 'loginSuccess');
  const errorWatcher = yield fork(redirectOnError, 'loginFailure');
  const [responseBody, headers] = yield call(fetchApi, action.user, '/auth/login', 'POST', {});
  yield call(setSessionAndLogin, responseBody, headers, loginSuccess, loginFailure, action.params);
  yield take([LOCATION_CHANGE]);
  yield cancel(errorWatcher);
  yield cancel(successWatcher);
}

function* authenticationSaga() {
  yield takeLatest(CONS.LOGIN, login);
}

export default authenticationSaga;
