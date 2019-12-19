export const selectGenericValuesList = () => state => {
  return state.genericValuesReducer.genericValuesList;
};

export const selectGenericValuesData = () => state => {
  return state.genericValuesReducer.genericValuesData;
};

export const selectCurrentPage = () => state => {
  return state.genericValuesReducer.currentPage;
};

export const selectRowsPerPage = () => state => {
  return state.genericValuesReducer.rowsPerPage;
};

export const selectTotal = () => state => {
  return state.genericValuesReducer.total;
};

export const selectLoading = () => state => {
  return state.genericValuesReducer.loading;
};
