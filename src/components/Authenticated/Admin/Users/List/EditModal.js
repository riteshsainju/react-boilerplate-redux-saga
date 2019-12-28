import React from 'react';
import { ModalWrapper, Header, CustomCrossIcon, ModalBody } from 'commons/ModalStyle';
import EditForm from '../Form'

const EditFormModal = ({ id, handleClose }) => (
  <ModalWrapper>
    <Header>
      <span>Edit User Settings</span>
      <CustomCrossIcon onClick={handleClose} />
    </Header>
    <ModalBody padding="40px">
      <EditForm id={id} handleClose={handleClose} />
    </ModalBody>
  </ModalWrapper>
);

export default EditFormModal;
