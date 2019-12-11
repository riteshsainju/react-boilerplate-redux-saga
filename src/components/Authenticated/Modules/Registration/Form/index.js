/*eslint-disable*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import validate from 'utils/validate';
import { isSubmitButtonDisabled } from 'utils';
import RegistrationForm from './Form';
import { addNewPatient } from '../actions';

// const App = ({ handleSubmit, history, location, ...props }) => {
//   const handleFormSubmit = async values => {
//     console.log(values);
//     // this.props.addNewPatient(values);
//     history.goBack();
//   };

//   return (
//     <RegistrationForm
//       handleFormSubmit={handleFormSubmit}
//       handleSubmit={handleSubmit}
//       disabled={isSubmitButtonDisabled(props)}
//     />
//   );
// };

// App.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
//   history: PropTypes.object.isRequired,
//   location: PropTypes.object,
// };

// const validateFields = {
//   first_name: { required: true, label: 'First Name' },
//   last_name: { required: true, label: 'Last Name' },
//   gender: { required: true, label: 'Gender' },
//   'address.state': { required: true, label: 'State' },
//   'address.district': { required: true, label: 'District' },
//   'address.city': { required: true, label: 'City' },
//   'address.street': { required: true, label: 'Street' },
// };

// const mapDispatchToProps = dispatch => ({
//   addNewPatient: data => dispatch(addNewPatient(data)),
// });

// export default compose(
//   // connect(() => {
//   //   return {
//   //     initialValues: { signup_access: 'no_access' },
//   //   };
//   // }),
//   connect(null, mapDispatchToProps),
//   reduxForm({
//     form: 'registrationForm',
//     fields: validateFields,
//     validate,
//   }),
// )(App);

class PatientRegistration extends Component {
  // const App = ({ handleSubmit, history, location, ...props }) => {
  handleFormSubmit = async values => {
    console.log(values);
    this.props.addNewPatient(values);
    this.props.history.goBack();
  };

  render() {
    return (
      <RegistrationForm
        handleFormSubmit={this.handleFormSubmit}
        handleSubmit={this.props.handleSubmit}
        disabled={isSubmitButtonDisabled(this.props)}
      />
    );
  }
}

const validateFields = {
  first_name: { required: true, label: 'First Name' },
  last_name: { required: true, label: 'Last Name' },
  gender: { required: true, label: 'Gender' },
  'address.state': { required: true, label: 'State' },
  'address.district': { required: true, label: 'District' },
  'address.city': { required: true, label: 'City' },
  'address.street': { required: true, label: 'Street' },
};

const mapDispatchToProps = dispatch => ({
  addNewPatient: data => dispatch(addNewPatient(data)),
});

export default compose(
  // connect(() => {
  //   return {
  //     initialValues: { signup_access: 'no_access' },
  //   };
  // }),
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'registrationForm',
    fields: validateFields,
    validate,
  }),
)(PatientRegistration);
