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
import { Container } from 'components/Authenticated/styled';
import { PageHeader } from 'commons/Style';
import { GExpansionPanel as ExpansionPanel ,GExpansionPanelDetails as ExpansionPanelDetails,GExpansionPanelSummary as ExpansionPanelSummary } from 'commons/Panels'
import { Label, FormWrapper, SubFormWrapper } from '../styled';

const Registration = ({ handleFormSubmit, handleSubmit, disabled, history, formType }) => {
  const gender = [
    { key: 'male', label: 'Male' },
    { key: 'female', label: 'Female' },
    { key: 'other', label: 'Other' },
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
  const districts = [
    { value: '1', label: 'Kathmandu' },
    { value: '2', label: 'Bhaktapur' },
    { value: '3', label: 'Lalitpur' },
    { value: '4', label: 'Kavre' },
    { value: '5', label: 'Kirtipur' },
  ];

  const [expanded, setExpanded] = React.useState({ 'panel1': true,'panel2': true,'panel3': true,'panel4': true, 'panel5': true, });

  const handleChange = panel => (event, data) => {
    setExpanded({ ...expanded,[panel]: (!expanded[panel]) });
  };


  return (
    <Container>
      <PageHeader>{formType} Patient</PageHeader>
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
                  <Field name="date_of_birth" maxDate={new Date()} component={DateField} label="Date of Birth" required />
                  <Field name="estimated" component={Checkbox} label="Estimated" />
                  {/* <Label>Birth Time</Label>
              <Field name="time_of_birth" component={TimeField} label="Time" /> */}
                </Row>
              </SubFormWrapper>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded.panel2} onChange={handleChange('panel2')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
            >
              Address Informations
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <SubFormWrapper>
                <Row>
                  <Label>State*</Label>
                  <Field
                    name="state_id"
                    type="text"
                    label="State"
                    component={SelectField}
                    options={states}
                    required
                  />
                  <Label>District*</Label>
                  <Field
                    name="district_id"
                    type="text"
                    label="District"
                    component={SelectField}
                    options={districts}
                    required
                  />
                </Row>
                <Row>
                  <Label>Municipality*</Label>
                  <Field name="municipality" type="text" label="Municipality" component={TextField} required />
                  <Label>Ward*</Label>
                  <Field name="ward" type="text" label="Ward" component={TextField} required />
                </Row>
              </SubFormWrapper>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded.panel3} onChange={handleChange('panel3')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
            >
              Other Informations
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <SubFormWrapper>
                <Row>
                  <Label>Mobile*</Label>
                  <Field name="mobile_number" label="Mobile" component={TextField} required />
                  <Label>Phone</Label>
                  <Field name="phone_number" label="Phone" component={TextField} />
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
    </Container>
  );
};

Registration.propTypes = {
  disabled        : bool,
  handleFormSubmit: PropTypes.func.isRequired,
  handleSubmit    : PropTypes.func.isRequired,
};

export default Registration;
