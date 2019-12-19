import React from 'react';
import { PrimaryButton } from 'commons/Buttons';
import { PageHeader } from 'commons/Style';
import { EMPLOYEES } from 'constants/routes'

import EmployeeList from './List';

const App = ({ history }) => {
  const goto = path => {
    history.push(path);
  };
  return (
    <>
      <PageHeader>Employees</PageHeader>
      <PrimaryButton
        variant="contained"
        color="primary"
        onClick={() => {
          goto(`${EMPLOYEES.ADD_EMPLOYEE}`);
        }}
      >
        Create
      </PrimaryButton>
      <EmployeeList />
    </>
  );
};

export default App;
