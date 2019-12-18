export const selectEmployeeList = () => state => {
  return state.employeesReducer.patientList;
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
  return state.employeesReducer.patientData;
};

export const selectLoading = () => state => {
  return state.employeesReducer.loading;
};
