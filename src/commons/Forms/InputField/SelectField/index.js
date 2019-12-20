import React,{ useEffect,useState } from 'react';
import styled from 'styled-components';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

const CustomFormControl = styled(FormControl)`&&{
min-width: 228px}`
const GSelectField = ({
  css,
  input,
  label,
  multiple,
  options,
  disabled,
  renderValue,
  style,
  defaultValue,
  className,
  defaultText,
  meta: { touched, error },
  ...rest
}) => {
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  return(
    <CustomFormControl style={style || css || { flex: 1 }} className={className} variant="outlined">
      <InputLabel htmlFor="age-simple" ref={inputLabel} error={!!(touched && error)}>
        {label}
      </InputLabel>
      <Select
        onChange={event => input.onChange(event)}
        {...input}
        multiple={!!multiple}
        error={!!(touched && error)}
        disabled={disabled}
        renderValue={renderValue}
        value={defaultValue || input.value}
        labelWidth={labelWidth}

      >
        {options.length > 0 && defaultText && (
          <MenuItem>
            <em>{defaultText}</em>
          </MenuItem>
        )}
        {options.length > 0 ? (
          options.map(value => (
            <MenuItem value={value[Object.keys(value)[0]]} key={value[Object.keys(value)[0]]}>
              {value[Object.keys(value)[1]]}
            </MenuItem>
          ))
        ) : (
          <MenuItem> No data available </MenuItem>
        )}
      </Select>
      {touched && error && <FormHelperText error>{touched && error}</FormHelperText>}
    </CustomFormControl>
  )};

export default GSelectField;
