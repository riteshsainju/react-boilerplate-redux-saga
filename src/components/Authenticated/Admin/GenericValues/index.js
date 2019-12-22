import React from 'react';
import { PrimaryButton } from 'commons/Buttons';
import { PageHeader } from 'commons/Style';
import { GENERIC_VALUES }from 'constants/routes'
import { TableHeaderWrapper, TableHeader, TableWrapper } from 'commons/Table';
import GenericValuesList from './List';

const App = ({ history }) => {
  const goto = path => {
    history.push(path);
  };
  return (
    <>
      <PageHeader>Generic Values</PageHeader>
      <TableWrapper>
        <TableHeaderWrapper>
          <TableHeader>Generic Values List</TableHeader>
          <PrimaryButton
            variant="contained"
            color="primary"
            onClick={() => {
              goto(`${GENERIC_VALUES.ADD_GENERIC_VALUES}`);
            }}
          >
        Create
          </PrimaryButton>
        </TableHeaderWrapper>
        <GenericValuesList />
      </TableWrapper>
    </>
  );
};

export default App;
