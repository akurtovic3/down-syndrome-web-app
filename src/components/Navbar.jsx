import React, { useEffect, useState } from 'react';

import {
  Collapse,
  Navbar as NavbarComponent,
  Nav,
  Dropdown,
  DropdownToggle,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <NavbarComponent color="white" light expand>
      <Nav className="w-100 d-flex justify-content-between align-items-center font-size-lg" navbar>
        <h3>Calendar</h3>
        <Dropdown
          className="d-flex"
          nav
          inNavbar
          isOpen={dropdownOpen}
          toggle={() => setDropdownOpen(!dropdownOpen)}
        >
          <DropdownToggle
            className="p-0 cursor-pointer"
            nav
            tag="div"
            aria-expanded={dropdownOpen}
            data-toggle="dropdown"
          >
            <FontAwesomeIcon icon={faUser} className="fa-xl" />
          </DropdownToggle>
        </Dropdown>
      </Nav>
    </NavbarComponent>
  );
}

export default Navbar;
