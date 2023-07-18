import React from 'react';

import { Spinner } from 'reactstrap';

function Loader({ size = 'lg', containerClassName = 'h-100' }) {
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${containerClassName}`}
    >
      <Spinner size={size} color="secondary" />
    </div>
  );
}

export default Loader;
