import React, {PropTypes} from 'react';
import {Jumbotron} from 'react-bootstrap';

/* eslint-disable max-len */
const JumboTron = props => {
  return (
    <Jumbotron>
      <h1>{props.jumbotronHeader}</h1>
      <p>{props.jumbotronContent}</p>
    </Jumbotron>
  );
};

export default JumboTron;

JumboTron.propTypes = {
  jumbotronHeader: PropTypes.string.isRequired,
  jumbotronContent: PropTypes.string.isRequired
};
