export const selectPatientList = () => state => {
  return state.registrationReducer.patientList;
};

export const selectCurrentPage = () => state => {
  return state.registrationReducer.currentPage;
};

export const selectRowsPerPage = () => state => {
  return state.registrationReducer.rowsPerPage;
};

export const selectTotal = () => state => {
  return state.registrationReducer.total;
};
export const selectPatientData = () => state => {
  return state.registrationReducer.patientData;
};

export const selectLoading = () => state => {
  return state.registrationReducer.loading;
};
