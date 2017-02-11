import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar inverse fixedTop collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Project name</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#" className="active">Home</NavItem>
          <NavItem eventKey={2} href="#">About</NavItem>
          <NavItem eventKey={3} href="#">Contact</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
