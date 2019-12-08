import React from 'react';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';

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

const GTextField = ({ input, placeholder, label, shrink, rows, style, meta: { touched, error }, ...rest }) => (
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
  />
);

export default GTextField;
