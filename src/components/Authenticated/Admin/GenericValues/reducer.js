import * as CONS from './constants';

// import { GET_GENERICVALUESLIST, GET_GENERICVALUESLIST_SUCCESS, GET_GENERICVALUESLIST_FAILURE } from './constants';

const initialState = {
  loading          : true,
  error            : null,
  success          : null,
  genericValuesList: [],
  genericValuesData: {},
  currentPage      : 1,
  total            : 0,
  rowsPerPage      : 10,
};

const genericValuesReducer = (state = initialState, action) => {
  switch (action.type) {
  case CONS.GET_GENERICVALUESLIST:
  case CONS.ADD_GENERICVALUES:
  case CONS.GET_GENERICVALUES:
  case CONS.UPDATE_GENERICVALUES:
  case CONS.DELETE_GENERICVALUES:
    return {
      ...state,
      loading: true,
      error  : null,
      success: 'fetching',
    };
  case CONS.GET_GENERICVALUESLIST_SUCCESS:
    return {
      ...state,
      loading          : false,
      error            : null,
      success          : 'success',
      genericValuesList: action.data.data.items,
      currentPage      : action.data.data.pagination.current_page,
      total            : action.data.data.pagination.total,
      rowsPerPage      : action.data.data.pagination.per_page
    };
  case CONS.GET_GENERICVALUES_SUCCESS:
    return {
      ...state,
      loading          : false,
      error            : null,
      success          : 'success',
      genericValuesData: action.data.data,
    };
  case CONS.UPDATE_GENERICVALUES_SUCCESS:
  case CONS.ADD_GENERICVALUES_SUCCESS:
    return {
      ...state,
      loading: false,
      error  : null,
      success: 'success',
    };
  case CONS.DELETE_GENERICVALUES_SUCCESS:
    // eslint-disable-next-line
      const updatedGenericValues = state.genericValuesList;

    return {
      ...state,
      loading: false,
      error  : null,
      success: 'success',

      genericValuesList: updatedGenericValues.filter(item => item.id !== action.data.data.id),
    };
  case CONS.GET_GENERICVALUESLIST_FAILURE:
  case CONS.GET_GENERICVALUES_FAILURE:
  case CONS.ADD_GENERICVALUES_FAILURE:
  case CONS.UPDATE_GENERICVALUES_FAILURE:
  case CONS.DELETE_GENERICVALUES_FAILURE:
    return {
      ...state,
      loading: false,
      error  : 'error',
      success: null,
    };
  case CONS.RESET_GENERICVALUES_FORM:
    return { ...state, error: null, success: null, genericValuesData: {} };
  default:
    return state;
  }
};

export default genericValuesReducer;
