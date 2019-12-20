import React from 'react';
import PropTypes, { bool } from 'prop-types';
import { Field } from 'redux-form';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { TextField, SelectField } from 'commons/Forms/InputField';
import { DateField } from 'commons/Forms';
import Checkbox from 'commons/Forms/Checkbox';
import Radio from 'commons/Forms/Radio';

import { PrimaryButton } from 'commons/Buttons';
import Row from 'commons/Forms/Row';
import { PageHeader } from 'commons/Style';
import { FormWrapper, SubFormWrapper } from 'commons/Style/FormStyle';
import { GExpansionPanel as ExpansionPanel ,GExpansionPanelDetails as ExpansionPanelDetails,GExpansionPanelSummary as ExpansionPanelSummary } from 'commons/Panels'
import { Roles } from 'components/Authenticated/Admin/constants'

const Form = ({ handleFormSubmit, handleSubmit, disabled, history, formType, formValues }) => {
  const gender = [
    { key: 'male', label: 'Male' },
    { key: 'female', label: 'Female' },
    { key: 'other', label: 'Other' },
  ];
  const departments = [
    { value: '1', label: 'Emergency' },
    { value: '2', label: 'Cardiology' },
    { value: '3', label: 'Neurology' },
    { value: '4', label: 'ICU' },
  ];
  

  const states = [
    { value: '1', label: 'Province 1' },
    { value: '2', label: 'Province 2' },
    { value: '3', label: 'Province 3' },
    { value: '4', label: 'Province 4' },
    { value: '5', label: 'Province 5' },
    { value: '6', label: 'Province 6' },
    { value: '7', label: 'Province 7' },
  ];

  const [expanded, setExpanded] = React.useState({ 'panel1': true,'panel2': true,'panel3': true,'panel4': true, 'panel5': true });

  const handleChange = panel => (event, data) => {
    setExpanded({ ...expanded,[panel]: (!expanded[panel]) });
  };

  return (
    <>
      <PageHeader>{formType} Employee</PageHeader>
      <FormWrapper>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <ExpansionPanel expanded={expanded.panel1} onChange={handleChange('panel1')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
            >
              Personal Informations
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>          <SubFormWrapper>
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
              <Row>
                <Field
                  name="department"
                  type="text"
                  label="Department"
                  component={SelectField}
                  options={departments}
                  required
                />
              </Row>

            </SubFormWrapper>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded.panel2} onChange={handleChange('panel2')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
            >
              Contact Informations
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <SubFormWrapper>
                <Row>
                  <Field name="email" label="Email" component={TextField} required />
                </Row>
                <Row>
                  <Field name="mobile_number" label="Mobile" component={TextField} required />
                  <Field name="phone_number" label="Phone" component={TextField} />
                </Row>
              </SubFormWrapper>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded.panel3} onChange={handleChange('panel3')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
            >
              Home Address Informations
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <SubFormWrapper>
                <Row>
                  <Field
                    name="home_twon_state"
                    type="text"
                    label="State"
                    component={SelectField}
                    options={states}
                    required
                  />
                  <Field name="home_twon_address" type="text" label="Address" component={TextField} required />
                </Row>
                <Row>
                  <Field name="home_twon_city" type="text" label="City" component={TextField} required />
                  <Field name="home_twon_country" type="text" label="Country" component={TextField} required />
                </Row>
              </SubFormWrapper>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded.panel4} onChange={handleChange('panel4')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
            >
              Office Address Informations
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <SubFormWrapper>
                <Row>
                  <Field
                    name="office_state"
                    type="text"
                    label="State"
                    component={SelectField}
                    options={states}
                    required
                  />
                  <Field name="office_address" type="text" label="Address" component={TextField} required />
                </Row>
                <Row>
                  <Field name="office_city" type="text" label="City" component={TextField} required />
                  <Field name="office_country" type="text" label="Country" component={TextField} required />
                </Row>
              </SubFormWrapper>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded.panel5} onChange={handleChange('panel5')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
            >
              User Settings
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <SubFormWrapper>
                <Row>
                  <Field name="create_user" component={Checkbox} label="Create User" />
                </Row>
                {formValues.create_user && <Row>
                  <Field
                    name="roles"
                    type="text"
                    label="Roles"
                    component={SelectField}
                    options={Roles}
                    required
                  />
                </Row>}
              </SubFormWrapper>
            </ExpansionPanelDetails>
          </ExpansionPanel>
    
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
