import React from 'react';
import PropTypes, { bool } from 'prop-types';
import { Field } from 'redux-form';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { TextField, SelectField, AutoCompleteField } from 'commons/Forms/InputField';
import { DateField } from 'commons/Forms';

// import Checkbox from 'commons/Forms/Checkbox';
import Radio from 'commons/Forms/Radio';
import { PrimaryButton } from 'commons/Buttons';
import Row from 'commons/Forms/Row';
import { PageHeader } from 'commons/Style';
import { GExpansionPanel as ExpansionPanel ,GExpansionPanelDetails as ExpansionPanelDetails,GExpansionPanelSummary as ExpansionPanelSummary } from 'commons/Panels'
import { FormWrapper, SubFormWrapper } from '../styled';

const Registration = ({ handleFormSubmit, handleSubmit, disabled, history, formType, doctors, visitTypes, status,department }) => {
  const gender = [
    { key: 'male', label: 'Male' },
    { key: 'female', label: 'Female' },
    { key: 'other', label: 'Other' },
  ];

  const districts = [
    { value: '1', label: 'Kathmandu' },
    { value: '2', label: 'Bhaktapur' },
    { value: '3', label: 'Lalitpur' },
    { value: '4', label: 'Kavre' },
    { value: '5', label: 'Kirtipur' },
  ];

  const states = [
    { value: 1, label: 'Province 1' },
    { value: 2, label: 'Province 2' },
    { value: 3, label: 'Province 3' },
    { value: 4, label: 'Province 4' },
  ];

  const [expanded, setExpanded] = React.useState({ 'panel1': true,'panel2': true,'panel3': true,'panel4': true, 'panel5': true, });

  const handleChange = panel => (event, data) => {
    setExpanded({ ...expanded,[panel]: (!expanded[panel]) });
  };

  // const mapDropdownOptions = array =>{
  //   return array.map(item=> ({ 'value': item.id, 'label': item.name }))
  // }
  return (
    <>
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
                  {/* <Field name="estimated" component={Checkbox} label="Estimated" /> */}
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
                  <Field
                    name="state_id"
                    type="text"
                    label="State*"
                    component={SelectField}
                    options={states}
                  />
                  {/* <Field
                    name="state_id"
                    type="text"
                    label="Statesss*"
                    component={AutoCompleteField}
                    options={states}
                    defaultValue="Province 2"
                  /> */}
                  <Field
                    name="district_id"
                    type="text"
                    label="District*"
                    component={SelectField}
                    options={districts}
                  />
                </Row>
                <Row>
                  <Field name="municipality" type="text" label="Municipality*" component={TextField} />
                  <Field name="ward" type="text" label="Ward*" component={TextField} />
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
                  <Field name="mobile_number" label="Mobile*" component={TextField} />
                  <Field name="phone_number" label="Phone" component={TextField} />
                </Row>
                <Row>
                  <Field
                    name="doctor_id"
                    type="text"
                    label="Doctor*"
                    component={AutoCompleteField}
                    options={doctors.map(item=> ({ 'value': item.id, 'label': `${item.first_name} ${ item.last_name}` }))}
                    style={{ width: '200px' }}
                  />
                  <Field
                    name="visit_type"
                    type="text"
                    label="Visit Type*"
                    component={SelectField}
                    options={visitTypes.map(item=> ({ 'value': item.id, 'label': item.title }))}
                  />
                  <Field
                    name="status"
                    type="text"
                    label="Patient Status*"
                    component={SelectField}
                    options={status.map(item=> ({ 'value': item.id, 'label': item.title }))}

                    // defaultValue="1"
                  />
                </Row>
                <Row>
                  <Field
                    name="department"
                    type="text"
                    label="Department*"
                    component={SelectField}
                    options={department.map(item=> ({ 'value': item.id, 'label': item.title }))}

                    // defaultValue="1"
                  />
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

Registration.propTypes = {
  disabled        : bool,
  handleFormSubmit: PropTypes.func.isRequired,
  handleSubmit    : PropTypes.func.isRequired,
};

export default Registration;
