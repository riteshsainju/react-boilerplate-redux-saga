/*eslint-disable*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import validate from 'utils/validate';
import { isSubmitButtonDisabled } from 'utils';
import RegistrationForm from './Form';
import { addNewPatient, getPatient, updatePatient, resetPatientForm } from '../actions';
import { selectPatientData } from '../selectors';

class PatientRegistration extends Component {
  componentDidMount() {
    const {
      computedMatch: {
        params: { id },
      },
    } = this.props;
    if (id) {
      this.props.getPatient(id);
    } else {
      this.props.resetPatientForm();
    }
  }

  removeNullValues = obj => {
    for (var propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined) {
        delete obj[propName];
      }
    }
  };
  handleFormSubmit = async values => {
    const {
      computedMatch: {
        params: { id },
      },
    } = this.props;
    if (id) {
      this.removeNullValues(values);
      this.props.updatePatient(values);
    } else this.props.addNewPatient(values);
  };

  render() {
    const {
      computedMatch: {
        params: { id },
      },
    } = this.props;

    return (
      <RegistrationForm
        handleFormSubmit={this.handleFormSubmit}
        handleSubmit={this.props.handleSubmit}
        disabled={isSubmitButtonDisabled(this.props)}
        history={this.props.history}
        formType={id ? 'Edit' : 'New'}
      />
    );
  }
}

const validateFields = {
  first_name: { required: true, label: 'First Name' },
  last_name: { required: true, label: 'Last Name' },
  gender: { required: true, label: 'Gender' },
  state_id: { required: true, label: 'State' },
  district_id: { required: true, label: 'State' },
  ward: { required: true, label: 'Ward' },
  municipality: { required: true, label: 'Municipality' },
  mobile_number: { required: true, label: 'Mobile Number' },
  date_of_birth: { required: true, label: 'Date of Birth' },
};

const mapDispatchToProps = dispatch => ({
  addNewPatient: data => dispatch(addNewPatient(data)),
  getPatient: id => dispatch(getPatient(id)),
  updatePatient: data => dispatch(updatePatient(data)),
  resetPatientForm: () => dispatch(resetPatientForm()),
});

const mapStateToProps = createStructuredSelector({
  initialValues: selectPatientData(),
});

export default compose(
  withRouter,
  // connect(() => {
  //   return {
  //     initialValues: { signup_access: 'no_access' },
  //   };
  // }),
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'registrationForm',
    fields: validateFields,
    enableReinitialize: true,
    validate,
  }),
)(PatientRegistration);
