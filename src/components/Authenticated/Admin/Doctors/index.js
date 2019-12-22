import React from 'react';
import { PrimaryButton } from 'commons/Buttons';
import { PageHeader } from 'commons/Style';
import { DOCTORS } from 'constants/routes'
import { TableHeaderWrapper, TableHeader, TableWrapper } from 'commons/Table';

import DoctorList from './List';

const App = ({ history }) => {
  const goto = path => {
    history.push(path);
  };
  return (
    <>
      <PageHeader>Doctors</PageHeader>
      <TableWrapper>
        <TableHeaderWrapper>
          <TableHeader>Doctor List</TableHeader>
          <PrimaryButton
            variant="contained"
            color="primary"
            onClick={() => {
              goto(`${DOCTORS.ADD_DOCTOR}`);
            }}
          >
          Add Doctor
          </PrimaryButton>
        </TableHeaderWrapper>
        <DoctorList />
      </TableWrapper>
    </>
  );
};

export default App;
