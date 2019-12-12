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
    console.log(patients);
    return (
      <div style={styles.container}>
        {patients && patients.length > 0 && (
          <MainTable>
            <TableHead>
              <TableRow>
                <TableCell>Registration Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>D.O.B</TableCell>
                <TableCell>Mobile Number</TableCell>
                <TableCell>Admission Date</TableCell>

                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {' '}
              {patients.map(
                (
                  {
                    id,
                    registration_id,
                    first_name,
                    last_name,
                    gender,
                    municipality,
                    ward,
                    date_of_birth,
                    mobile_number,
                    created_at,
                  },
                  i,
                ) => (
                  <TableRow key={id}>
                    <TableCell>{registration_id}</TableCell>
                    <TableCell>
                      {first_name} {last_name}
                    </TableCell>
                    <TableCell>
                      {municipality} {ward}
                    </TableCell>
                    <TableCell>{gender}</TableCell>
                    <TableCell>{date_of_birth}</TableCell>
                    <TableCell>{mobile_number}</TableCell>
                    <TableCell>{created_at.split(' ')[0]}</TableCell>
                  </TableRow>
                ),
              )}
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
