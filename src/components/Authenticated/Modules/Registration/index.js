import React from 'react';
import { PageHeader } from 'commons/Style';
import { TableWrapper } from 'commons/Table';
import PatientList from './List';

const App = ({ history }) => {
  return (
    <>
      <PageHeader>Patient Registration</PageHeader>
      <TableWrapper>
        <PatientList />
      </TableWrapper>
    </>
  );
};

export default App;
