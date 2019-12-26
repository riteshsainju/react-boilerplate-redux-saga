export const selectRoles = () => state => {
  console.log( state.authenticatedReducer.roles,'rolesel')
  return state.authenticatedReducer.roles;
};

export const selectLoading = () => state => {
  return state.employeesReducer.loading;
};

