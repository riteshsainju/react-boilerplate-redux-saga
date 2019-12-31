import React from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const ComboBox = ({ input: { value, ...inputProps },placeholder, style, css, label, options, defaultValue, meta: { touched, error }, ...rest }) => {
  const selectedValue = options.find(o => o.value === value) ? options.find(o => o.value === value).label : null
  const handleChange = e =>{
    e.preventDefault();
    const option = options.find(o => o.label === e.target.innerText)
    if (option) {
      inputProps.onChange(option.value)
    }else{
      inputProps.onChange(null)
    }
  }

  return (
    <Autocomplete
      style={style}
      options={options}
      value={defaultValue || selectedValue}
      onChange={handleChange}
      getOptionLabel={option => {
        return(option.label? option.label:option)}}
      renderInput={params => (
        <TextField {...params} label={label} variant="outlined" fullWidth />
      )}
    />
  );
}

export default ComboBox
