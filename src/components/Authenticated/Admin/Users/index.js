import React from 'react';
import { PageHeader } from 'commons/Style';

import UserList from './List';

const App = ({ history }) => {
  // const goto = path => {
  //   history.push(path);
  // };
  return (
    <>
      <PageHeader>Users</PageHeader>
      <UserList />
    </>
  );
};

export default App;
