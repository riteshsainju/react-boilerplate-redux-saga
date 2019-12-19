import React from 'react';
import PropTypes, { bool } from 'prop-types';
import { Field } from 'redux-form';

import { TextField, SelectField } from 'commons/Forms/InputField';
import { DateField } from 'commons/Forms';
import Checkbox from 'commons/Forms/Checkbox';
import Radio from 'commons/Forms/Radio';

import { PrimaryButton } from 'commons/Buttons';
import Row from 'commons/Forms/Row';
import { PageHeader } from 'commons/Style';
import { SubHeader, FormWrapper, SubFormWrapper } from 'commons/Style/FormStyle';

const Form = ({ handleFormSubmit, handleSubmit, disabled, history, formType }) => {
  const gender = [
    { key: 'male', label: 'Male' },
    { key: 'female', label: 'Female' },
    { key: 'other', label: 'Other' },
  ];
  const states = [
    { value: 'province1', label: 'Province 1' },
    { value: 'province2', label: 'Province 2' },
    { value: 'province3', label: 'Province 3' },
    { value: 'province4', label: 'Province 4' },
    { value: 'province5', label: 'Province 5' },
    { value: 'province6', label: 'Province 6' },
    { value: 'province7', label: 'Province 7' },
  ];

  const departments = [
    { value: '1', label: 'Emergency' },
    { value: '2', label: 'Cardiology' },
    { value: '3', label: 'Neurology' },
    { value: '4', label: 'ICU' },
  ];
  
  const specializations = [
    { value: '1', label: 'Physician' },
    { value: '2', label: 'Cardiologist' },
    { value: '3', label: 'NeuroSurgeon' },
    { value: '4', label: 'Therapist' },
  ];
  

  return (
    <>
      <PageHeader>{formType} Doctor</PageHeader>
      <FormWrapper>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <SubHeader>Generic Informations</SubHeader>
          <SubFormWrapper>
            <Row>
              <Field name="first_name" type="text" label="First Name" component={TextField} required />
              <Field name="middle_name" type="text" label="Middle Name" component={TextField} />
              <Field name="last_name" type="text" label="Last Name" component={TextField} required />
            </Row>
            <Row>
              <Field
                id="gender"
                name="gender"
                label="Gender"
                className="input-field"
                component={Radio}
                margin="normal"
                options={gender}
                css={{ display: 'inline' }}
              />
            </Row>
            <Row>
              <Field name="date_of_birth" maxDate={new Date()} component={DateField} label="Date of Birth" required />
            </Row>
            <Row><Field
              name="department"
              type="text"
              label="Department"
              component={SelectField}
              options={departments}
              css={{ width: '200px' }}
              required
            />
            <Field
              name="specialization"
              type="text"
              label="Specialization"
              component={SelectField}
              options={specializations}
              css={{ width: '200px' }}
              required
            /></Row>
            <Row>
              <Field name="degree" type="text" label="Degree" component={TextField} required />
              <Field name="charge" type="number" label="Charge" component={TextField} required />
            </Row>
          </SubFormWrapper>
          <SubFormWrapper>
            <SubHeader>Home Address Informations</SubHeader>
            <Row>
              <Field
                name="home_twon_state"
                type="text"
                label="State"
                component={SelectField}
                options={states}
                css={{ width: '200px' }}
                required
              />
              <Field name="home_twon_address" type="text" label="Address" component={TextField} required />
            </Row>
            <Row>
              <Field name="home_twon_city" type="text" label="City" component={TextField} required />
              <Field name="home_twon_country" type="text" label="Country" component={TextField} required />
            </Row>
          </SubFormWrapper>
          <SubFormWrapper>
            <SubHeader>Office Address Informations</SubHeader>
            <Row>
              <Field
                name="office_state"
                type="text"
                label="State"
                component={SelectField}
                options={states}
                css={{ width: '200px' }}
                required
              />
              <Field name="office_address" type="text" label="Address" component={TextField} required />
            </Row>
            <Row>
              <Field name="office_city" type="text" label="City" component={TextField} required />
              <Field name="office_country" type="text" label="Country" component={TextField} required />
            </Row>
          </SubFormWrapper>
          <SubFormWrapper>
            <SubHeader>Other Informations</SubHeader>
            <Row>
              <Field name="email" label="Email" component={TextField} required />
            </Row>
            <Row>
              <Field name="mobile_number" label="Mobile" component={TextField} required />
              <Field name="phone_number" label="Phone" component={TextField} />
            </Row>

          </SubFormWrapper>
          <Row>
            <Field name="create_user" component={Checkbox} label="Create User" />
          </Row>
          <PrimaryButton type="submit" disabled={disabled} variant="contained" color="primary">
            Save
          </PrimaryButton>
          {/* <PrimaryButton
            onClick={() => {
              history.goBack();
            }}
            variant="contained"
          >
            Cancel
          </PrimaryButton> */}
        </form>
      </FormWrapper>
    </>
  );
};

Form.propTypes = {
  disabled        : bool,
  handleFormSubmit: PropTypes.func.isRequired,
  handleSubmit    : PropTypes.func.isRequired,
};

export default Form;
