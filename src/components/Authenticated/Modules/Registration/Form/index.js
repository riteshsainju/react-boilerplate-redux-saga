import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import validate from 'utils/validate';
import { isSubmitButtonDisabled } from 'utils';
import RegistrationForm from './Form';

const App = ({ handleSubmit, history, location, ...props }) => {
  const handleFormSubmit = async values => {
    console.log(values);
    history.goBack();
  };

  return (
    <RegistrationForm
      handleFormSubmit={handleFormSubmit}
      handleSubmit={handleSubmit}
      disabled={isSubmitButtonDisabled(props)}
    />
  );
};

App.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  history     : PropTypes.object.isRequired,
  location    : PropTypes.object,
};

const validateFields = {
  first_name   : { required: true, label: 'First Name' },
  last_name    : { required: true, label: 'Last Name' },
  gender       : { required: true, label: 'Gender' },
  date_of_birth: { required: true, label: 'Date of Birth' },
};

export default compose(
  connect(() => {
    return {
      initialValues: { signup_access: 'no_access' },
    };
  }),
  reduxForm({
    form  : 'registrationForm',
    fields: validateFields,
    validate,
  }),
)(App);
