import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Project Name</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#" active>Home</NavItem>
        <NavItem eventKey={2} href="#">About</NavItem>
        <NavItem eventKey={3} href="#">Contact</NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
