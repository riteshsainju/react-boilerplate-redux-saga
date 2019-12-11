import React from 'react';
import { FormControlLabel, RadioGroup, Radio, FormControl, FormHelperText } from '@material-ui/core';

const GRadioButtonGroup = ({ input, label, options, meta: { touched, error }, ...rest }) => (
  <FormControl>
    <RadioGroup
      style={rest.css}
      aria-label={label}
      name={input.name}
      value={input.value}
      onChange={event => input.onChange(event)}
    >
      {options.length > 0 &&
        options.map((value, index) => (
          <FormControlLabel key={index} value={value.key} control={<Radio color="primary" />} label={value.label} />
        ))}
    </RadioGroup>
    {touched && error && <FormHelperText error>{touched && error}</FormHelperText>}
  </FormControl>
);

export default GRadioButtonGroup;
