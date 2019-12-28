import React from 'react';
import { PageHeader } from 'commons/Style';
import Card from './Card'

const Dashboard = ({ history }) => {
  return (
    <>
      <PageHeader>Dashboard</PageHeader>
      <Card />
    </>
  );
};

export default Dashboard;
