import React from 'react';
import {
  Jumbotron,
  Button
 } from 'react-bootstrap';

const Header = props => {
  return (
    <Jumbotron>
      <h1>{props.header}</h1>
      <p>{props.headerParagraph}</p>
      <p><Button bsStyle="primary">Learn more</Button></p>
    </Jumbotron>
  );
};

export default Header;
