import React, { useState } from 'react';

import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const CustomTextField = styled(TextField)`
  && {
    ${({ textAreaBorder }) =>
    textAreaBorder
      ? `

    label {
      top: 5px !important;
      left: 5px !important;
    }

    textarea {
      border: 1px solid var(--lightGrey);
      padding: 5px;
      border-radius: 5px;
    }

    & > div {
      &::before {
        display:none;
      }
      &::after {
        display:none;
      }
    }

    & > div:hover {
      &::before {
        display:none;
      }
    }
    `
      : `
    & > div:hover {
      &::before {
        border-bottom: 2px solid #d3d3d3 !important;
      }
    }`};
  }
`;

const GPasswordField = ({ input, placeholder, label, shrink, rows, style, meta: { touched, error }, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };
  const colorOnError = {
    color: !!(touched && error) && '#f44336',
  };
  return (
    <CustomTextField
      label={label}
      rows={rows}
      style={style}
      InputLabelProps={{
        shrink,
      }}
      helperText={touched && error}
      error={!!(touched && error)}
      {...input}
      {...rest}
      placeholder={placeholder}
      type={showPassword ? 'text' : 'password'}
      variant="outlined"
      InputProps={{
        endAdornment: <InputAdornment position="end">    <IconButton
          onClick={handleClickShowPassword}
        >
          {showPassword ? <Visibility /> : <VisibilityOff style={colorOnError} />}
        </IconButton></InputAdornment>
      }}
    />
  )
};

export default GPasswordField;
