import React from 'react';
import PropTypes, { bool } from 'prop-types';
import { Field } from 'redux-form';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { TextField, SelectField } from 'commons/Forms/InputField';
import { DateField } from 'commons/Forms';
import Radio from 'commons/Forms/Radio';
import { PrimaryButton } from 'commons/Buttons';
import Row from 'commons/Forms/Row';
import { PageHeader } from 'commons/Style';
import { FormWrapper, SubFormWrapper } from 'commons/Style/FormStyle';
import { GExpansionPanel as ExpansionPanel ,GExpansionPanelDetails as ExpansionPanelDetails,GExpansionPanelSummary as ExpansionPanelSummary } from 'commons/Panels'
import Checkbox from 'commons/Forms/Checkbox';
import { humanize } from 'utils'

const Form = ({ handleFormSubmit, handleSubmit, disabled, history, formType, formValues,
  selectedRoles, handleCheckbox, roles, department, specialization }) => {
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

  // const departments = [
  //   { value: '1', label: 'Emergency' },
  //   { value: '2', label: 'Cardiology' },
  //   { value: '3', label: 'Neurology' },
  //   { value: '4', label: 'ICU' },
  // ];
  
  // const specializations = [
  //   { value: '1', label: 'Physician' },
  //   { value: '2', label: 'Cardiologist' },
  //   { value: '3', label: 'NeuroSurgeon' },
  //   { value: '4', label: 'Therapist' },
  // ];

  
  const [expanded, setExpanded] = React.useState({ 'panel1': true,'panel2': true,'panel3': true,'panel4': true, 'panel5': true, });

  const handleChange = panel => (event, data) => {
    setExpanded({ ...expanded,[panel]: (!expanded[panel]) });
  };

  return (
    <>
      <PageHeader>{formType} Doctor</PageHeader>
      <FormWrapper>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <ExpansionPanel expanded={expanded.panel1} onChange={handleChange('panel1')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
            >
              Personal Informations
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <SubFormWrapper>
                <Row>
                  <Field name="first_name" type="text" label="First Name*" component={TextField} />
                  <Field name="middle_name" type="text" label="Middle Name" component={TextField} />
                  <Field name="last_name" type="text" label="Last Name*" component={TextField} />
                </Row>
                <Row>
                  <Field
                    id="gender"
                    name="gender"
                    label="Gender*"
                    className="input-field"
                    component={Radio}
                    margin="normal"
                    options={gender}
                    css={{ display: 'inline' }}
                  />
                </Row>
                <Row>
                  <Field name="date_of_birth" maxDate={new Date()} component={DateField} label="Date of Birth*" />
                </Row>
                <Row><Field
                  name="department"
                  type="text"
                  label="Department*"
                  component={SelectField}
                  options={department}

                  // css={{ width: '200px' }}
                />
                <Field
                  name="specialization"
                  type="text"
                  label="Specialization*"
                  component={SelectField}
                  options={specialization}
                /></Row>
                <Row>
                  <Field name="degree" type="text" label="Degree*" component={TextField} />
                  <Field name="charge" type="number" label="Charge*" component={TextField} />
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
                  <Field name="email" label="Email*" component={TextField} />
                </Row>
                <Row>
                  <Field name="mobile_number" label="Mobile*" component={TextField} />
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
                    label="State*"
                    component={SelectField}
                    options={states}
                  />         
                  <Field name="home_twon_address" type="text" label="Address*" component={TextField} />
                </Row>
                <Row>
                  <Field name="home_twon_city" type="text" label="City*" component={TextField} />
                  <Field name="home_twon_country" type="text" label="Country*" component={TextField} />
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
                  />
                  <Field name="office_address" type="text" label="Address" component={TextField} />
                </Row>
                <Row>
                  <Field name="office_city" type="text" label="City" component={TextField} />
                  <Field name="office_country" type="text" label="Country" component={TextField} />
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
                <p>Select Roles*</p>
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
