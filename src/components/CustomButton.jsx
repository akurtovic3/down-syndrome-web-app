import React from 'react';

import { Button } from 'reactstrap';
import cs from 'classnames';

function CustomButton({
  className = '',
  onClick,
  children,
  disabled = false,
  secondary = false,
  filled = true,
}) {
  return (
    <Button
      className={cs(`btn-custom ${className}`, { secondary, filled })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
