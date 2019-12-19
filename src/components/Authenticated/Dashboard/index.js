import React from 'react';
import { Container } from 'components/Authenticated/styled';
import { PageHeader } from 'commons/Style';
import { GENERIC_VALUES, EMPLOYEES,DOCTORS } from 'constants/routes'
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
        <MenuTab onClick={() => goto(`${EMPLOYEES.EMPLOYEES_ROUTE}`)}>
          <MenuText >Admin: Employees</MenuText>
        </MenuTab>
        <MenuTab onClick={() => goto(`${DOCTORS.DOCTORS_ROUTE}`)}>
          <MenuText>Admin: Doctors</MenuText>
        </MenuTab>
        <MenuTab onClick={() => goto(`${GENERIC_VALUES.GENERIC_VALUES_ROUTE}`)}>
          <MenuText >Admin: Generic Values</MenuText>
        </MenuTab>
      </MenuWrapper>
    </Container>
  );
};

export default Dashboard;
