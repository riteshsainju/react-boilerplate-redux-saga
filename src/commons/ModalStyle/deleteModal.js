import React from 'react';
import { ModalWrapper, Header, CustomCrossIcon, ModalBody, Text, ButtonWrapper } from 'commons/ModalStyle';
import { PrimaryButton } from 'commons/Buttons';

const DeleteItem = ({ id, handleClose, handleDelete, headerText, bodyText }) => (
  <ModalWrapper>
    <Header>
      <span>Delete Confirmation</span>
      <CustomCrossIcon onClick={handleClose} />
    </Header>
    <ModalBody padding="15px">
      {headerText && <Text>{headerText}</Text>}
      {bodyText && <Text>{bodyText}</Text>}
    </ModalBody>
    <ButtonWrapper>
      <PrimaryButton variant="contained" onClick={handleClose} margin="0 10px 0 0">
        Cancel
      </PrimaryButton>
      <PrimaryButton variant="contained" color="primary" onClick={() => handleDelete(id)}>
        Delete
      </PrimaryButton>
    </ButtonWrapper>
  </ModalWrapper>
);

export default DeleteItem;
