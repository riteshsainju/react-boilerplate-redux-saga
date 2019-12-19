import action from 'actions';
import * as CONS from './constants';

export const getEmployeeList = action(CONS.GET_EMPLOYEELIST, 'page');
export const getEmployeeListSuccess = action(CONS.GET_EMPLOYEELIST_SUCCESS, 'data');
export const getEmployeeListFailure = action(CONS.GET_EMPLOYEELIST_FAILURE, 'error');

export const addEmployee = action(CONS.ADD_EMPLOYEE, 'data');
export const addEmployeeSuccess = action(CONS.ADD_EMPLOYEE_SUCCESS, 'data');
export const addEmployeeFailure = action(CONS.ADD_EMPLOYEE_FAILURE, 'error');

export const getEmployee = action(CONS.GET_EMPLOYEE, 'id');
export const getEmployeeSuccess = action(CONS.GET_EMPLOYEE_SUCCESS, 'data');
export const getEmployeeFailure = action(CONS.GET_EMPLOYEE_FAILURE, 'error');

export const updateEmployee = action(CONS.UPDATE_EMPLOYEE, 'data', 'id', 'redirectUrl');
export const updateEmployeeSuccess = action(CONS.UPDATE_EMPLOYEE_SUCCESS, 'data');
export const updateEmployeeFailure = action(CONS.UPDATE_EMPLOYEE_FAILURE, 'error');

export const deleteEmployee = action(CONS.DELETE_EMPLOYEE, 'id', 'redirectUrl');
export const deleteEmployeeSuccess = action(CONS.DELETE_EMPLOYEE_SUCCESS, 'data');
export const deleteEmployeeFailure = action(CONS.DELETE_EMPLOYEE_FAILURE, 'error');

export const resetEmployeeForm = action(CONS.RESET_EMPLOYEE_FORM);
