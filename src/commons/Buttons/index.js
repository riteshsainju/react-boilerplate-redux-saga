import styled from 'styled-components';
import { Button } from '@material-ui/core';
import theme from 'constants/theme'

export const PrimaryButton = styled(Button)`
  && {
    height: 35px;
    color: #fff;
    background: ${props => (props.disabled ? 'lightgray' : '#1078ba')};

  }
`;

export const SecondaryButton = styled(Button)`
  && {
    margin: 10px;
    height: 35px;
    background:  ${theme.color.white};
    color: ${theme.color.text.secondary}
  }
`;

export const ActionButton = styled(Button)`
  && {
    height: 22px;
    padding: 2px;
    font-size: 9px;
    margin: 0 2px;
    color: ${props => (props.delete? 'red' : 'orange')};
    border: 1px solid ${props => (props.delete? 'red' : 'orange')};
    :hover{
      font-size: 10px;
      border: 2px solid ${props => (props.delete? 'red' : 'orange')};
      background:white
    }
      background:white
  }
`;

