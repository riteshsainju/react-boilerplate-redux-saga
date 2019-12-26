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
import {getAllDoctors} from '../../../Admin/Doctors/actions'
import {getGenericValuesList} from '../../../Admin/GenericValues/actions'
import { selectPatientData } from '../selectors';
import { selectAllDoctors } from '../../../Admin/Doctors/selectors';
import { selectGenericValuesList } from '../../../Admin/GenericValues/selectors';

class PatientRegistration extends Component {
  componentDidMount() {
    const {
      computedMatch: {
        params: { id },
      }, getAllDoctors,
      getAllGenericValues,
    } = this.props;
    if (id) {
      this.props.getPatient(id);
    } else {
      this.props.resetPatientForm();
    }
    getAllGenericValues(0);
    getAllDoctors();
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
    console.log(values,'values')
    if (id) {
      this.removeNullValues(values);
      this.props.updatePatient(values);
    } else this.props.addNewPatient(values);
  };

  render() {
    const {
      computedMatch: {
        params: { id },
      },allDoctors,
      allGenericValues
    } = this.props;
    console.log('allgenericValues',allGenericValues)
    return (
      <RegistrationForm
        handleFormSubmit={this.handleFormSubmit}
        handleSubmit={this.props.handleSubmit}
        disabled={isSubmitButtonDisabled(this.props)}
        history={this.props.history}
        formType={id ? 'Edit' : 'New'}
        doctors={allDoctors}
        genericValues={allGenericValues}
        visitTypes={allGenericValues.filter((item)=>item.type === 'patient_visit_type')}
        status={allGenericValues.filter((item)=>item.type === 'patient_status')}
        department={allGenericValues.filter((item)=>item.type === 'department')}

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
  doctor_id: { required: true, label: 'Doctor' },
  visit_type: { required: true, label: 'Visit Type' },
  status: { required: true, label: 'Patient Status' },
  department: { required: true, label: 'Department Id' },
  
};

const mapDispatchToProps = dispatch => ({
  addNewPatient: data => dispatch(addNewPatient(data)),
  getPatient: id => dispatch(getPatient(id)),
  updatePatient: data => dispatch(updatePatient(data)),
  resetPatientForm: () => dispatch(resetPatientForm()),
  getAllDoctors: () => dispatch(getAllDoctors()),
  getAllGenericValues: page => dispatch(getGenericValuesList(page)),

});

const mapStateToProps = createStructuredSelector({
  initialValues: selectPatientData(),
  allDoctors:selectAllDoctors(),
  allGenericValues: selectGenericValuesList()
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'registrationForm',
    fields: validateFields,
    enableReinitialize: true,
    validate,
  }),
)(PatientRegistration);
