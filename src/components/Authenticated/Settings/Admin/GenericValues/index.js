import React from 'react';
import { PrimaryButton } from 'commons/Buttons';
import { Container } from 'components/Authenticated/styled';
import { PageHeader } from 'commons/Style';

import GenericValuesList from './List';

const App = ({ history }) => {
  const goto = path => {
    history.push(path);
  };
  return (
    <Container>
      <PageHeader>Generic Values</PageHeader>
      <PrimaryButton
        variant="contained"
        color="primary"
        onClick={() => {
          goto('/generic-values/add');
        }}
      >
        Create
      </PrimaryButton>
      <GenericValuesList />
    </Container>
  );
};

export default App;
