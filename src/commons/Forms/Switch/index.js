import React from 'react';
import { Switch, FormControlLabel } from '@material-ui/core';
import styled from 'styled-components';

export const SettingsSwitch = styled(FormControlLabel)`
  flex-direction: row;
  && > span {
    color: ${props => (props.active ? 'var(--textBlack)' : '#8894a2')};
  }
`;

const GSwitchField = ({ input, checked, label, style, ...rest }) => (
  <>
    <SettingsSwitch
      label={label}
      style={style}
      control={
        <Switch
          onChange={input.onChange}
          color="primary"
          name={input.name}
          // eslint-disable-next-line no-unneeded-ternary
          checked={checked}
        />
      }
      active={`${input.value}`}
      {...rest}
    />
  </>
);

export default GSwitchField;
