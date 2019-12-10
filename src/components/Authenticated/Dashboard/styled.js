import styled from 'styled-components';
import theme from 'constants/theme';

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const MenuTab = styled.div`
  margin: 10px;
  border: 1px solid ${theme.color.primary};
  height: 200px;
  width: 250px;
  background: ${theme.color.primaryLight};
  cursor: pointer;
  :hover {
    border: 2px solid ${theme.color.primary};
  }
`;

export const MenuText = styled.div`
  color: ${theme.color.primary};
  font-size: 30px;
  vertical-align: middle;
  text-align: center;
`;
