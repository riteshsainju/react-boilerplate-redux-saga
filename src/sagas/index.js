// import { all, fork } from 'redux-saga/effects';

// import watchGetUsersSaga from './watchers/getUsers';

// export default function* root() {
//   yield all([fork(watchGetUsersSaga)]);
// }

import { requestJSON } from 'utils/request';
import { all, fork, put, call } from 'redux-saga/effects';

import registrationSaga from 'components/Authenticated/Modules/Registration/saga';
import authenticationSaga from 'components/Authentication/saga';
import genericValuesSaga from 'components/Authenticated/Settings/Admin/GenericValues/saga';

// import { checkAuth } from 'Components/Authenticated/action';
// import { cookieJar, isEmpty } from 'utils';
import { isEmpty } from 'utils';

export class AppSaga {
  /**
   * Generic api data loader
   */

  static getHeaders() {
    let sessionValue;

    // debugger;
    // sessionValue = cookieJar.getHeader();
    if (isEmpty(sessionValue)) {
      sessionValue = { 'Content-Type': 'application/json' };
    }
    return sessionValue;
  }

  static getOptions(type, data) {
    const options = {
      method : type,
      headers: AppSaga.getHeaders(),
    };
    return data ? { ...options, body: JSON.stringify(data) } : options;
  }

  static getEventOptions(type, data, header) {
    const options = {
      method : type,
      headers: {
        Authorization : header,
        'Content-type': 'application/json',
      },
    };
    return data ? { ...options, body: JSON.stringify(data) } : options;
  }

  static dataLoader(apiUri, apiType, onSuccess, onError, data, ...actionArguments) {
    const val = actionArguments;
    const { header } = val && val[1] ? val[1] : { header: null };

    return function* requestApi() {
      const requestURL = `${apiUri}`;

      const options = header ? AppSaga.getEventOptions(apiType, data, header) : AppSaga.getOptions(apiType, data);
      if (!options.headers || !options.headers['access-token']) {
        // yield put(checkAuth());
      }
      try {
        const response = yield call(requestJSON, requestURL, options);
        yield put(onSuccess(response, ...actionArguments));
      } catch (err) {
        let error = null;
        try {
          error = {
            code: err.response.status,
            ...(yield call(() => err.response.json())),
          };
        } catch (e) {
          error = {
            code  : e.response && e.response.status,
            errors: [e.response && e.response.statusText],
          };
        }
        yield put(onError(error, ...actionArguments));
      }
    };
  }

  /*
   * Shorthand GET function
   */
  static get(apiUri, onSuccess, onError, ...actionArguments) {
    return this.dataLoader(apiUri, 'GET', onSuccess, onError, null, ...actionArguments);
  }

  /*
   * Shorthand POST function
   */
  static post(apiUri, onSuccess, onError, data, ...actionArguments) {
    return this.dataLoader(apiUri, 'POST', onSuccess, onError, data, ...actionArguments);
  }

  /**
   * Shorthand PATCH function
   */
  static patch(apiUri, onSuccess, onError, data, ...actionArguments) {
    return this.dataLoader(apiUri, 'PATCH', onSuccess, onError, data, ...actionArguments);
  }

  /**
   * Shorthand PUT function
   */
  static put(apiUri, onSuccess, onError, data, ...actionArguments) {
    return this.dataLoader(apiUri, 'PUT', onSuccess, onError, data, ...actionArguments);
  }

  /**
   * Shorthand DELETE function
   */
  static delete(apiUri, onSuccess, onError, ...actionArguments) {
    return this.dataLoader(apiUri, 'DELETE', onSuccess, onError, null, ...actionArguments);
  }
}

function* appSaga() {
  yield all([fork(registrationSaga), fork(authenticationSaga), fork(genericValuesSaga)]);
}

export default appSaga;
