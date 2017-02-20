import React, { PropTypes } from 'react';
import { Col, Button, Glyphicon } from 'react-bootstrap';
import './index.css';

const Teaser = (props) => {
  const teaser = props.teaser;

  return (
    <Col xs={6} lg={4}>
      <div className="Teaser">
        <p className="pull-right">
          <Button onClick={() => props.onRemoveTeaser(teaser._id)}>
            <Glyphicon glyph="remove" />
          </Button>
        </p>
        <h2>{teaser.title}</h2>
        <p>{teaser.description}</p>
        <Button href={teaser.url}>{teaser.buttonText}</Button>
      </div>
    </Col>
  );
};

export default Teaser;

Teaser.propTypes = {
  teaser: PropTypes.object.isRequired,
  onRemoveTeaser: PropTypes.func.isRequired
};
