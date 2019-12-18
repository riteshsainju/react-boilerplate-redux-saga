import * as CONS from './constants';

const initialState = {
  loading     : true,
  error       : null,
  success     : null,
  employeeList: [],
  employeeData: {},
  currentPage : 1,
  total       : 0,
  rowsPerPage : 10,
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
  case CONS.GET_EMPLOYEELIST:
  case CONS.ADD_EMPLOYEE:
  case CONS.GET_EMPLOYEE:
  case CONS.UPDATE_EMPLOYEE:
  case CONS.DELETE_EMPLOYEE:
    return {
      ...state,
      loading: true,
      error  : null,
      success: 'fetching',
    };
  case CONS.GET_EMPLOYEELIST_SUCCESS:
    return {
      ...state,
      loading     : false,
      error       : null,
      success     : 'success',
      employeeList: action.data.data.items,
      currentPage : action.data.data.pagination.current_page,
      total       : action.data.data.pagination.total,
      rowsPerPage : action.data.data.pagination.per_page,
    };
  case CONS.GET_EMPLOYEE_SUCCESS:
    return {
      ...state,
      loading     : false,
      error       : null,
      success     : 'success',
      employeeData: action.data.data,
    };
  case CONS.UPDATE_EMPLOYEE_SUCCESS:
  case CONS.ADD_EMPLOYEE_SUCCESS:
    return {
      ...state,
      loading: false,
      error  : null,
      success: 'success',
    };
  case CONS.DELETE_EMPLOYEE_SUCCESS:
    // eslint-disable-next-line
      const updatedList = state.employeeList;

    return {
      ...state,
      loading: false,
      error  : null,
      success: 'success',

      employeeList: updatedList.filter(item => item.id !== action.data.data.id),
    };
  case CONS.GET_EMPLOYEELIST_FAILURE:
  case CONS.GET_EMPLOYEE_FAILURE:
  case CONS.ADD_EMPLOYEE_FAILURE:
  case CONS.UPDATE_EMPLOYEE_FAILURE:
  case CONS.DELETE_EMPLOYEE_FAILURE:
    return {
      ...state,
      loading: false,
      error  : 'error',
      success: null,
    };
  case CONS.RESET_EMPLOYEE_FORM:
    return { ...state, error: null, success: null, employeeData: {} };
  default:
    return state;
  }
};

export default employeesReducer;
