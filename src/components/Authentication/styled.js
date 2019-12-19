import styled from 'styled-components';
import theme from 'constants/theme';
import LogoIcon from 'assets/icons/logo.svg';

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translate(-50%, -50%);

`;
export const FormWrapper = styled.div`
text-align: center;
padding: 40px 60px;
border: 1px solid ${theme.color.loginPanel.border};
background: ${theme.color.white};
`
export const HeaderText = styled.div`
  font-size: 25px;
  font-weight: bold;
  font-family: sans-serif;
`;

export const ButtonWrapper = styled.div``;

export const Logo = styled.div`
  background: url(${LogoIcon}) no-repeat 1px 0px;
  height:50px;
  width: 130px;
  padding: 8px;
  margin: 0 auto;
`;
