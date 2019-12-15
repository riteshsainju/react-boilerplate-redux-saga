import React from 'react';
import styled from 'styled-components';
import { Table, TableCell, TableRow } from '@material-ui/core';
import theme from 'constants/theme';

export const MainTable = styled(Table)`
  && {
    font-family: Lato;
    thead {
      span {
        flex: 1;
        padding: 7px 10px;
      }
      th {
        padding: 10px;
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;
        margin-top: 0px;
        border-bottom: 2px solid #d7d7d7;
      }
    }
    tbody {
      td {
        padding: 10px;
        font-size: 14px;
        line-height: 17px;
      }
      padding: 13px;
      tr {
        cursor: pointer;
        :hover {
          background: ${theme.color.grid.secondary};
        }
      }
    }
  }
`;

const EmptyTableInfo = styled.div`
  color: var(--lighterGrey);
  font-size: 14px;
  position: relative;
`;

export const CenterAlignedTable = styled(TableCell)`
  text-align: center !important;
`;

export const ClickableTableRow = styled(TableRow)`
  cursor: pointer;
  :hover {
    background: var(--lightestGrey);
  }
`;

type Props = {
  message: string,
};

export const CenterEmptyTable = ({ message, colSpan }: { message: string, colSpan: number }) => (
  <TableRow>
    <CenterAlignedTable colSpan={colSpan || 100}>
      <EmptyTableInfo>{message || ' No Data Available '}</EmptyTableInfo>
    </CenterAlignedTable>
  </TableRow>
);

export const EmptyTable = ({ message }: Props) => <EmptyTableInfo>{message || ' No Data Available '}</EmptyTableInfo>;

export const ActionCell = styled(TableCell)`
  width: 50px;
`;
