import React, { useState } from 'react';
import { KeyboardDateTimePicker } from '@material-ui/pickers';

const DateTimeField = props => {
  const {
    meta: { submitting },
    input: { onBlur, value, ...inputProps },
    ...others
  } = props;
  const [selectedDate, handleDateChange] = useState(new Date());

  const onChange = date => {
    handleDateChange(date);
    Date.parse(date) ? inputProps.onChange(date.toISOString()) : inputProps.onChange(null);
  };

  return (
    <KeyboardDateTimePicker
      {...inputProps}
      {...others}
      format="yyyy/MM/dd hh:mm a"
      disabled={submitting}
      value={selectedDate}
      onChange={date => onChange(date)}
    />
  );
};

export default DateTimeField;
