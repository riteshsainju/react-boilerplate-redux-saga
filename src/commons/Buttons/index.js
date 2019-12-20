import styled from 'styled-components';
import { Button } from '@material-ui/core';

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
    
  }
`;
