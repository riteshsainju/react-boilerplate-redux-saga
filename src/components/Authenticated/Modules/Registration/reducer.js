import * as CONS from './constants';

// import { GET_PATIENTLIST, GET_PATIENTLIST_SUCCESS, GET_PATIENTLIST_FAILURE } from './constants';

const initialState = {
  loading    : true,
  error      : null,
  success    : null,
  patientList: [],
  patientData: {},
  currentPage: 1,
  total      : 0,
  rowsPerPage: 10,
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
  case CONS.GET_PATIENTLIST:
  case CONS.ADD_NEW_PATIENT:
  case CONS.GET_PATIENT:
  case CONS.UPDATE_PATIENT:
  case CONS.DELETE_PATIENT:
  case CONS.SEARCH_PATIENT:
    return {
      ...state,
      loading: true,
      error  : null,
      success: 'fetching',
    };
  case CONS.GET_PATIENTLIST_SUCCESS:
  case CONS.SEARCH_PATIENT_SUCCESS:
    return {
      ...state,
      loading    : false,
      error      : null,
      success    : 'success',
      patientList: action.data.data.items,
      currentPage: action.data.data.pagination.current_page,
      total      : action.data.data.pagination.total,
      rowsPerPage: action.data.data.pagination.per_page,
    };
  case CONS.GET_PATIENT_SUCCESS:
    return {
      ...state,
      loading    : false,
      error      : null,
      success    : 'success',
      patientData: action.data.data,
    };
  case CONS.UPDATE_PATIENT_SUCCESS:
  case CONS.ADD_NEW_PATIENT_SUCCESS:
    return {
      ...state,
      loading: false,
      error  : null,
      success: 'success',
    };
  case CONS.DELETE_PATIENT_SUCCESS:
    // eslint-disable-next-line
      const updatedPatientList = state.patientList;

    return {
      ...state,
      loading: false,
      error  : null,
      success: 'success',

      patientList: updatedPatientList.filter(item => item.id !== action.data.data.id),
    };
  case CONS.GET_PATIENTLIST_FAILURE:
  case CONS.GET_PATIENT_FAILURE:
  case CONS.ADD_NEW_PATIENT_FAILURE:
  case CONS.UPDATE_PATIENT_FAILURE:
  case CONS.DELETE_PATIENT_FAILURE:
  case CONS.SEARCH_PATIENT_FAILURE:
    return {
      ...state,
      loading: false,
      error  : 'error',
      success: null,
    };
  case CONS.RESET_PATIENT_FORM:
    return { ...state, error: null, success: null, patientData: {} };
  default:
    return state;
  }
};

export default registrationReducer;
