import { cookieJar } from 'utils';
import * as CONS from './constants';

const initialState = {
  loading        : false,
  error          : null,
  isAuthenticated: !!cookieJar.getSession(),
  success        : null,
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
  case CONS.LOGIN:
    return {
      ...state,
      loading: true,
      error  : null,
      success: 'fetching',
    };
  case CONS.LOGIN_SUCCESS:
    return {
      ...state,
      loading        : false,
      error          : null,
      success        : 'success',
      isAuthenticated: true,
    };
  case CONS.LOGIN_FAILURE:
    return {
      ...state,
      loading        : false,
      error          : null,
      success        : 'success',
      isAuthenticated: false,
    };
  default:
    return state;
  }
};

export default authenticationReducer;
