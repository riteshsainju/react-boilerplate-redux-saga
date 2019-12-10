import React from 'react';
import { FormControlLabel, Checkbox, FormControl, FormHelperText } from '@material-ui/core';

const GCheckbox = ({ input, label, options, meta: { touched, error }, ...rest }) => (
  <FormControl>
    <FormControlLabel
      control={<Checkbox checked={!!input.value} onChange={input.onChange} color="primary" />}
      label={label}
    />
    {touched && error && <FormHelperText error>{touched && error}</FormHelperText>}
  </FormControl>
);

export default GCheckbox;
