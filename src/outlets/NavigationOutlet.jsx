import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import NavbarLayout from '../layouts/NavbarLayout';

function NavigationOutlet() {
  // fix later
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [isTokenValidated, setIsTokenValidated] = useState(true);

  //   useEffect(() => {
  //     (async () => {
  //       if (await checkIfUserAuthorized()) {
  //         setIsAuthorized(true);
  //       }
  //       setIsTokenValidated(true);
  //     })();
  //   }, []);

  if (!isTokenValidated) {
    return null;
  }

  return isAuthorized ? <NavbarLayout /> : <Navigate to="/sign-in" />;
}

export default NavigationOutlet;
