/*eslint-disable*/
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import validate from 'utils/validate';
import { isSubmitButtonDisabled } from 'utils';
import { getRoles } from 'components/Authenticated/actions';
import { selectRoles } from 'components/Authenticated/selectors';
import { getGenericValuesList } from 'components/Authenticated/Admin/GenericValues/actions';
import { selectGenericValuesList } from 'components/Authenticated/Admin/GenericValues/selectors';
import RegistrationForm from './Form';
import { addDoctor, getDoctor, updateDoctor, resetDoctorForm } from '../actions';
import { selectDoctorData,selectDoctorFormValues } from '../selectors';

class DoctorRegistration extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedRoles: [],
    };
  }
  
  componentDidMount() {
    const {
      computedMatch: {
        params: { id },
      },
      getData,
      resetForm,

      // getAllRoles,
      getAllGenericValues
    } = this.props;

    // getAllRoles();
    getAllGenericValues(0);
    if (id) {
      getData(id);
    } else {
      resetForm();
    }
  }


  componentDidUpdate(prevProps) {
    const { selectedRoles } = this.state
    const { initialValues } = this.props
    if (prevProps.initialValues !== initialValues) {
      this.setState({
        selectedRoles: initialValues.roles
          ? initialValues.roles.map(role=>role.toString())
          : selectedRoles })}
  }


  removeNullValues = obj => {
    for (const propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined) {
        delete obj[propName]; //eslint-disable-line
      }
    }
  };

  handleCheckbox = event => {
    const { selectedRoles } = this.state;
    const item = event.target.id;
    const checkboxGroup = selectedRoles.includes(item) ? selectedRoles.filter(i => i !== item) : [...selectedRoles, item];
    this.setState({ selectedRoles: checkboxGroup });
  };

  handleFormSubmit = async values => {
    const {
      computedMatch: {
        params: { id },
      },updateData,
      addData,
    } = this.props;
    const { selectedRoles }= this.state
    if (id) {
      this.removeNullValues({ ...values, roles: selectedRoles });
      updateData(values);
    } else addData({ ...values, roles: selectedRoles,password: 'test@123' });
  };

  render() {
    const {
      computedMatch: {
        params: { id },
      },handleSubmit,
      history,formValues,
      roles,
      allGenericValues
    } = this.props;
    const { selectedRoles } = this.state

    return (
      <RegistrationForm
        handleFormSubmit={this.handleFormSubmit}
        handleSubmit={handleSubmit}
        disabled={isSubmitButtonDisabled(this.props)}
        history={history}
        formType={id ? 'Edit' : 'Add'}
        formValues={formValues}
        selectedRoles={selectedRoles}
        handleCheckbox={this.handleCheckbox}
        roles={roles}
        genericValues={allGenericValues}
        department={allGenericValues.filter(item=>item.type === 'department')}
        specialization={allGenericValues.filter(item=>item.type === 'specialization')}
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
  specialization   : { required: true, label: 'Specialization' },
  degree           : { required: true, label: 'Degree' },
  department       : { required: true, label: 'Department' },
  home_twon_address: { required: true, label: 'Address' },
  home_twon_state  : { required: true, label: 'State' },
  home_twon_city   : { required: true, label: 'City' },
  home_twon_country: { required: true, label: 'Country' },
  email            : { required: true, label: 'City' }
  
};

const mapDispatchToProps = dispatch => ({
  addData            : data => dispatch(addDoctor(data)),
  getData            : id => dispatch(getDoctor(id)),
  updateData         : data => dispatch(updateDoctor(data)),
  resetForm          : () => dispatch(resetDoctorForm()),
  getAllRoles        : ()=>dispatch(getRoles()),
  getAllGenericValues: page => dispatch(getGenericValuesList(page)),
});

const mapStateToProps = createStructuredSelector({
  initialValues   : selectDoctorData(),
  formValues      : selectDoctorFormValues(),
  roles           : selectRoles(),
  allGenericValues: selectGenericValuesList()

});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form              : 'doctorRegistrationForm',
    fields            : validateFields,
    enableReinitialize: true,
    validate,
  }),
)(DoctorRegistration);
