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

// const App = ({ handleSubmit, history, location, ...props }) => {
//   const handleFormSubmit = async values => {
//     const headers = { 'access-token': 'token' };
//     cookieJar.setSession(headers);
//     history.push('/');
//   };

//   return (
//     <Login handleFormSubmit={handleFormSubmit} handleSubmit={handleSubmit} disabled={isSubmitButtonDisabled(props)} />
//   );
// };

// App.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
//   history     : PropTypes.object.isRequired,
//   location    : PropTypes.object,
// };

class Login extends Component {
  handleFormSubmit = async values => {
    // const headers = { 'access-token': 'token' };
    // cookieJar.setSession(headers);
    // history.push('/');
    this.props.login(values);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <LoginForm
        handleFormSubmit={this.handleFormSubmit}
        handleSubmit={handleSubmit}
        disabled={isSubmitButtonDisabled(this.props)}
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
