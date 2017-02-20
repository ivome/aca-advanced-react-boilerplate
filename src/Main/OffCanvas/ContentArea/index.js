import React, { PropTypes } from 'react';
import { Jumbotron } from 'react-bootstrap';
import TeaserArea from './TeaserArea/index.js';

const ContentArea = (props) => {
  return (
    <div className="ContentArea col-xs-12 col-sm-9">
      <p className="pull-right visible-xs">
        <button
          type="button"
          className="btn btn-primary btn-xs"
          onClick={() => props.onToggleOffCanvas()}>
          Toggle Nav
        </button>
      </p>
      <Jumbotron>
        <h1>{props.jumbotron.header}</h1>
        <p>{props.jumbotron.body}</p>
      </Jumbotron>
      <TeaserArea />
    </div>
  );
};

export default ContentArea;

ContentArea.propTypes = {
  onToggleOffCanvas: PropTypes.func.isRequired,
  jumbotron: PropTypes.object.isRequired
};
