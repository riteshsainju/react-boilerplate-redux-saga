/*eslint-disable*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import validate from 'utils/validate';
import { isSubmitButtonDisabled, cookieJar } from 'utils';
import Form from './Form';
// import { login } from '../actions';

class ForgotPassword extends Component {
  handleFormSubmit = async values => {
    console.log('forgot-password')
  };

  goto = path => {
    this.props.history.push(path);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form
        handleFormSubmit={this.handleFormSubmit}
        handleSubmit={handleSubmit}
        disabled={isSubmitButtonDisabled(this.props)}
        goto={this.goto}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  // login: data => dispatch(login(data)),
});

const validateFields = {
  email: { required: true, label: 'Email', email: true },
};

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'forgotPasswordForm',
    fields: validateFields,
    validate,
  }),
)(ForgotPassword);
