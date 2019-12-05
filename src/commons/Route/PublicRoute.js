/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from 'utils';

const PublicRoute = ({ component: Component, restricted, render, ...rest }) => {
  return (
    <Route {...rest} render={props => (isLogin() && restricted ? <Redirect to="/" /> : <Component {...props} />)} />
  );
};

PublicRoute.propTypes = {
  component : PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  render    : PropTypes.func,
  restricted: PropTypes.bool,
};

export default PublicRoute;
