import React, { Component } from 'react';
import {
Button,
Row,
Col,
Grid,
 } from 'react-bootstrap';

const Body = props => {
  
  return (
    <Grid>
    <Row className="show-grid">
      <Col xs={12} md={8}>
        <Col xs={6} lg={4}>
          <h3>{props.bodyHeader}</h3>
          <p>{props.bodyText}</p>
        <Button>View details »</Button>
        </Col>
        <Col xs={6} lg={4}>
          <h3>{props.bodyHeader}</h3>
          <p>{props.bodyText}</p>
        <Button>View details »</Button>
        </Col>
        <Col xs={6} lg={4}>
          <h3>{props.bodyHeader}</h3>
          <p>{props.bodyText}</p>
        <Button>View details »</Button>
        </Col>
        <Col xs={6} lg={4}>
          <h3>{props.bodyHeader}</h3>
          <p>{props.bodyText}</p>
        <Button>View details »</Button>
        </Col>
        <Col xs={6} lg={4}>
          <h3>{props.bodyHeader}</h3>
          <p>{props.bodyText}</p>
        <Button>View details »</Button>
        </Col>
        <Col xs={6} lg={4}>
          <h3>{props.bodyHeader}</h3>
          <p>{props.bodyText}</p>
          <Button>View details »</Button>
        </Col>
      </Col>
    </Row>
    </Grid>
  );
};

export default Body;
