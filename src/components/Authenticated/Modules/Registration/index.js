import React from 'react';
import { PrimaryButton } from 'commons/Buttons';
import { PATIENTS } from 'constants/routes'
import { PageHeader } from 'commons/Style';
import { TableHeaderWrapper, TableHeader, TableWrapper } from 'commons/Table';
import PatientList from './List';

const App = ({ history }) => {
  const goto = path => {
    history.push(path);
  };
  return (
    <>
      <PageHeader>Patient Registration</PageHeader>
      <TableWrapper>
        <TableHeaderWrapper>
          <TableHeader>Patient List</TableHeader>
          <PrimaryButton
            variant="contained"
            color="primary"
            onClick={() => {
              goto(`${PATIENTS.PATIENTS_ROUTE}/new`)}}
          >
          Add Patient
          </PrimaryButton>
        </TableHeaderWrapper>
        <PatientList />
      </TableWrapper>
    </>
  );
};

export default App;
