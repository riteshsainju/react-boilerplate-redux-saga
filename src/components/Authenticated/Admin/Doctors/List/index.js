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
import { isEmpty } from 'utils';

// import DeleteDoctor from './deleteModal';
import { selectDoctorList, selectLoading, selectCurrentPage, selectTotal, selectRowsPerPage } from '../selectors';
import { getDoctorList, deleteDoctor } from '../actions';
import { Icon } from 'commons/Style/FormStyle';
import { DOCTORS } from 'constants/routes'

class DoctorList extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    dialogOpen: false,
    page: 0,
  };

  componentDidMount() {
    this.props.getDoctorList(1);
  }

  goto = url => {
    this.props.history.push(url);
  };

  openDialog = id => {
    this.setState({
      dialogOpen: true,
      selectedDoctorId: id,
    });
  };

  closeDialog = () => {
    this.setState({
      dialogOpen: false,
    });
  };

  handleDelete = id => {
    this.props.deleteDoctor(id);
    this.closeDialog();
  };

  handleChangePage = (event, newPage) => {
    this.props.getDoctorList(1 + newPage);
  };

  departments = [
    { value: '1', label: 'Emergency' },
    { value: '2', label: 'Cardiology' },
    { value: '3', label: 'Neurology' },
    { value: '4', label: 'ICU' },
  ];
  specializations = [
    { value: '1', label: 'Physician' },
    { value: '2', label: 'Cardiologist' },
    { value: '3', label: 'NeuroSurgeon' },
    { value: '4', label: 'Therapist' },
  ];

  getLabel(array,val){
    let filteredList = array.filter((item)=>item['value'] == val )
      return filteredList[0].label
      }

  render() {
    const { doctors, loading, currentPage, total, rowsPerPage } = this.props;
    const { dialogOpen, selectedDoctorId } = this.state;
    return (
      <div >
        <PopUp disableAutoFocus open={dialogOpen} onClose={this.closeDialog}>
          <DeleteModal
            id={selectedDoctorId}
            handleClose={this.closeDialog}
            handleDelete={this.handleDelete}
            headerText="Are you sure you want to delete?"
            bodyText="The entire data will be deleted."
          />
        </PopUp>
        <>
        <MainTable>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Specialization</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Degree</TableCell>
                <TableCell>Action</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {isEmpty(doctors) ? (
                <CenterEmptyTable message={loading ? 'Loading...' : 'No data available'} />
              ) : (
                doctors.map(
                  (
                    {
                      id,
                      first_name,
                      last_name,
                      home_twon_address,
                      specialization,
                      department,
                      degree,
                      mobile_number
                    },
                    i,
                  ) => (
                    <TableRow key={id} onClick={() => this.goto(`${DOCTORS.DOCTORS_ROUTE}/edit/${id}`)}>
                      <TableCell>{id}</TableCell>
                      <TableCell>{first_name} {last_name}</TableCell>
                      <TableCell>{home_twon_address}</TableCell>
                      <TableCell>{this.getLabel(this.specializations,specialization)}</TableCell>
                      <TableCell>{this.getLabel(this.departments,department)}</TableCell>
                      <TableCell>{degree}</TableCell>
                      <TableCell>{mobile_number}</TableCell>
                      <TableCell>
                        <Icon title="Edit">
                          <EditIcon onClick={() => this.goto(`${DOCTORS.DOCTORS_ROUTE}/edit/${id}`)}></EditIcon>
                        </Icon>
                        <Icon title="Delete">
                          <DeleteIcon
                            onClick={event => {
                              event.stopPropagation();
                              this.openDialog(id);
                            }}
                          ></DeleteIcon>
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
  doctors: selectDoctorList(),
  loading: selectLoading(),
  total: selectTotal(),
  currentPage: selectCurrentPage(),
  rowsPerPage: selectRowsPerPage(),
});

const mapDispatchToProps = dispatch => ({
  getDoctorList: page => dispatch(getDoctorList(page)),
  deleteDoctor: id => dispatch(deleteDoctor(id)),
});

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(DoctorList);
