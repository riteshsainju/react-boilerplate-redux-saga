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
import Form from './Form';
import { getUser, updateUser } from '../actions';

import { selectUserData } from '../selectors';

class UserForm extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedRoles: [],
    };
  }

  componentDidMount() {
    const {

      // computedMatch: {
      //   params: { id },
      // },
      id,
      getData,
      getAllRoles,
    } = this.props;
    getAllRoles();
    if (id) {
      getData(id);
    }
  }

  componentDidUpdate(prevProps) {
    const { selectedRoles } = this.state
    const { initialValues } = this.props
    if (prevProps.initialValues !== initialValues) {
      this.setState({
        selectedRoles: initialValues.roles
          ? initialValues.roles
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
    const item = event.target.name;
    const checkboxGroup = selectedRoles.includes(item) ? selectedRoles.filter(i => i !== item) : [...selectedRoles, item];
    this.setState({ selectedRoles: checkboxGroup });
  };

  handleFormSubmit = values => {
    const { updateData, id } = this.props;
    const { selectedRoles }= this.state
    if (id) {
      this.removeNullValues(values);
      this.props.handleClose()

      // updateData({ ...values, roles: selectedRoles });
    } 
  };

  handleCancel = () => {
    this.props.handleClose()
  };

  render() {
    const {
      handleSubmit,
      history,
      roles,
      initialValues
    } = this.props;
    const { selectedRoles } = this.state
    return (
      <Form
        handleFormSubmit={this.handleFormSubmit}
        handleSubmit={handleSubmit}
        handleCancel={this.handleCancel}
        disabled={isSubmitButtonDisabled(this.props)}
        history={history}
        selectedRoles={selectedRoles}
        handleCheckbox={this.handleCheckbox}
        roles={roles}
        user={initialValues}
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
  email            : { required: true, label: 'Email' }
};

const mapDispatchToProps = dispatch => ({
  getData    : id => dispatch(getUser(id)),
  updateData : data => dispatch(updateUser(data)),
  getAllRoles: ()=>dispatch(getRoles())
});

const mapStateToProps = createStructuredSelector({
  initialValues: selectUserData(),
  roles        : selectRoles()
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form              : 'userEditForm',
    fields            : validateFields,
    enableReinitialize: true,
    validate,
  }),
)(UserForm);
