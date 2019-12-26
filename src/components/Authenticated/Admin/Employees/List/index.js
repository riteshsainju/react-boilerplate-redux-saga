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
import { EMPLOYEES } from 'constants/routes'

import {getGenericValuesList} from 'components/Authenticated/Admin/GenericValues/actions'
import { selectGenericValuesList } from 'components/Authenticated/Admin/GenericValues/selectors';
import { selectEmployeeList, selectLoading, selectCurrentPage, selectTotal, selectRowsPerPage } from '../selectors';
import { getEmployeeList, deleteEmployee } from '../actions';
import { Icon } from '../styled';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    dialogOpen: false,
    page: 0,
  };

  componentDidMount() {
    this.props.getAllGenericValues(0)
    this.props.getEmployeeList(1);
  }

  goto = url => {
    this.props.history.push(url);
  };

  openDialog = id => {
    this.setState({
      dialogOpen: true,
      selectedEmployeeId: id,
    });
  };

  closeDialog = () => {
    this.setState({
      dialogOpen: false,
    });
  };

  handleDelete = id => {
    this.props.deleteEmployee(id);
    this.closeDialog();
  };

  handleChangePage = (event, newPage) => {
    this.props.getEmployeeList(1 + newPage);
  };

  getLabel(array,val){
    let mappedArray = array.map(item=> ({ 'value': item.id, 'label': item.title }))
    let filteredList = mappedArray.filter((item)=>item['value'] == val )
      return filteredList.length > 0 ?filteredList[0].label:""
    }

  render() {
    const { employees, loading, currentPage, total, rowsPerPage,allGenericValues } = this.props;
    const { dialogOpen, selectedEmployeeId } = this.state;
    return (
      <div >
        <PopUp disableAutoFocus open={dialogOpen} onClose={this.closeDialog}>
          <DeleteModal
            id={selectedEmployeeId}
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
                <TableCell>Department</TableCell>
                <TableCell>Mobile Number</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isEmpty(employees) ? (
                <CenterEmptyTable message={loading ? 'Loading...' : 'No data available'} />
              ) : (
                employees.map(
                  (
                    {
                      id,
                      first_name,
                      last_name,
                      home_twon_address,
                      department,
                      mobile_number,
                    },
                    i,
                  ) => (
                    <TableRow key={id} onClick={() => this.goto(`${EMPLOYEES.EMPLOYEES_ROUTE}/edit/${id}`)}>
                      <TableCell>{id}</TableCell>
                      <TableCell>{first_name} {last_name}</TableCell>
                      <TableCell>{home_twon_address}</TableCell>
                      <TableCell>{this.getLabel(allGenericValues.filter((item)=>item.type === 'department'),department)}</TableCell>
                      <TableCell>{mobile_number}</TableCell>
                      <TableCell>
                        <Icon title="Edit">
                          <EditIcon onClick={() => this.goto(`${EMPLOYEES.EMPLOYEES_ROUTE}/edit/${id}`)}></EditIcon>
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
  employees: selectEmployeeList(),
  loading: selectLoading(),
  total: selectTotal(),
  currentPage: selectCurrentPage(),
  rowsPerPage: selectRowsPerPage(),
  allGenericValues: selectGenericValuesList()
});

const mapDispatchToProps = dispatch => ({
  getEmployeeList: page => dispatch(getEmployeeList(page)),
  deleteEmployee: id => dispatch(deleteEmployee(id)),
  getAllGenericValues: page => dispatch(getGenericValuesList(page)),
});

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(EmployeeList);
