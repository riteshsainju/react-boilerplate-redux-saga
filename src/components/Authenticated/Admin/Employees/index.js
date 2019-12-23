import React from 'react';
import { PrimaryButton } from 'commons/Buttons';
import { PageHeader } from 'commons/Style';
import { EMPLOYEES } from 'constants/routes'
import { TableHeaderWrapper, TableHeader, TableWrapper } from 'commons/Table';

import EmployeeList from './List';

const App = ({ history }) => {
  const goto = path => {
    history.push(path);
  };
  return (
    <>
      <PageHeader>Employees</PageHeader>
      <TableWrapper>
        <TableHeaderWrapper>
          <TableHeader>Employee List</TableHeader>
          <PrimaryButton
            variant="contained"
            color="primary"
            onClick={() => {
              goto(`${EMPLOYEES.ADD_EMPLOYEE}`);
            }}
          >
        Add Employee
          </PrimaryButton>
        </TableHeaderWrapper>
        <EmployeeList />
      </TableWrapper>
    </>
  );
};

export default App;
