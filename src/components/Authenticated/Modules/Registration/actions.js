import action from 'actions';
import * as CONS from './constants';

export const getPatientList = action(CONS.GET_PATIENTLIST, 'data');
export const getPatientListSuccess = action(CONS.GET_PATIENTLIST_SUCCESS, 'data');
export const getPatientListFailure = action(CONS.GET_PATIENTLIST_FAILURE, 'error');

export const addNewPatient = action(CONS.ADD_NEW_PATIENT, 'data');
export const addNewPatientSuccess = action(CONS.ADD_NEW_PATIENT_SUCCESS, 'data');
export const addNewPatientFailure = action(CONS.ADD_NEW_PATIENT_FAILURE, 'error');
