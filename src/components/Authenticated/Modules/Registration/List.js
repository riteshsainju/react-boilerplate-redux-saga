/*eslint-disable*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { MainTable } from 'commons/Table';
import { TableCell, TableHead, TableRow, TableBody } from '@material-ui/core';
import { selectPatientList } from './selectors';
import { getPatientList } from './actions';

import styles from './styled';

class PatientList extends Component {
  componentDidMount() {
    this.props.getPatientList();
  }

  render() {
    const { patients } = this.props;
    return (
      <div style={styles.container}>
        {patients && patients.length > 0 && (
          <MainTable>
            <TableHead>
              <TableRow>
                {/* <TableCell>Current</TableCell> */}
                <TableCell>id</TableCell>
                <TableCell>Name</TableCell>
                {/* <TableCell>Video</TableCell> */}
                <TableCell>Address</TableCell>
                {/* {canGiveFeedback(roles) && <TableCell>Feeback</TableCell>} */}
                <TableCell>phone</TableCell>

                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {' '}
              {patients.map(({ id, name, phone, address }, i) => (
                <TableRow key={id}>
                  <TableCell>{id}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>
                    {address.street}, {address.city}
                  </TableCell>
                  <TableCell>{phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </MainTable>
        )}
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  patients: selectPatientList(),
});

const mapDispatchToProps = dispatch => ({
  getPatientList: () => dispatch(getPatientList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);
