import styled from 'styled-components';
import theme from 'constants/theme';

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const MenuTab = styled.div`
  margin: 10px;
  border: 1px solid ${theme.color.secondary};
  height: 200px;
  width: 250px;
  background: ${theme.color.background.secondary};
  cursor: pointer;
  :hover {
    border: 2px solid ${theme.color.secondary};
  }
`;

export const MenuText = styled.div`
  color: ${theme.color.text.secondary};
  font-size: 30px;
  vertical-align: middle;
  text-align: center;
`;
