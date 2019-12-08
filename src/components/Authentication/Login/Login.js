import React from 'react';
import PropTypes, { bool } from 'prop-types';
import { Field } from 'redux-form';

import { TextField, PasswordField } from 'commons/Forms/InputField';
import Checkbox from 'commons/Forms/Checkbox';

import { PrimaryButton } from 'commons/Buttons';

import Row from 'commons/Forms/Row';

const Login = ({ handleFormSubmit, handleSubmit, disabled }) => {
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Row>
          <Field name="email" type="email" label="Email Address" component={TextField} />
        </Row>
        <Row>
          <Field name="password" label="Password" component={PasswordField} />
        </Row>
        <Row>
          <Field name="remember_me" component={Checkbox} label="Remember me?" />
        </Row>
        <div>
          <PrimaryButton type="submit" disabled={disabled} variant="contained" color="primary">
            Login
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  disabled        : bool,
  handleFormSubmit: PropTypes.func.isRequired,
  handleSubmit    : PropTypes.func.isRequired,
};

export default Login;
