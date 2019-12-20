/*eslint-disable*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import validate from 'utils/validate';
import { isSubmitButtonDisabled, cookieJar } from 'utils';
import LoginForm from './Login';
import { login } from '../actions';

class Login extends Component {
  handleFormSubmit = async values => {
    this.props.login(values);
  };

  goto = path => {
    this.props.history.push(path);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <LoginForm
        handleFormSubmit={this.handleFormSubmit}
        handleSubmit={handleSubmit}
        disabled={isSubmitButtonDisabled(this.props)}
        goto={this.goto}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login(data)),
});

const validateFields = {
  email: { required: true, label: 'Email', email: true },
  password: { required: true, label: 'Password', password: true },
};

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'login',
    fields: validateFields,
    validate,
  }),
)(Login);
