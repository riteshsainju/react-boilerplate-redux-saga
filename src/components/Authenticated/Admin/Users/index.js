import React from 'react';
import { PageHeader } from 'commons/Style';
import { TableHeaderWrapper, TableHeader, TableWrapper } from 'commons/Table';

import UserList from './List';

const App = ({ history }) => {
  // const goto = path => {
  //   history.push(path);
  // };
  return (
    <>
      <PageHeader>Users</PageHeader>
      <TableWrapper>
        <TableHeaderWrapper>
          <TableHeader>User List</TableHeader>
        </TableHeaderWrapper>
        <UserList />
      </TableWrapper>

    </>
  );
};

export default App;
