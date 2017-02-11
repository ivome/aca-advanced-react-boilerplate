import React, { PropTypes } from 'react';
import {

  Row,
  Col,
  Button
} from 'react-bootstrap';

const GridList = (props) => {

  const items = props.grid;

  return (

    <Row>
      <Col xs={6} lg={4}>
        <h2>{items.heading}</h2>
        <p>{items.para}</p>
        <Button>{items.btn} »</Button>
      </Col>
      <Col xs={6} lg={4}>
        <h2>{items.heading}</h2>
        <p>{items.para}</p>
        <Button>{items.btn} »</Button>
      </Col>
      <Col xs={6} lg={4}>
        <h2>{items.heading}</h2>
        <p>{items.para}</p>
        <Button>{items.btn} »</Button>
      </Col>
    </Row>

  );
};

export default GridList;

GridList.propTypes = {
  grid: PropTypes.object.isRequired
};
