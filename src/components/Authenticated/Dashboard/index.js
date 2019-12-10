import React from 'react';
import { Container } from 'components/Authenticated/styled';
import { PageHeader } from 'commons/Style';

import { MenuTab, MenuText, MenuWrapper } from './styled';

const Dashboard = ({ history }) => {
  const goto = path => {
    history.push(path);
  };

  return (
    <Container>
      <PageHeader>Dashboard</PageHeader>
      <MenuWrapper>
        <MenuTab onClick={() => goto('/registration')}>
          <MenuText>Registration</MenuText>
        </MenuTab>
        <MenuTab>
          <MenuText>Laboratory</MenuText>
        </MenuTab>
        <MenuTab>
          <MenuText>Stock Management</MenuText>
        </MenuTab>
      </MenuWrapper>
    </Container>
  );
};

export default Dashboard;
