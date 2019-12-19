import { get } from 'lodash'

export const selectEmployeeList = () => state => {
  return state.employeesReducer.employeeList;
};

export const selectCurrentPage = () => state => {
  return state.employeesReducer.currentPage;
};

export const selectRowsPerPage = () => state => {
  return state.employeesReducer.rowsPerPage;
};

export const selectTotal = () => state => {
  return state.employeesReducer.total;
};
export const selectEmployeeData = () => state => {
  return state.employeesReducer.employeeData;
};

export const selectLoading = () => state => {
  return state.employeesReducer.loading;
};

export const selectEmployeeFormValues = () => state => {
  return get(state, 'form.employeeRegistrationForm.values') || {}
};
