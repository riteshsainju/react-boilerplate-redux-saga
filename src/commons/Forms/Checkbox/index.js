import React from 'react';
import { FormControlLabel, Checkbox, FormControl, FormHelperText } from '@material-ui/core';

const GCheckbox = ({ input, label, name, key, checked, onClick, meta: { touched, error }, ...rest }) => {
  console.log(input.name,'name')
  return(
    <FormControl>
      <FormControlLabel
        control={<Checkbox 
          id={input.id}
          name={input.name}

          // checked={!!input.value} 
          // onChange={input.onChange}
          checked={checked === undefined ? input.value : checked}
          onChange={e => {
            input && input.onChange(e);
            onClick && onClick(e);
          }}
          color="primary" />}
        label={label}
      />
      {touched && error && <FormHelperText error>{touched && error}</FormHelperText>}
    </FormControl>
  );
}

export default GCheckbox;
