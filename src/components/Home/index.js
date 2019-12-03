/*eslint-disable*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Table } from 'semantic-ui-react';
import { PrimaryButton } from '../../commons/Buttons';
import { getUsersSaga } from '../../actions';
import { MainTable } from '../../commons/Table';
import { TableCell, TableHead, TableRow, TableBody } from '@material-ui/core';

import styles from './styles';

class Home extends Component {
  constructor() {
    super();
    const showMaterialUi = false;
    this.handleBtnOnClick = this.handleBtnOnClick.bind(this);
  }

  handleBtnOnClick(val) {
    this.showMaterialUi = val;
    this.props.getUsersSaga();
  }

  render() {
    const { users } = this.props;
    return (
      <div style={styles.container}>
        <Button color="teal" onClick={() => this.handleBtnOnClick(false)}>
          Load Users
        </Button>
        {users.length > 0 && !this.showMaterialUi && (
          <Table striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>E-mail</Table.HeaderCell>
                <Table.HeaderCell>Phone</Table.HeaderCell>
                <Table.HeaderCell>Website</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {users.map(({ id, name, email, phone, username, website }, i) => (
                <Table.Row key={i}>
                  <Table.Cell>{id}</Table.Cell>
                  <Table.Cell>{name}</Table.Cell>
                  <Table.Cell>{username}</Table.Cell>
                  <Table.Cell>{email}</Table.Cell>
                  <Table.Cell>{phone}</Table.Cell>
                  <Table.Cell>{website}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}

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
