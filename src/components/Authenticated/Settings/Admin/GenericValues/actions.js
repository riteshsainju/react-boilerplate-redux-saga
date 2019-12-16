import action from 'actions';
import * as CONS from './constants';

export const getGenericValuesList = action(CONS.GET_GENERICVALUESLIST, 'data');
export const getGenericValuesListSuccess = action(CONS.GET_GENERICVALUESLIST_SUCCESS, 'data');
export const getGenericValuesListFailure = action(CONS.GET_GENERICVALUESLIST_FAILURE, 'error');

export const addGenericValues = action(CONS.ADD_GENERICVALUES, 'data');
export const addGenericValuesSuccess = action(CONS.ADD_GENERICVALUES_SUCCESS, 'data');
export const addGenericValuesFailure = action(CONS.ADD_GENERICVALUES_FAILURE, 'error');

export const getGenericValues = action(CONS.GET_GENERICVALUES, 'id');
export const getGenericValuesSuccess = action(CONS.GET_GENERICVALUES_SUCCESS, 'data');
export const getGenericValuesFailure = action(CONS.GET_GENERICVALUES_FAILURE, 'error');

export const updateGenericValues = action(CONS.UPDATE_GENERICVALUES, 'data', 'id', 'redirectUrl');
export const updateGenericValuesSuccess = action(CONS.UPDATE_GENERICVALUES_SUCCESS, 'data');
export const updateGenericValuesFailure = action(CONS.UPDATE_GENERICVALUES_FAILURE, 'error');

export const deleteGenericValues = action(CONS.DELETE_GENERICVALUES, 'id', 'redirectUrl');
export const deleteGenericValuesSuccess = action(CONS.DELETE_GENERICVALUES_SUCCESS, 'data');
export const deleteGenericValuesFailure = action(CONS.DELETE_GENERICVALUES_FAILURE, 'error');

export const resetGenericValuesForm = action(CONS.RESET_GENERICVALUES_FORM);
