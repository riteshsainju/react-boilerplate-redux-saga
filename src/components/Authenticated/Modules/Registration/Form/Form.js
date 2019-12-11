import React from 'react';
import PropTypes, { bool } from 'prop-types';
import { Field } from 'redux-form';

import { TextField, SelectField } from 'commons/Forms/InputField';
import { DateField, TimeField } from 'commons/Forms';
import Checkbox from 'commons/Forms/Checkbox';
import Radio from 'commons/Forms/Radio';

import { PrimaryButton } from 'commons/Buttons';
import Row from 'commons/Forms/Row';
import { Container } from 'components/Authenticated/styled';
import { PageHeader } from 'commons/Style';
import { Label, SubHeader, FormWrapper, SubFormWrapper } from '../styled';

const Registration = ({ handleFormSubmit, handleSubmit, disabled }) => {
  const gender = [
    { key: 'male', label: 'Male' },
    { key: 'female', label: 'Female' },
    { key: 'others', label: 'Others' },
  ];
  const states = [
    { value: 'province_1', label: 'Province 1' },
    { value: 'province_2', label: 'Province 2' },
    { value: 'province_3', label: 'Province 3' },
    { value: 'province_4', label: 'Province 4' },
    { value: 'province_5', label: 'Province 5' },
    { value: 'province_6', label: 'Province 6' },
    { value: 'province_7', label: 'Province 7' },
  ];
  return (
    <Container>
      <PageHeader>New Patient</PageHeader>
      <FormWrapper>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <SubHeader>Generic Informations</SubHeader>
          <SubFormWrapper>
            <Row>
              <Label>Patient Name*</Label>
              <Field name="first_name" type="text" label="First Name" component={TextField} required />
              <Field name="middle_name" type="text" label="Middle Name" component={TextField} />
              <Field name="last_name" type="text" label="Last Name" component={TextField} required />
            </Row>
            <Row>
              <Label>Gender*</Label>
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
              <Label>Date of Birth*</Label>
              <Field name="date_of_birth" component={DateField} label="Date of Birth" />
              <Field name="estimated" component={Checkbox} label="Estimated" />
              <Label>Birth Time</Label>
              <Field name="time_of_birth" component={TimeField} label="Time" />
            </Row>
          </SubFormWrapper>
          <SubFormWrapper>
            <SubHeader>Address Informations</SubHeader>
            <Row>
              <Label>State*</Label>
              <Field
                name="address.state"
                type="text"
                label="State"
                component={SelectField}
                options={states}
                css={{ width: '200px' }}
                required
              />
              <Label>District*</Label>
              <Field name="address.district" type="text" label="District" component={TextField} required />
            </Row>
            <Row>
              <Label>City*</Label>
              <Field name="address.city" type="text" label="City" component={TextField} required />
              <Label>Street*</Label>
              <Field name="address.street" type="text" label="Street" component={TextField} required />
            </Row>
          </SubFormWrapper>
          <SubFormWrapper>
            <SubHeader>Other Informations</SubHeader>
            <Row>
              <Label>Phone</Label>
              <Field name="phone_number" label="Phone" component={TextField} />
              <Label>Mobile*</Label>
              <Field name="mobile_number" label="Mobile" component={TextField} />
            </Row>
            <Row>
              <Label>Ocupation</Label>
              <Field name="occupation" type="text" label="Occupation" component={TextField} />
            </Row>
            <Row>
              <Label>Caste</Label>
              <Field name="caste" type="text" label="caste" component={TextField} />
            </Row>
          </SubFormWrapper>
          <PrimaryButton type="submit" disabled={disabled} variant="contained" color="primary">
            Save
          </PrimaryButton>
        </form>
      </FormWrapper>
    </Container>
  );
};

Registration.propTypes = {
  disabled        : bool,
  handleFormSubmit: PropTypes.func.isRequired,
  handleSubmit    : PropTypes.func.isRequired,
};

export default Registration;
