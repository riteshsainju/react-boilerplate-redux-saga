import React from 'react';
import { ModalWrapper, Header, CustomCrossIcon, ModalBody, HeaderText, ButtonWrapper } from 'commons/ModalStyle';
import { PrimaryButton } from 'commons/Buttons';

const DeleteItem = ({ id, handleClose, deleteItem }) => (
  <ModalWrapper>
    <Header>
      <span>Delete Confirmation</span>
      <CustomCrossIcon onClick={handleClose} />
    </Header>
    <ModalBody padding="15px">
      <HeaderText>Are you sure you want to delete?</HeaderText>
      <HeaderText>The entire data for this patient will be deleted</HeaderText>
    </ModalBody>
    <ButtonWrapper>
      <PrimaryButton variant="contained" onClick={handleClose} margin="0 10px 0 0">
        Cancel
      </PrimaryButton>
      <PrimaryButton variant="contained" color="primary" onClick={() => deleteItem(id)}>
        Delete
      </PrimaryButton>
    </ButtonWrapper>
  </ModalWrapper>
);

export default DeleteItem;
