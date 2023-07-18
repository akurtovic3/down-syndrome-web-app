import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';

function AddNewButton({
  handleClick,
  optionalClassName = '',
}) {
  return (
    <FontAwesomeIcon
      icon={faPlusCircle}
      className={
        `add-new-button cursor-pointer ${optionalClassName}`
      }
      onClick={handleClick}
    />
  );
}

export default AddNewButton;
