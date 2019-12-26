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
import {GENERIC_VALUES}from 'constants/routes'
import { isEmpty } from 'utils';
import { selectGenericValuesList, selectLoading,  selectCurrentPage, selectTotal, selectRowsPerPage } from '../selectors';
import { getGenericValuesList, deleteGenericValues } from '../actions';
import styles, { Icon } from '../styled';

class GenericValuesList extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    dialogOpen: false,
  };

  componentDidMount() {
    this.props.getGenericValuesList(1);
  }

  goto = url => {
    this.props.history.push(url);
  };

  openDialog = id => {
    this.setState({
      dialogOpen: true,
      selectedGenericValuesId: id,
    });
  };

  closeDialog = () => {
    this.setState({
      dialogOpen: false,
    });
  };

  handleChangePage = (event, newPage) => {
    this.props.getGenericValuesList(1 + newPage);
  };

  handleDelete = id => {
    this.props.deleteGenericValues(id);
    this.closeDialog();
  };

  render() {
    const { genericValues, loading, currentPage, total, rowsPerPage  } = this.props;
    const { dialogOpen, selectedGenericValuesId } = this.state;
    return (
      <div>
        <PopUp disableAutoFocus open={dialogOpen} onClose={this.closeDialog}>
          <DeleteModal
            id={selectedGenericValuesId}
            handleClose={this.closeDialog}
            handleDelete={this.handleDelete}
            headerText="Are you sure you want to delete?"
          />
        </PopUp>
        <MainTable>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isEmpty(genericValues) ? (
              <CenterEmptyTable message={loading ? 'Loading...' : 'No data available'} />
            ) : (
              genericValues.map(({ id, type, title }, i) => (
                <TableRow key={id} onClick={() => this.goto(`${GENERIC_VALUES.GENERIC_VALUES_ROUTE}/edit/${id}`)}>
                  <TableCell>{id}</TableCell>
                  <TableCell>{title} </TableCell>
                  <TableCell>{type}</TableCell>
                  <TableCell>
                    <Icon title="Edit">
                      <EditIcon onClick={() => this.goto(`${GENERIC_VALUES.GENERIC_VALUES_ROUTE}/edit/${id}`)}></EditIcon>
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
              ))
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
  genericValues: selectGenericValuesList(),
  loading: selectLoading(),
  total: selectTotal(),
  currentPage: selectCurrentPage(),
  rowsPerPage: selectRowsPerPage(),
});

const mapDispatchToProps = dispatch => ({
  getGenericValuesList: page => dispatch(getGenericValuesList(page)),
  deleteGenericValues: id => dispatch(deleteGenericValues(id)),
});

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(GenericValuesList);
// export default connect(mapStateToProps, mapDispatchToProps)(GenericValuesList);
