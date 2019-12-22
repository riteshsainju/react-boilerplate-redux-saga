/*eslint-disable*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import { TableCell, TableHead, TableRow, TableBody } from '@material-ui/core';

import { MainTable, Pagination, CenterEmptyTable } from 'commons/Table';
import { PopUp } from 'commons/ModalStyle';
import DeleteModal from 'commons/ModalStyle/deleteModal';
import {ActionButton} from 'commons/Buttons'
import { isEmpty } from 'utils';

// import DeletePatient from './deleteModal';
import { selectPatientList, selectLoading, selectCurrentPage, selectTotal, selectRowsPerPage } from './selectors';
import { getPatientList, deletePatient } from './actions';
import styles, { Icon } from './styled';

class PatientList extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    dialogOpen: false,
    page: 0,
  };

  componentDidMount() {
    this.props.getPatientList(1);
  }

  goto = url => {
    this.props.history.push(url);
  };

  openDialog = id => {
    this.setState({
      dialogOpen: true,
      selectedPatientId: id,
    });
  };

  closeDialog = () => {
    this.setState({
      dialogOpen: false,
    });
  };

  handleDelete = id => {
    this.props.deletePatient(id);
    this.closeDialog();
  };

  handleChangePage = (event, newPage) => {
    this.props.getPatientList(1 + newPage);
  };

  render() {
    const { patients, loading, currentPage, total, rowsPerPage } = this.props;
    const { dialogOpen, selectedPatientId } = this.state;
    return (
      <div>
        <PopUp disableAutoFocus open={dialogOpen} onClose={this.closeDialog}>
          <DeleteModal
            id={selectedPatientId}
            handleClose={this.closeDialog}
            handleDelete={this.handleDelete}
            headerText="Are you sure you want to delete?"
            bodyText="The entire data for this patient will be deleted."
          />
        </PopUp>
        <>
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
              </TableRow>
            </TableHead>
            <TableBody>
              {isEmpty(patients) ? (
                <CenterEmptyTable message={loading ? 'Loading...' : 'No data available'} />
              ) : (
                patients.map(
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
                    <TableRow key={id} onClick={() => this.goto(`/registration/edit-patient/${id}`)}>
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
                        <Icon title="Edit">
                          {/* <EditIcon onClick={() => this.goto(`/registration/edit-patient/${id}`)}></EditIcon>
                        </Icon>
                        <Icon title="Delete">
                          <DeleteIcon
                            onClick={event => {
                              event.stopPropagation();
                              this.openDialog(id);
                            }}
                          ></DeleteIcon>
                        </Icon> */}
                          <ActionButton onClick={() => this.goto(`/registration/edit-patient/${id}`)}>Edit</ActionButton>
                          <ActionButton delete
                            onClick={event => {
                              event.stopPropagation();
                              this.openDialog(id);
                            }}
                          >Delete</ActionButton>
                        </Icon>
                      </TableCell>
                    </TableRow>
                  ),
                )
              )}
            </TableBody>
          </MainTable>
          <Pagination
            rowsPerPageOptions={[]}
            component="div"
            count={total}
            rowsPerPage={rowsPerPage}
            page={currentPage - 1}
            onChangePage={this.handleChangePage}
          />
        </>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  patients: selectPatientList(),
  loading: selectLoading(),
  total: selectTotal(),
  currentPage: selectCurrentPage(),
  rowsPerPage: selectRowsPerPage(),
});

const mapDispatchToProps = dispatch => ({
  getPatientList: page => dispatch(getPatientList(page)),
  deletePatient: id => dispatch(deletePatient(id)),
});

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(PatientList);
