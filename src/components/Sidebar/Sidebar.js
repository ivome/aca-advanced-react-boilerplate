import React from 'react';
import {Col, ListGroup, ListGroupItem} from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Col xs={6} sm={3} className="sidebar-offcanvas" id="sidebar">
      <ListGroup>
        <ListGroupItem href="#" active>Link</ListGroupItem>
        <ListGroupItem href="#">Link</ListGroupItem>
        <ListGroupItem href="#">Link</ListGroupItem>
        <ListGroupItem href="#">Link</ListGroupItem>
        <ListGroupItem href="#">Link</ListGroupItem>
        <ListGroupItem href="#">Link</ListGroupItem>
        <ListGroupItem href="#">Link</ListGroupItem>
        <ListGroupItem href="#">Link</ListGroupItem>
        <ListGroupItem href="#">Link</ListGroupItem>
        <ListGroupItem href="#">Link</ListGroupItem>
      </ListGroup>
    </Col>
  );
};

export default Sidebar;
