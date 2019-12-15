import styled from 'styled-components';
import { TableBody } from '@material-ui/core';

export const TableWrapper = styled.div`
  padding: 15px;
`;
export const CustomTableBody = styled(TableBody)`
  td {
    padding: 0 0 0 19px;
    font-size: 14px;
    line-height: 17px;
    word-break: break-word;
  }
`;

export const CardText = styled.span`
  margin: 5px 0 0 2px;
`;

export const Footer = styled.div`
  padding: 15px 10px;
  display: flex;
  justify-content: flex-end;
`;
