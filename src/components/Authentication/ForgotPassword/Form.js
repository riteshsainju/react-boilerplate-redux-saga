import React from 'react';
import { Field } from 'redux-form';

import { TextField } from 'commons/Forms/InputField';
import Row from 'commons/Forms/Row';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import { Container, HeaderText, ButtonWrapper, Logo, FormWrapper,TextBoxIcon,Lock, LoginButton, FooterText, PrimaryColorText, CopyRightIcon } from '../styled';

const ForgotPasswordForm = ({ handleFormSubmit, handleSubmit, disabled, goto }) => {
  return (
    <Container>
      <Logo />
      <FormWrapper>
        <HeaderText><Lock />Forgot Password</HeaderText>
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
          <ButtonWrapper>
            <LoginButton type="submit" disabled={disabled} >
            Submit
            </LoginButton>
          </ButtonWrapper>
        </form>
      </FormWrapper>
      <FooterText>Copyright<CopyRightIcon /><PrimaryColorText>BalajuCityHospital</PrimaryColorText></FooterText>
    </Container>

  );
};

export default ForgotPasswordForm;
