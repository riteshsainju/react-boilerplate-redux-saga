import React from 'react';
import { Switch, Redirect, withRouter } from 'react-router-dom';

import { PrivateRoute } from 'commons/Route';
import { ADMIN_PATH, EMPLOYEES, GENERIC_VALUES, DOCTORS, USERS } from 'constants/routes'
import Employees from 'components/Authenticated/Admin/Employees';
import EmployeesForm from 'components/Authenticated/Admin/Employees/Form';
import GenericValues from 'components/Authenticated/Admin/GenericValues';
import GenericValuesForm from 'components/Authenticated/Admin/GenericValues/Form';
import Doctors from 'components/Authenticated/Admin/Doctors';
import DoctorsForm from 'components/Authenticated/Admin/Doctors/Form'
import Users from 'components/Authenticated/Admin/Users';

const App = () => {
  return (
    <Switch>
      <Redirect exact from={ADMIN_PATH} to={EMPLOYEES.EMPLOYEES_ROUTE} />
      <PrivateRoute path={EMPLOYEES.ADD_EMPLOYEE} component={EmployeesForm} />
      <PrivateRoute path={EMPLOYEES.EDIT_EMPLOYEE} component={EmployeesForm} />
      <PrivateRoute path={EMPLOYEES.EMPLOYEES_ROUTE} component={Employees} />

      <PrivateRoute path={DOCTORS.ADD_DOCTOR} component={DoctorsForm} />
      <PrivateRoute path={DOCTORS.EDIT_DOCTOR} component={DoctorsForm} />
      <PrivateRoute path={DOCTORS.DOCTORS_ROUTE} component={Doctors} />

      <PrivateRoute path={USERS.USERS_ROUTE} component={Users} />

      <PrivateRoute path={GENERIC_VALUES.ADD_GENERIC_VALUES} component={GenericValuesForm} />
      <PrivateRoute path={GENERIC_VALUES.EDIT_GENERIC_VALUES} component={GenericValuesForm} />
      <PrivateRoute path={GENERIC_VALUES.GENERIC_VALUES_ROUTE} component={GenericValues} />

    </Switch>
  );
};

export default withRouter(App);
