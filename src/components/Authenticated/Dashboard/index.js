import React from 'react';
import { Container } from 'components/Authenticated/styled';
import { MenuTab, MenuText } from './styled';

const Dashboard = ({ history }) => {
  const goto = path => {
    history.push(path);
  };

  return (
    <Container>
      <MenuTab>
        <MenuText onClick={() => goto('/registration')}>Registration</MenuText>
      </MenuTab>
    </Container>
  );
};

export default Dashboard;
