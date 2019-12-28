// import { get } from 'lodash'

export const selectUserList = () => state => {
  return state.usersReducer.userList;
};

export const selectCurrentPage = () => state => {
  return state.usersReducer.currentPage;
};

export const selectRowsPerPage = () => state => {
  return state.usersReducer.rowsPerPage;
};

export const selectTotal = () => state => {
  return state.usersReducer.total;
};

export const selectUserData = () => state => {
  console.log(state.usersReducer.userData,'userdata')
  return state.usersReducer.userData;
};

export const selectLoading = () => state => {
  return state.usersReducer.loading;
};

// export const selectUserFormValues = () => state => {
//   return get(state, 'form.userRegistrationForm.values') || {}
// };

