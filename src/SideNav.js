import React from 'react';
import {ListGroup, ListGroupItem, Col} from 'react-bootstrap';

const SideNav = () => {
  return (
    <Col md={3}>
      <ListGroup>
        <ListGroupItem href="#" active>link</ListGroupItem>
        <ListGroupItem href="#">link</ListGroupItem>
        <ListGroupItem href="#">link</ListGroupItem>
        <ListGroupItem href="#">link</ListGroupItem>
        <ListGroupItem href="#">link</ListGroupItem>
        <ListGroupItem href="#">link</ListGroupItem>
        <ListGroupItem href="#">link</ListGroupItem>
        <ListGroupItem href="#">link</ListGroupItem>
        <ListGroupItem href="#">link</ListGroupItem>
        <ListGroupItem href="#">link</ListGroupItem>
      </ListGroup>
    </Col>
  );
};

export default SideNav;
