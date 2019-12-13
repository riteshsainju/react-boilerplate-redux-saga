import { GET_USERS_SAGA, SET_USERS } from '../constants';

export function setUsers(users) {
  return {
    type: SET_USERS,
    users,
  };
}

// Sagas
export function getUsersSaga() {
  return {
    type: GET_USERS_SAGA,
  };
}

// Generic action - where argument name is forwarded as is in dictonary
export default function action(TYPE, ...keys) {
  return (...values) => {
    const axn = { type: TYPE };

    // Only set the defined keys in order (others are 'undefined' automatically)
    // eslint-disable-next-line
    values.map((v, i) => {
      // eslint-disable-line  array-callback-return
      axn[keys[i]] = v;
    });
    return axn;
  };
}
