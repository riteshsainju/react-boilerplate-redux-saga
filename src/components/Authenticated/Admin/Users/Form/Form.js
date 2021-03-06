import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { humanize } from 'utils'
import Checkbox from 'commons/Forms/Checkbox';
import Switch from 'commons/Forms/Switch';

import { PrimaryButton, SecondaryButton } from 'commons/Buttons';
import Row from 'commons/Forms/Row';

const Form = ({ handleFormSubmit, handleSubmit, handleCancel, selectedRoles, handleCheckbox, roles, user, disabled, handleSwitch, status }) => {
  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Row>
          <p>Name:</p> <p>{user.name}</p>
        </Row>
        <Row>
          <p>Email:</p> <p>{user.email}</p>
        </Row>
        <Row>
          <p>Status:</p>
          <Field
            id="status"
            name="status"
            label="Active"
            component={Switch}
            onChange={handleSwitch}
            checked={status}
          />
        </Row>
        <Row>
          <p>Select Roles*</p>
        </Row>
        <Row>
          {roles.map(item => <Field
            id={item.id.toString()}
            name={item.role_name}
            label={humanize(item.role_name)}
            component={Checkbox}
            key={item.id}
            onClick={handleCheckbox}
            checked={selectedRoles.includes(item.id.toString())}
          />)}
        </Row>
    
        <PrimaryButton type="submit" disabled={disabled} variant="contained" color="primary">
            Save
        </PrimaryButton>
        <SecondaryButton onClick={()=>handleCancel()} variant="contained">
            cancel
        </SecondaryButton>
      </form>
    </>
  );
};

Form.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  handleSubmit    : PropTypes.func.isRequired,
};

export default Form;
