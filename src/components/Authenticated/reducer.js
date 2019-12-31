import * as CONS from './constants';

const initialState = {
  loading: true,
  error  : null,
  success: null,
  roles  : [],
};

const authenticatedReducer = (state = initialState, action) => {
  switch (action.type) {
  case CONS.GET_ROLES:
    return {
      ...state,
      loading: true,
      error  : null,
      success: 'fetching',
    };
  case CONS.GET_ROLES_SUCCESS:
    return {
      ...state,
      loading: false,
      error  : null,
      success: 'success',
      roles  : action.data.data.items,
    };
  case CONS.GET_ROLES_FAILURE:
    return {
      ...state,
      loading: false,
      error  : 'error',
      success: null,
    };
  default:
    return state;
  }
};

export default authenticatedReducer;
