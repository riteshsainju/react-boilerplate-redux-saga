import React, { useState } from 'react';
import { KeyboardTimePicker } from '@material-ui/pickers';
import Icon from '@material-ui/core/Icon';

const TimeField = props => {
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
    <KeyboardTimePicker
      {...inputProps}
      {...others}
      mask="__:__ _M"
      disabled={submitting}
      value={selectedDate}
      onChange={date => onChange(date)}
      keyboardIcon={<Icon>alarm</Icon>}
    />
  );
};

export default TimeField;
