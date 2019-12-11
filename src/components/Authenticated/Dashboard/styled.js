import styled from 'styled-components';
import theme from 'constants/theme';

export const MenuTab = styled.div`
  border: 2px solid ${theme.color.primary};
  height: 200px;
  width: 250px;
  background: ${theme.color.primaryLight};
`;

export const MenuText = styled.div`
  color: ${theme.color.primary};
  font-size: 30px;
  vertical-align: middle;
  text-align: center;
  line-height: 200px;
  cursor: pointer;
`;
