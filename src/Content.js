import React, {PropTypes} from 'react';
import {Col, Button, ButtonToolbar} from 'react-bootstrap';

const Content = props => {
  return (
    <Col md={4}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <ButtonToolbar>
        <Button href={props.url}>{props.buttonText}</Button>
        <Button bsStyle="danger" onClick={props.onRemoveClick}>Remove</Button>
      </ButtonToolbar>
    </Col>
  );
};

export default Content;

Content.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onRemoveClick: PropTypes.func.isRequired
};
