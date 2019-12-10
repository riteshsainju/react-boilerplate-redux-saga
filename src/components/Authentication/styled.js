import styled from 'styled-components';
import theme from 'constants/theme';

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 40px 60px;
  border: 1px solid ${theme.color.loginPanel.border};
  background: ${theme.color.white};
`;
export const HeaderText = styled.div`
  font-size: 25px;
  font-weight: bold;
  font-family: sans-serif;
`;

export const ButtonWrapper = styled.div``;
