import { Container } from 'components/Authenticated/styled';

import React from 'react';
import { Switch, Redirect, withRouter,Route } from 'react-router-dom';

import { PrivateRoute } from 'commons/Route';
import { DASHBOARD_PATH, PATIENTS } from 'constants/routes'
import Dashboard from 'components/Authenticated/Dashboard';
import Registration from 'components/Authenticated/Modules/Registration';
import PatientsForm from 'components/Authenticated/Modules/Registration/Form';
import Admin from 'components/Authenticated/Admin';
import PageNotFound from 'components/Authenticated/PageNotFound';

const App = () => {
  return (
    <Container>
      <Switch>
        <Redirect exact from='/' to={DASHBOARD_PATH} />
        <PrivateRoute path={DASHBOARD_PATH} component={Dashboard} />
        <PrivateRoute path={PATIENTS.ADD_PATIENT} component={PatientsForm} />
        <PrivateRoute path={PATIENTS.EDIT_PATIENT} component={PatientsForm} />
        <PrivateRoute path={PATIENTS.PATIENTS_ROUTE} component={Registration} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route component={PageNotFound} />

      </Switch>
    </Container>
  );
};

export default withRouter(App);
