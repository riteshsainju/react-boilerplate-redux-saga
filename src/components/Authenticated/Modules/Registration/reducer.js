import * as CONS from './constants';

// import { GET_PATIENTLIST, GET_PATIENTLIST_SUCCESS, GET_PATIENTLIST_FAILURE } from './constants';

const initialState = {
  loading    : true,
  error      : null,
  success    : null,
  patientList: [],
  patientData: {},
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
  case CONS.GET_PATIENTLIST:
  case CONS.ADD_NEW_PATIENT:
    return {
      ...state,
      loading: true,
      error  : null,
      success: 'fetching',
    };
  case CONS.GET_PATIENTLIST_SUCCESS:
    return {
      ...state,
      loading    : false,
      error      : null,
      success    : 'success',
      patientList: action.data.data,
    };
  case CONS.ADD_NEW_PATIENT_SUCCESS:
    return {
      ...state,
      loading: false,
      error  : null,
      success: 'success',
    };
  case CONS.GET_PATIENTLIST_FAILURE:
  case CONS.ADD_NEW_PATIENT_FAILURE:
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

export default registrationReducer;
