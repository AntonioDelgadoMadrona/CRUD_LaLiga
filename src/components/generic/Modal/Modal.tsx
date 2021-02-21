import React from "react";

// STYLED
import { StyledModal, ModalContent, ModalClose, ModalBody } from "./styled";

interface IProps {
  show: boolean;
  children: any;
  modalClosed: any;
}

const Modal = React.memo<IProps>(({ show, children, modalClosed }) => {
  return (
    <StyledModal show={show}>
      <ModalContent>
        <ModalClose onClick={modalClosed}>&times;</ModalClose>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </StyledModal>
  );
});

export { Modal };
