import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';

const Authentication = ({ match, path }) => {
  return (
    <Switch>
      <Route exact path={`${match.url}`} render={() => <Redirect to={`${match.url}/login`} />} />
      <Route path={`${match.url}/login`} component={Login} />
      <Route path={`${match.url}/signup`} component={Signup} />
      <Route path={`${match.url}/forgot-password`} component={ForgotPassword} />
      <Route path={`${match.url}/reset-password`} component={ResetPassword} />
    </Switch>
  );
};

Authentication.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  path: PropTypes.string,
};

export default withRouter(Authentication);
