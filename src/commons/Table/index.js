import React from 'react';
import styled from 'styled-components';
import { Table, TableCell, TableRow, TablePagination } from '@material-ui/core';

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
        background:${theme.color.grid.primary}
        color:${theme.color.white};
      }
    }
    tbody {
      border-bottom:1px solid ${theme.color.grid.secondary};
      td {
        padding: 10px;
        font-size: 14px;
        line-height: 10px;
        border-bottom:none
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

export const Pagination = styled(TablePagination)``

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

export const TableHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

export const TableHeader = styled.div`
  padding: 5px 0;
  font-size: 20px;
  color: ${theme.color.text.primary};
`;

export const TableWrapper = styled.div`
  box-shadow: 0 0px 0px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  padding:10px 20px;
  margin-bottom: 20px
`;
