export const selectPatientList = () => state => {
  return state.registrationReducer.patientList;
};

export const selectPatientData = () => state => {
  return state.registrationReducer.patientData;
};
