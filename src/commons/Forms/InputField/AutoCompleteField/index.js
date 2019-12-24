import React from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const ComboBox = ({ input, placeholder, style, css, label, options, defaultValue, meta: { touched, error }, ...rest }) => {
  return (
    <Autocomplete
      options={options}
      getOptionLabel={option => {
        return(option.label? option.label:option)}}
      renderInput={params => (
        <TextField {...params} label={label} variant="outlined" fullWidth />
      )}
    />
  );
}

export default ComboBox
