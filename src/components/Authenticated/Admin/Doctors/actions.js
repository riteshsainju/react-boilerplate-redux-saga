import action from 'actions';
import * as CONS from './constants';

export const getDoctorList = action(CONS.GET_DOCTORLIST, 'page');
export const getDoctorListSuccess = action(CONS.GET_DOCTORLIST_SUCCESS, 'data');
export const getDoctorListFailure = action(CONS.GET_DOCTORLIST_FAILURE, 'error');

export const addDoctor = action(CONS.ADD_DOCTOR, 'data');
export const addDoctorSuccess = action(CONS.ADD_DOCTOR_SUCCESS, 'data');
export const addDoctorFailure = action(CONS.ADD_DOCTOR_FAILURE, 'error');

export const getDoctor = action(CONS.GET_DOCTOR, 'id');
export const getDoctorSuccess = action(CONS.GET_DOCTOR_SUCCESS, 'data');
export const getDoctorFailure = action(CONS.GET_DOCTOR_FAILURE, 'error');

export const updateDoctor = action(CONS.UPDATE_DOCTOR, 'data', 'id', 'redirectUrl');
export const updateDoctorSuccess = action(CONS.UPDATE_DOCTOR_SUCCESS, 'data');
export const updateDoctorFailure = action(CONS.UPDATE_DOCTOR_FAILURE, 'error');

export const deleteDoctor = action(CONS.DELETE_DOCTOR, 'id', 'redirectUrl');
export const deleteDoctorSuccess = action(CONS.DELETE_DOCTOR_SUCCESS, 'data');
export const deleteDoctorFailure = action(CONS.DELETE_DOCTOR_FAILURE, 'error');

export const resetDoctorForm = action(CONS.RESET_DOCTOR_FORM);
