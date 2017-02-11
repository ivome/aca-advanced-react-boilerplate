import React, { PropTypes } from 'react';
import {
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

const Links = (props) => {

  return (
    <ListGroup>
      <ListGroupItem href="#" active>{props.link}</ListGroupItem>
      <ListGroupItem href="#">{props.link}</ListGroupItem>
      <ListGroupItem href="#">{props.link}</ListGroupItem>
      <ListGroupItem href="#">{props.link}</ListGroupItem>
      <ListGroupItem href="#">{props.link}</ListGroupItem>
      <ListGroupItem href="#">{props.link}</ListGroupItem>
      <ListGroupItem href="#">{props.link}</ListGroupItem>
      <ListGroupItem href="#">{props.link}</ListGroupItem>
      <ListGroupItem href="#">{props.link}</ListGroupItem>
      <ListGroupItem href="#">{props.link}</ListGroupItem>
    </ListGroup>
  );
};

export default Links;

Links.propTypes = {
  link: PropTypes.string.isRequired
};
