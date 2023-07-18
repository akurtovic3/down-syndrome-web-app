import React from 'react';

import { ModalBody, Modal as ModalReactstrap } from 'reactstrap';

function Modal({
  isOpened,
  children,
  contentClassName = '',
  className = '',
  ...rest
}) {
  return (
    <ModalReactstrap
      className="modal-dialog-scrollable"
      contentClassName={`h-75 p-2 pt-1 ${contentClassName}`}
      size="lg"
      isOpen={isOpened}
      centered
      {...rest}
    >
      <ModalBody className={className}>{children}</ModalBody>
    </ModalReactstrap>
  );
}

export default Modal;
