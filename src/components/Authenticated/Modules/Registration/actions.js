import action from 'actions';
import * as CONS from './constants';

export const getPatientList = action(CONS.GET_PATIENTLIST, 'data');
export const getPatientListSuccess = action(CONS.GET_PATIENTLIST_SUCCESS, 'data');
export const getPatientListFailure = action(CONS.GET_PATIENTLIST_FAILURE, 'error');

export const addNewPatient = action(CONS.ADD_NEW_PATIENT, 'data');
export const addNewPatientSuccess = action(CONS.ADD_NEW_PATIENT_SUCCESS, 'data');
export const addNewPatientFailure = action(CONS.ADD_NEW_PATIENT_FAILURE, 'error');

export const getPatient = action(CONS.GET_PATIENT, 'id');
export const getPatientSuccess = action(CONS.GET_PATIENT_SUCCESS, 'data');
export const getPatientFailure = action(CONS.GET_PATIENT_FAILURE, 'error');

export const updatePatient = action(CONS.UPDATE_PATIENT, 'data', 'id', 'redirectUrl');
export const updatePatientSuccess = action(CONS.UPDATE_PATIENT_SUCCESS, 'data');
export const updatePatientFailure = action(CONS.UPDATE_PATIENT_FAILURE, 'error');

export const deletePatient = action(CONS.DELETE_PATIENT, 'id', 'redirectUrl');
export const deletePatientSuccess = action(CONS.DELETE_PATIENT_SUCCESS, 'data');
export const deletePatientFailure = action(CONS.DELETE_PATIENT_FAILURE, 'error');

export const resetPatientForm = action(CONS.RESET_PATIENT_FORM);

