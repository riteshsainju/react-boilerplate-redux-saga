import React from 'react';
import { PrimaryButton } from 'commons/Buttons';
import PatientList from './List';

const App = ({ history }) => {
  const goto = path => {
    history.push(path);
  };
  return (
    <div style={{ 'margin-top': '100px' }}>
      <div>Patient Registration</div>
      <PrimaryButton
        variant="contained"
        color="primary"
        onClick={() => {
          goto('/registration/add-patient');
        }}
      >
        Create
      </PrimaryButton>
      <PatientList />
    </div>
  );
};

export default App;
