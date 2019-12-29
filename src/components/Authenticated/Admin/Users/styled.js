import styled from 'styled-components'

// import { TableCell } from '@material-ui/core';

export const StatusCell = styled.div`
color: ${props=>props.status === 'active' ? 'green' : 'red'};
padding: 5px 12px;
`
