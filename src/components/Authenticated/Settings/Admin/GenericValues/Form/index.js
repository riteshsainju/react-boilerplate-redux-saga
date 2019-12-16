import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import validate from 'utils/validate';
import { isSubmitButtonDisabled } from 'utils';
import GenericValuesForm from './Form';

import { addGenericValues, getGenericValues, updateGenericValues, resetGenericValuesForm } from '../actions';
import { selectGenericValuesData } from '../selectors';

class GenericValues extends Component {
  componentDidMount() {
    const {
      computedMatch: {
        params: { id },
      },

      getData,
      resetForm,
    } = this.props;
    if (id) {
      getData(id);
    } else {
      resetForm();
    }
  }

  removeNullValues = obj => {
    for (const propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined) {
        delete obj[propName]; //eslint-disable-line
      }
    }
  };

  handleFormSubmit = async values => {
    const {
      computedMatch: {
        params: { id },
      },
      updateData,
      addData,
    } = this.props;

    if (id) {
      this.removeNullValues(values);
      updateData(values);
    } else addData(values);
  };

  render() {
    const {
      computedMatch: {
        params: { id },
      },
      handleSubmit,
      history,
    } = this.props;

    return (
      <GenericValuesForm
        handleFormSubmit={this.handleFormSubmit}
        handleSubmit={handleSubmit}
        disabled={isSubmitButtonDisabled(this.props)}
        history={history}
        formType={id ? 'Edit' : 'New'}
      />
    );
  }
}

const validateFields = {
  type : { required: true, label: 'Field Type' },
  title: { required: true, label: 'Title' },
};

const mapStateToProps = createStructuredSelector({
  initialValues: selectGenericValuesData(),
});

const mapDispatchToProps = dispatch => ({
  addData   : data => dispatch(addGenericValues(data)),
  getData   : id => dispatch(getGenericValues(id)),
  updateData: data => dispatch(updateGenericValues(data)),
  resetForm : () => dispatch(resetGenericValuesForm()),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form              : 'GenericValuesFormForm',
    fields            : validateFields,
    enableReinitialize: true,
    validate,
  }),
)(GenericValues);
