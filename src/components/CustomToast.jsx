import React from 'react';

import {
  Toast, ToastHeader, ToastBody, Fade,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { TOAST_TYPE } from '../constants';

import { hideToast } from '../redux/toastSlice';

function CustomToast() {
  const dispatch = useDispatch();
  const { isVisible, message, type } = useSelector((state) => state.toast);

  return (
  // <div className="p-3" position="bottom-start" style={{ zIndex: 999999 }}>
  //   <Toast bg={type} onClose={() => dispatch(hideToast())} show={isVisible} delay={3500} autohide>
  //     <Toast.Body className={`d-flex justify-content-between
  //                 ${type === TOAST_TYPE.ERROR || type.toLowerCase() === TOAST_TYPE.SUCCESS ? 'text-white' : 'text-black'} `}
  //     >
  //       {message}
  //       <i className="bi bi-x-lg cursor" onClick={() => dispatch(hideToast())} />
  //     </Toast.Body>
  //   </Toast>
    <Toast
      className={`bg-${type}
                    ${type === TOAST_TYPE.ERROR || type.toLowerCase() === TOAST_TYPE.SUCCESS ? 'text-white' : 'text-black'}`}
      isOpen={isVisible}
      transition={(
        <Fade
          in={isVisible}
          timeout={2000}
          onExiting={() => dispatch(hideToast())}
        />
)}

    >
      <ToastBody className="d-flex justify-content-between">
        {message}
        <i className="bi bi-x-lg cursor-pointer" onClick={() => dispatch(hideToast())} />
      </ToastBody>
    </Toast>
  // </div>
  );
}

export default CustomToast;
