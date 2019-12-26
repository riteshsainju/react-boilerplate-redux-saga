import { fork, takeLatest } from 'redux-saga/effects'
import { AppSaga } from 'sagas';

// import { API_BASE } from 'constants';
import * as CONS from './constants';
import {
  getRolesSuccess,
  getRolesFailure
} from './actions';

const API_BASE = process.env.REACT_APP_API_URL;

function* getRoles(action) {
  yield fork(
    AppSaga.get(`${API_BASE}/role`, getRolesSuccess, getRolesFailure, ''),
  );
}


function* authenticatedSaga() {
  yield takeLatest(CONS.GET_ROLES, getRoles);
}

export default authenticatedSaga;

