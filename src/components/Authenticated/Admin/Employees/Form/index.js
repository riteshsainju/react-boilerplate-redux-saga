import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import validate from 'utils/validate';
import { isSubmitButtonDisabled } from 'utils';
import RegistrationForm from './Form';
import { addEmployee, getEmployee, updateEmployee, resetEmployeeForm } from '../actions';
import { selectEmployeeData, selectEmployeeFormValues } from '../selectors';

class EmployeeRegistration extends Component {
  componentDidMount() {
    const {
      computedMatch: {
        params: { id },
      },
      getData,
      resetForm
    } = this.props;
    if (id) {
      getData(id);
    } else {
      resetForm();
    }
  }

  removeNullValues = obj => {
    for (const propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined) {
        delete obj[propName]; //eslint-disable-line
      }
    }
  };

  handleFormSubmit = async values => {
    const {
      computedMatch: {
        params: { id },
      },updateData,
      addData,
    } = this.props;
    if (id) {
      this.removeNullValues(values);
      updateData(values);
    } else addData(values);
  };

  render() {
    const {
      computedMatch: {
        params: { id },
      },handleSubmit,
      history,formValues,

    } = this.props;
    return (
      <RegistrationForm
        handleFormSubmit={this.handleFormSubmit}
        handleSubmit={handleSubmit}
        disabled={isSubmitButtonDisabled(this.props)}
        history={history}
        formType={id ? 'Edit' : 'New'}
        formValues={formValues}
      />
    );
  }
}

const validateFields = {
  first_name       : { required: true, label: 'First Name' },
  last_name        : { required: true, label: 'Last Name' },
  gender           : { required: true, label: 'Gender' },
  mobile_number    : { required: true, label: 'Mobile Number' },
  date_of_birth    : { required: true, label: 'Date of Birth' },
  home_twon_address: { required: true, label: 'Address' },
  home_twon_state  : { required: true, label: 'State' },
  home_twon_city   : { required: true, label: 'City' },
  home_twon_country: { required: true, label: 'Country' },
  office_country   : { required: true, label: 'Country' },
  office_address   : { required: true, label: 'Address' },
  office_state     : { required: true, label: 'State' },
  office_city      : { required: true, label: 'City' },
  email            : { required: true, label: 'City' }
};

const mapDispatchToProps = dispatch => ({
  addData   : data => dispatch(addEmployee(data)),
  getData   : id => dispatch(getEmployee(id)),
  updateData: data => dispatch(updateEmployee(data)),
  resetForm : () => dispatch(resetEmployeeForm()),
});

const mapStateToProps = createStructuredSelector({
  initialValues: selectEmployeeData(),
  formValues   : selectEmployeeFormValues(),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form              : 'employeeRegistrationForm',
    fields            : validateFields,
    enableReinitialize: true,
    validate,
  }),
)(EmployeeRegistration);
