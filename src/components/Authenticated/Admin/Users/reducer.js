import * as CONS from './constants';

// import { GET_USERLIST, GET_USERLIST_SUCCESS, GET_USERLIST_FAILURE } from './constants';

const initialState = {
  loading    : true,
  error      : null,
  success    : null,
  userList   : [],
  userData   : {},
  currentPage: 1,
  total      : 0,
  rowsPerPage: 10,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
  case CONS.GET_USERLIST:
  case CONS.GET_USER:
  case CONS.UPDATE_USER:
    return {
      ...state,
      loading: true,
      error  : null,
      success: 'fetching',
    };
  case CONS.GET_USERLIST_SUCCESS:
    return {
      ...state,
      loading    : false,
      error      : null,
      success    : 'success',
      userList   : action.data.data.items,
      currentPage: action.data.data.pagination.current_page,
      total      : action.data.data.pagination.total,
      rowsPerPage: action.data.data.pagination.per_page,
    };
  case CONS.GET_USER_SUCCESS:
    return {
      ...state,
      loading : false,
      error   : null,
      success : 'success',
      userData: action.data.data,
    };
  case CONS.UPDATE_USER_SUCCESS:
    return {
      ...state,
      loading : false,
      error   : null,
      success : 'success',
      userData: action.data.data,

    };
  case CONS.GET_USERLIST_FAILURE:
  case CONS.GET_USER_FAILURE:
  case CONS.UPDATE_USER_FAILURE:
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

export default usersReducer;
