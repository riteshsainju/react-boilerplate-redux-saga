/*eslint-disable*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { MainTable } from 'commons/Table';
import { TableCell, TableHead, TableRow, TableBody } from '@material-ui/core';
import { selectPatientList } from './selectors';
import { getPatientList, deletePatient } from './actions';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import styles, { Icon } from './styled';

class PatientList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getPatientList();
  }

  goto = url => {
    this.props.history.push(url);
  };

  deletePatient = id => {
    this.props.deletePatient(id);
  };

  render() {
    const { patients } = this.props;
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
                <TableCell>Action</TableCell>
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
                  <TableRow key={id} onClick={() => this.goto('/registration/add-patient')}>
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
                    <TableCell>
                      <Icon>
                        <EditIcon onClick={() => this.goto('/registration/add-patient')}></EditIcon>
                      </Icon>
                      <Icon>
                        <DeleteIcon
                          onClick={event => {
                            event.stopPropagation();
                            this.deletePatient(id);
                          }}
                        ></DeleteIcon>
                      </Icon>
                    </TableCell>
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
  deletePatient: id => dispatch(deletePatient(id)),
});

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(PatientList);
// export default connect(mapStateToProps, mapDispatchToProps)(PatientList);
