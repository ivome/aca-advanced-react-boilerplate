import React, { PropTypes } from 'react';
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';

const NavbarInstance = (props) => {

  const navlinks = props.links;

  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          {navlinks.name}
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">{navlinks.link1}</NavItem>
        <NavItem eventKey={2} href="#">{navlinks.link2}</NavItem>
        <NavItem eventKey={3} href="#">{navlinks.link3}</NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavbarInstance;

NavbarInstance.propTypes = {
  links: PropTypes.object.isRequired
};
