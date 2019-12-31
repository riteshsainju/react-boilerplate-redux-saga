export const selectRoles = () => state => {
  return state.authenticatedReducer.roles;
};

export const selectLoading = () => state => {
  return state.employeesReducer.loading;
};

