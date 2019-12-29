import React, { Component } from 'react';
import { Switch, Redirect, withRouter,Route } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { PrivateRoute } from 'commons/Route';
import { DASHBOARD_PATH, PATIENTS, REPORTS, BILLING } from 'constants/routes'
import Dashboard from 'components/Authenticated/Dashboard';
import Registration from 'components/Authenticated/Modules/Registration';
import PatientsForm from 'components/Authenticated/Modules/Registration/Form';
import Admin from 'components/Authenticated/Admin';
import Billing from 'components/Authenticated/Billing';
import LabReport from 'components/Authenticated/Reports/Lab';
import XrayReport from 'components/Authenticated/Reports/Xray';
import { Container } from 'components/Authenticated/styled';
import { getRoles } from 'components/Authenticated/actions';
import { selectRoles } from 'components/Authenticated/selectors';


import PageNotFound from 'components/Authenticated/PageNotFound';

class EmployeeRegistration extends Component {
  componentDidMount() {
    const { roles,getAllRoles } = this.props
    if (roles.length <= 0) {
      getAllRoles();
    }
  }

  render() {
    return (
      <Container>
        <Switch>
          <Redirect exact from='/' to={DASHBOARD_PATH} />
          <PrivateRoute path={DASHBOARD_PATH} component={Dashboard} />
          <PrivateRoute path={PATIENTS.ADD_PATIENT} component={PatientsForm} />
          <PrivateRoute path={PATIENTS.EDIT_PATIENT} component={PatientsForm} />
          <PrivateRoute path={PATIENTS.PATIENTS_ROUTE} component={Registration} />
          <PrivateRoute path="/admin" component={Admin} />

          {/* WIP */}
          <PrivateRoute path={REPORTS.LAB_REPORTS_PATH} component={LabReport} />
          <PrivateRoute path={REPORTS.XRAY_REPORTS_PATH} component={XrayReport} />
          <PrivateRoute path={REPORTS.REPORTS_ROUTE} component={LabReport} />
          <PrivateRoute path={BILLING.BILLING_ROUTE} component={Billing} />

          <Route component={PageNotFound} />

        </Switch>
      </Container>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  getAllRoles: ()=>dispatch(getRoles()),

});

const mapStateToProps = createStructuredSelector({
  roles: selectRoles(),
});


// export default withRouter(App);
export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(EmployeeRegistration);
