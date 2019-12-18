export const selectDoctorList = () => state => {
  return state.doctorsReducer.doctorList;
};

export const selectCurrentPage = () => state => {
  return state.doctorsReducer.currentPage;
};

export const selectRowsPerPage = () => state => {
  return state.doctorsReducer.rowsPerPage;
};

export const selectTotal = () => state => {
  return state.doctorsReducer.total;
};
export const selectDoctorData = () => state => {
  return state.doctorsReducer.doctorData;
};

export const selectLoading = () => state => {
  return state.doctorsReducer.loading;
};
