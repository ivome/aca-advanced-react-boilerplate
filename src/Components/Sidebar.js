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
          <ListGroupItem className="active" href="#link1">{props.linkText}</ListGroupItem>
          <ListGroupItem href="#link2">{props.linkText}</ListGroupItem>
          <ListGroupItem href="#link3">{props.linkText}</ListGroupItem>
          <ListGroupItem href="#link4">{props.linkText}</ListGroupItem>
          <ListGroupItem href="#link5">{props.linkText}</ListGroupItem>
          <ListGroupItem href="#link6">{props.linkText}</ListGroupItem>
          <ListGroupItem href="#link7">{props.linkText}</ListGroupItem>
          <ListGroupItem href="#link8">{props.linkText}</ListGroupItem>
          <ListGroupItem href="#link9">{props.linkText}</ListGroupItem>
          <ListGroupItem href="#link10">{props.linkText}</ListGroupItem>
        </ListGroup>
      </Col>
      </Row>
    </Grid>
  );
};
export default Sidebar;
