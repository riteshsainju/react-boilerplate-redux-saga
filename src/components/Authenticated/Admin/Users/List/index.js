/*eslint-disable*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
// import DeleteIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import { TableCell, TableHead, TableRow, TableBody } from '@material-ui/core';

import { MainTable, Pagination, CenterEmptyTable } from 'commons/Table';
import { PopUp } from 'commons/ModalStyle';
import EditFormModal from './EditModal';
import { isEmpty } from 'utils';

// import DeleteUser from './deleteModal';
import { selectUserList, selectLoading, selectCurrentPage, selectTotal, selectRowsPerPage } from '../selectors';
import { getUserList, deleteUser } from '../actions';
import { Icon } from 'commons/Style/FormStyle';
// import { USERS } from 'constants/routes'
import { Avatar } from 'components/Authenticated/styled';
import avatar from 'assets/images/doctor.png'
import EditForm from '../Form'
import { ModalWrapper, Header, CustomCrossIcon, ModalBody, Text, ButtonWrapper } from 'commons/ModalStyle';

class UserList extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    dialogOpen: false,
    page: 0,
  };

  componentDidMount() {
    this.props.getUserList(1);
  }

  goto = url => {
    this.props.history.push(url);
  };

  openDialog = id => {
    this.setState({
      dialogOpen: true,
      selectedUserId: id,
    });
  };

  closeDialog = () => {
    this.setState({
      dialogOpen: false,
    });
  };

  // handleDelete = id => {
  //   console.log(id)
  //   this.closeDialog();
  // };

  handleChangePage = (event, newPage) => {
    this.props.getUserList(1 + newPage);
  };

  departments = [
    { value: '1', label: 'Emergency' },
    { value: '2', label: 'Cardiology' },
    { value: '3', label: 'Neurology' },
    { value: '4', label: 'ICU' },
  ];

  getLabel(array,val){
    let filteredList = array.filter((item)=>item['value'] == val )
      return filteredList[0].label
      }

  render() {
    const { users, loading, currentPage, total, rowsPerPage } = this.props;
    const { dialogOpen, selectedUserId } = this.state;
    return (
      <div >
        <PopUp disableAutoFocus open={dialogOpen} onClose={this.closeDialog}>
          <EditFormModal
            // id={selectedUserId}
            id={1}
            handleClose={this.closeDialog}
          />
            {/* <ModalWrapper>

          <EditForm id ={1}></EditForm>
          </ModalWrapper> */}
        </PopUp>
        <MainTable>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell />
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Mobile Number</TableCell>
                {/* <TableCell>Action</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {isEmpty(users) ? (
                <CenterEmptyTable message={loading ? 'Loading...' : 'No data available'} />
              ) : (
                users.map(
                  (
                    {
                      id,
                      first_name,
                      last_name,
                      home_twon_address,
                      department,
                      mobile_number
                    },
                    i,
                  ) => (
                    <TableRow key={id} >
                      <TableCell>{id}</TableCell>
                      <TableCell><Avatar src={avatar} alt="profile" /></TableCell>
                      <TableCell>{first_name} {last_name}</TableCell>
                      <TableCell>{home_twon_address}</TableCell>
                      <TableCell>{this.getLabel(this.departments,department)}</TableCell>
                      <TableCell>{mobile_number}</TableCell>
                      <TableCell>
                        <Icon title="Edit">
                          <EditIcon
                            onClick={event => {
                              event.stopPropagation();
                              this.openDialog(id);
                            }}
                          ></EditIcon>
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
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  users: selectUserList(),
  loading: selectLoading(),
  total: selectTotal(),
  currentPage: selectCurrentPage(),
  rowsPerPage: selectRowsPerPage(),
});

const mapDispatchToProps = dispatch => ({
  getUserList: page => dispatch(getUserList(page)),
  // deleteUser: id => dispatch(deleteUser(id)),
});

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(UserList);
