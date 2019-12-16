export const selectGenericValuesList = () => state => {
  return state.genericValuesReducer.genericValuesList;
};

export const selectGenericValuesData = () => state => {
  return state.genericValuesReducer.genericValuesData;
};
export const selectLoading = () => state => {
  return state.genericValuesReducer.loading;
};
