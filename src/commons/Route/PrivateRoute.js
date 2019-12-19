/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from 'utils';

const PrivateRoute = ({ component: Component, render, ...rest }) => {
  const renderContent = props => {
    if (!isLogin()) {
      return (
        <Redirect
          to={{
            pathname: '/auth/login',
          }}
        />
      );
    }
    return typeof render === 'function' ? render(props) : <Component {...props} {...rest} />;
  };
  return <Route render={renderContent} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  render   : PropTypes.func,
};

export default PrivateRoute;
