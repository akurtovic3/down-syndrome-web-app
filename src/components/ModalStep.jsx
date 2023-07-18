import React, { useEffect, useState } from 'react';

import cs from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CustomButton from './CustomButton';

function ModalStep({
  title, children, handleCancel, leftButtonText, rightButtonText, onLeftButtonClick, onRightButtonClick, leftButtonDisabled = false, rightButtonDisabled = false,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  console.log('modal step');
  return (
    <div className="d-flex flex-column h-100 w-100 justify-content-between text-center">
      <div>
        <div className="d-flex justify-content-end">
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faXmark}
            size="lg"
          />
        </div>
        <h3 className="text-center">{title}</h3>
      </div>
      {children}
      <div className="d-flex align-items-end pb-2 pt-5 justify-content-between">
        <div>
          {!!leftButtonText && (
          <CustomButton
            onClick={onLeftButtonClick}
            disabled={leftButtonDisabled}
          >
            {leftButtonText}
          </CustomButton>
          )}
        </div>
        <div>
          {!!rightButtonText && (
          <CustomButton
            onClick={onRightButtonClick}
            disabled={rightButtonDisabled}
          >
            {rightButtonText}
          </CustomButton>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalStep;
