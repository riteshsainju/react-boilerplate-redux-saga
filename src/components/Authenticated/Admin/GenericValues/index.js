import React from 'react';
import { PrimaryButton } from 'commons/Buttons';
import { PageHeader } from 'commons/Style';
import { GENERIC_VALUES }from 'constants/routes'
import GenericValuesList from './List';

const App = ({ history }) => {
  const goto = path => {
    history.push(path);
  };
  return (
    <>
      <PageHeader>Generic Values</PageHeader>
      <PrimaryButton
        variant="contained"
        color="primary"
        onClick={() => {
          goto(`${GENERIC_VALUES.ADD_GENERIC_VALUES}`);
        }}
      >
        Create
      </PrimaryButton>
      <GenericValuesList />
    </>
  );
};

export default App;
