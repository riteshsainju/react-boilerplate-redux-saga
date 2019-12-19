import React from 'react';
import PropTypes, { bool } from 'prop-types';
import { Field } from 'redux-form';

import { TextField, SelectField } from 'commons/Forms/InputField';

import { PrimaryButton, SecondaryButton } from 'commons/Buttons';
import Row from 'commons/Forms/Row';
import { PageHeader } from 'commons/Style';
import { GENERIC_VALUES } from 'constants/routes'
import { FormWrapper } from '../styled';

const GenericValues = ({ handleFormSubmit, handleSubmit, disabled, history, formType }) => {
  const states = [
    { value: 'state', label: 'State' },
    { value: 'district', label: 'District' },
  ];
  return (
    <>
      <PageHeader>{formType} Generic Values</PageHeader>
      <FormWrapper>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Row>
            <Field
              name="type"
              type="text"
              label="Field Type"
              component={SelectField}
              options={states}
              css={{ width: '200px' }}
              required
            />
            <Row>
              <Field name="title" type="text" label="Title" component={TextField} required />
            </Row>
          </Row>
          <PrimaryButton type="submit" disabled={disabled} variant="contained" color="primary">
            Save
          </PrimaryButton>
          <SecondaryButton
            onClick={e => {
              e.stopPropagation();

              history.push(`${GENERIC_VALUES.GENERIC_VALUES_ROUTE}`);
            }}
            variant="contained"
          >
            Cancel
          </SecondaryButton>
        </form>
      </FormWrapper>
    </>
  );
};

GenericValues.propTypes = {
  disabled        : bool,
  handleFormSubmit: PropTypes.func.isRequired,
  handleSubmit    : PropTypes.func.isRequired,
};

export default GenericValues;
