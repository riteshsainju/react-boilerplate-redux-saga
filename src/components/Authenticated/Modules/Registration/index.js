import React from 'react';
import { PrimaryButton } from 'commons/Buttons';
import { Container } from 'components/Authenticated/styled';
import { PageHeader } from 'commons/Style';
import { TableHeaderWrapper, TableHeader, TableWrapper } from 'commons/Table';
import PatientList from './List';

const App = ({ history }) => {
  const goto = path => {
    history.push(path);
  };
  return (
    <Container>
      <PageHeader>Patient Registration</PageHeader>
      <TableWrapper>
        <TableHeaderWrapper>
          <TableHeader>Patient List</TableHeader>
          <PrimaryButton
            variant="contained"
            color="primary"
            onClick={() => {
              goto('/registration/add-patient');
            }}
          >
          Add Patient
          </PrimaryButton>
        </TableHeaderWrapper>
        <PatientList />
      </TableWrapper>
    </Container>
  );
};

export default App;
