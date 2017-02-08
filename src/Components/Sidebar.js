import React, {Component} from 'react';
import {
Row,
Col,
Grid,
ListGroup,
ListGroupItem
 } from 'react-bootstrap';

const Sidebar = props => {
  return (
    <Grid>
      <Row className="show-grid">
      <Col xs={6} sm={3}>
        <ListGroup>
          <ListGroupItem className="active" href="#link1">Link 1</ListGroupItem>
          <ListGroupItem href="#link2">Link 2</ListGroupItem>
          <ListGroupItem href="#link3">Link 3</ListGroupItem>
          <ListGroupItem href="#link4">Link 4</ListGroupItem>
          <ListGroupItem href="#link5">Link 5</ListGroupItem>
          <ListGroupItem href="#link6">Link 6</ListGroupItem>
          <ListGroupItem href="#link7">Link 7</ListGroupItem>
          <ListGroupItem href="#link8">Link 8</ListGroupItem>
          <ListGroupItem href="#link9">Link 9</ListGroupItem>
          <ListGroupItem href="#link10">Link 10</ListGroupItem>
        </ListGroup>

      </Col>
      </Row>
    </Grid>
  );
};
export default Sidebar;
