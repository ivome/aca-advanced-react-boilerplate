import React, { PropTypes } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

const NavComponent = (props) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">{props.project}</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} active href="#">{props.navLinks.link1}</NavItem>
          <NavItem eventKey={2} href="#">{props.navLinks.link2}</NavItem>
          <NavItem eventKey={3} href="#">{props.navLinks.link3}</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavComponent;

NavComponent.propTypes = {
  project: PropTypes.string.isRequired,
  navLinks: PropTypes.object.isRequired
};
