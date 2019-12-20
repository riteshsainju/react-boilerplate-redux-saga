import React from 'react';
import PropTypes, { bool } from 'prop-types';
import { Field } from 'redux-form';

import { TextField, PasswordField } from 'commons/Forms/InputField';
import Checkbox from 'commons/Forms/Checkbox';
import Row from 'commons/Forms/Row';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import { Container, HeaderText, ButtonWrapper, Logo, FormWrapper,TextBoxIcon,Lock, LoginButton,BottomText } from '../styled';

const LoginForm = ({ handleFormSubmit, handleSubmit, disabled, goto }) => {
  return (
    <Container>
      <Logo />
      <FormWrapper>
        <HeaderText><Lock />Sign In</HeaderText>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Row>
            <Field
            
              name="email"
              type="email"
              label="Email Address"
              component={TextField}    
              InputProps={{
                endAdornment: <InputAdornment position="end"><TextBoxIcon><PersonIcon /></TextBoxIcon></InputAdornment>
              }} 
              fullWidth />
          </Row>
          <Row>
            <Field name="password" label="Password" component={PasswordField} fullWidth />
          </Row>
          <Row>
            <Field name="remember_me" component={Checkbox} label="Remember me?" />
          </Row>
          <ButtonWrapper>
            <LoginButton type="submit" disabled={disabled} >
            Login
            </LoginButton>
          </ButtonWrapper>
        </form>
        <BottomText onClick={()=>goto('/auth/forgot-password')}>Forget Password?</BottomText>
      </FormWrapper>
    </Container>

  );
};

LoginForm.propTypes = {
  disabled        : bool,
  handleFormSubmit: PropTypes.func.isRequired,
  handleSubmit    : PropTypes.func.isRequired,
};

export default LoginForm;
