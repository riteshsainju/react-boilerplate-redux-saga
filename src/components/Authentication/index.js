import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';

const Authentication = ({ match, path }) => {
  console.log(path);
  console.log(`${match.url}/signup`);
  return (
    <Switch>
      <Route exact path={path} render={() => <Redirect to={`${path}/login`} />} />
      <Route path={`${path}/login`} component={Login} />
      <Route path={`${match.url}/signup`} component={Signup} />
      <Route path={`${path}/forgot-password`} component={ForgotPassword} />
      <Route path={`${path}/reset-password`} component={ResetPassword} />
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
