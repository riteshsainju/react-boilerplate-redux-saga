import React, { Component } from 'react';
import styled from 'styled-components';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const ErrorText = styled(FormHelperText)`
  && {
    color: #f44336;
  }
`;

const CustomInput = styled(Input)`
  &&:hover::before {
    border-bottom: 2px solid #d3d3d3 !important;
  }
`;

class GPasswordField extends Component {
  constructor() {
    super();
    this.state = {
      showPassword: false,
    };
  }

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  render() {
    const { showPassword } = this.state;
    const {
      input,
      label,
      required,
      meta: { touched, error },
      ...rest
    } = this.props;
    const colorOnError = {
      color: !!(touched && error) && '#f44336',
    };
    return (
      <>
        <FormControl>
          <InputLabel htmlFor={input.id} style={colorOnError}>
            {label}
          </InputLabel>
          <CustomInput
            error={!!(touched && error)}
            {...input}
            {...rest}
            type={showPassword ? 'text' : 'password'}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                >
                  {showPassword ? <Visibility style={colorOnError} /> : <VisibilityOff style={colorOnError} />}
                </IconButton>
              </InputAdornment>
            }
          />
          <ErrorText>{touched && error}</ErrorText>
        </FormControl>
      </>
    );
  }
}

export default GPasswordField;
