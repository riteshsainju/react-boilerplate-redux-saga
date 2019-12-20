import styled from 'styled-components';
import LogoIcon from 'assets/icons/logo.svg';
import LockIcon from '@material-ui/icons/Lock';
import { PrimaryButton } from 'commons/Buttons';
import theme from 'constants/theme';

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);

`;
export const FormWrapper = styled.div`
  text-align: center;
  padding: 30px 40px;
  box-shadow: 0 0px 0px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  border-radius: 10px;`

export const HeaderText = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: sans-serif;
  padding: 0 0 20px 0;
`;

export const ButtonWrapper = styled.div``;

export const Logo = styled.div`
  background: url(${LogoIcon}) no-repeat 1px 0px;
  height:50px;
  width: 130px;
  padding: 8px;
  margin: 0 auto;
`;

export const TextBoxIcon = styled.span`flex: 0 0 auto;
  color: rgba(0, 0, 0, 0.54);
  padding: 12px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;`

export const Lock = styled(LockIcon)`
  margin-bottom:-3px`;

export const LoginButton = styled(PrimaryButton)`
  width:100%`;

export const BottomText = styled.div`
  font-size: 14px;
  font-weight: bold;
  font-family: sans-serif
  color: ${theme.color.primary}
  text-align: left;
  padding: 10px 0 0 0;
  cursor:pointer;
  ;`
