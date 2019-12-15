import action from 'actions';
import * as CONS from './constants';

export const getPatientList = action(CONS.GET_PATIENTLIST, 'data');
export const getPatientListSuccess = action(CONS.GET_PATIENTLIST_SUCCESS, 'data');
export const getPatientListFailure = action(CONS.GET_PATIENTLIST_FAILURE, 'error');

export const addNewPatient = action(CONS.ADD_NEW_PATIENT, 'data');
export const addNewPatientSuccess = action(CONS.ADD_NEW_PATIENT_SUCCESS, 'data');
export const addNewPatientFailure = action(CONS.ADD_NEW_PATIENT_FAILURE, 'error');

export const editPatient = action(CONS.EDIT_PATIENT, 'data', 'Id', 'redirectUrl');
export const editPatientSuccess = action(CONS.EDIT_PATIENT_SUCCESS, 'data');
export const editPatientFailure = action(CONS.EDIT_PATIENT_FAILURE, 'error');

export const deletePatient = action(CONS.DELETE_PATIENT, 'id', 'redirectUrl');
export const deletePatientSuccess = action(CONS.DELETE_PATIENT_SUCCESS, 'data');
export const deletePatientFailure = action(CONS.DELETE_PATIENT_FAILURE, 'error');
