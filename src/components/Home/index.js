/*eslint-disable*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PrimaryButton } from 'commons/Buttons';
import { getUsersSaga } from 'actions';
import { MainTable } from 'commons/Table';
import { TableCell, TableHead, TableRow, TableBody } from '@material-ui/core';

import styles from './styles';

class Home extends Component {
  constructor() {
    super();
    this.handleBtnOnClick = this.handleBtnOnClick.bind(this);
  }

  handleBtnOnClick(val) {
    this.props.getUsersSaga();
  }

  render() {
    const { users } = this.props;
    return (
      <div style={styles.container}>
        <PrimaryButton onClick={() => this.handleBtnOnClick(true)} variant="contained" color="primary">
          Load Users
        </PrimaryButton>
        {users.length > 0 && this.showMaterialUi && (
          <MainTable>
            <TableHead>
              <TableRow>
                {/* <TableCell>Current</TableCell> */}
                <TableCell>id</TableCell>
                <TableCell>Name</TableCell>
                {/* <TableCell>Video</TableCell> */}
                <TableCell>UserName</TableCell>
                <TableCell>Email</TableCell>
                {/* {canGiveFeedback(roles) && <TableCell>Feeback</TableCell>} */}
                <TableCell>phone</TableCell>
                <TableCell>website</TableCell>

                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {' '}
              {users.map(({ id, name, email, phone, username, website }, i) => (
                <TableRow key={id}>
                  <TableCell>{id}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{username}</TableCell>
                  <TableCell>{email}</TableCell>
                  <TableCell>{phone}</TableCell>
                  <TableCell>{website}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </MainTable>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.usersReducer.users,
});

const mapDispatchToProps = dispatch => ({
  getUsersSaga: () => dispatch(getUsersSaga()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
