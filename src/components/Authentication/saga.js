import { takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { cookieJar } from 'utils';
import { toast } from 'react-toastify';

// import createHistory from 'history/createBrowserHistory';

// import { AppSaga } from 'sagas';

// import { API_BASE } from 'constants';
import * as CONS from './constants';
import { loginSuccess, loginFailure } from './actions';

const API_BASE = process.env.REACT_APP_API_URL;

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
  if (response && response.data && response.data.access_token) {
    // const sessionValue = Array.from(headers.entries()).reduce((val, entry) => ({ ...val, [entry[0]]: entry[1] }), {});
    const sessionValue = response.data;
    cookieJar.setSession(sessionValue);
    yield put(push('/dashboard'));
  } else {
    toast.error('Invalid Username Or Password');
    yield put(push('/'));
  }
}

function* login(action) {
  const [responseBody, headers] = yield call(fetchApi, action.user, '/auth/login', 'POST', {});
  yield call(setSessionAndLogin, responseBody, headers, loginSuccess, loginFailure, action.params);
}

function* authenticationSaga() {
  yield takeLatest(CONS.LOGIN, login);
}

export default authenticationSaga;
