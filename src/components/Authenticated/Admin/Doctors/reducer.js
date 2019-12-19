import * as CONS from './constants';

// import { GET_DOCTORLIST, GET_DOCTORLIST_SUCCESS, GET_DOCTORLIST_FAILURE } from './constants';

const initialState = {
  loading    : true,
  error      : null,
  success    : null,
  doctorList : [],
  doctorData : {},
  currentPage: 1,
  total      : 0,
  rowsPerPage: 10,
};

const doctorsReducer = (state = initialState, action) => {
  switch (action.type) {
  case CONS.GET_DOCTORLIST:
  case CONS.ADD_DOCTOR:
  case CONS.GET_DOCTOR:
  case CONS.UPDATE_DOCTOR:
  case CONS.DELETE_DOCTOR:
    return {
      ...state,
      loading: true,
      error  : null,
      success: 'fetching',
    };
  case CONS.GET_DOCTORLIST_SUCCESS:
    return {
      ...state,
      loading    : false,
      error      : null,
      success    : 'success',
      doctorList : action.data.data.items,
      currentPage: action.data.data.pagination.current_page,
      total      : action.data.data.pagination.total,
      rowsPerPage: action.data.data.pagination.per_page,
    };
  case CONS.GET_DOCTOR_SUCCESS:
    return {
      ...state,
      loading   : false,
      error     : null,
      success   : 'success',
      doctorData: action.data.data,
    };
  case CONS.UPDATE_DOCTOR_SUCCESS:
  case CONS.ADD_DOCTOR_SUCCESS:
    return {
      ...state,
      loading: false,
      error  : null,
      success: 'success',
    };
  case CONS.DELETE_DOCTOR_SUCCESS:
    // eslint-disable-next-line
      const updatedList = state.doctorList;

    return {
      ...state,
      loading: false,
      error  : null,
      success: 'success',

      doctorList: updatedList.filter(item => item.id !== action.data.data.id),
    };
  case CONS.GET_DOCTORLIST_FAILURE:
  case CONS.GET_DOCTOR_FAILURE:
  case CONS.ADD_DOCTOR_FAILURE:
  case CONS.UPDATE_DOCTOR_FAILURE:
  case CONS.DELETE_DOCTOR_FAILURE:
    return {
      ...state,
      loading: false,
      error  : 'error',
      success: null,
    };
  case CONS.RESET_DOCTOR_FORM:
    return { ...state, error: null, success: null, doctorData: {} };
  default:
    return state;
  }
};

export default doctorsReducer;
