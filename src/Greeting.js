import React, { PropTypes } from 'react';
import {
  Jumbotron
} from 'react-bootstrap';

const Greeting = (props) => {

  const paras = props.greetings;

  return (
    <Jumbotron>
      <h1>{paras.greeting}</h1>
      <p>{paras.para}</p>
    </Jumbotron>
  );
};

export default Greeting;

Greeting.propTypes = {
  greetings: PropTypes.object.isRequired
};
