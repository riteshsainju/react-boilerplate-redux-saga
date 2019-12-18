import React from 'react';
import { PrimaryButton } from 'commons/Buttons';
import { PageHeader } from 'commons/Style';
import { DOCTORS } from 'constants/routes'

import DoctorList from './List';

const App = ({ history }) => {
  const goto = path => {
    history.push(path);
  };
  return (
    <>
      <PageHeader>Doctors</PageHeader>
      <PrimaryButton
        variant="contained"
        color="primary"
        onClick={() => {
          goto(`${DOCTORS.ADD_DOCTOR}`);
        }}
      >
        Create
      </PrimaryButton>
      <DoctorList />
    </>
  );
};

export default App;
