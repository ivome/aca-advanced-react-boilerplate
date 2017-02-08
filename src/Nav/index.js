import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

const NavComponent = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Replace me with a prop</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} active href="#">Link prop</NavItem>
          <NavItem eventKey={2} href="#">Link prop</NavItem>
          <NavItem eventKey={3} href="#">Link prop</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavComponent;
