import React, { useState } from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import dateFnsFormat from 'date-fns/format';

const DateField = props => {
  const {
    meta: { submitting },
    input: { onBlur, value, ...inputProps },
    ...others
  } = props;

  const initializeDate = val => {
    return val ? new Date(val) : new Date();
  };

  const [selectedDate, handleDateChange] = useState(initializeDate(value));

  const onChange = date => {
    handleDateChange(date);
    Date.parse(date) ? inputProps.onChange(dateFnsFormat(date, 'yyyy/MM/dd')) : inputProps.onChange(null);
  };

  return (
    <KeyboardDatePicker
      {...inputProps}
      {...others}
      format="dd/MM/yyyy"
      disabled={submitting}
      value={selectedDate}
      onChange={date => onChange(date)}
    />
  );
};

export default DateField;
