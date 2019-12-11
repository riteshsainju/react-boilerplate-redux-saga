import React from 'react';
import { PrimaryButton } from 'commons/Buttons';
import { Container } from 'components/Authenticated/styled';
import { PageHeader } from 'commons/Style';
import PatientList from './List';

const App = ({ history }) => {
  const goto = path => {
    history.push(path);
  };
  return (
    <Container>
      <PageHeader>Patient Registration</PageHeader>
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
    </Container>
  );
};

export default App;
