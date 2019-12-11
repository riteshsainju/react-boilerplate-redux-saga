import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import validate from 'utils/validate';
import { isSubmitButtonDisabled, cookieJar } from 'utils';
import Login from './Login';

const App = ({ handleSubmit, history, location, ...props }) => {
  const handleFormSubmit = async values => {
    const headers = { 'access-token': 'token' };
    cookieJar.setSession(headers);
    history.push('/');
  };

  return (
    <Login handleFormSubmit={handleFormSubmit} handleSubmit={handleSubmit} disabled={isSubmitButtonDisabled(props)} />
  );
};

App.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  history     : PropTypes.object.isRequired,
  location    : PropTypes.object,
};

const validateFields = {
  email   : { required: true, label: 'Email', email: true },
  password: { required: true, label: 'Password', password: true },
};

export default compose(
  connect(() => {
    return {
      initialValues: { remember_me: true },
    };
  }),
  reduxForm({
    form  : 'login',
    fields: validateFields,
    validate,
  }),
)(App);
