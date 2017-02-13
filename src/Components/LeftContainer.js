import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar'
import {
Row,
Col,
Grid
 } from 'react-bootstrap';

const LeftContainer = props => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={8}>
          <Header
            header={props.header}
            headerParagraph={props.headerParagraph}
          />
        </Col>
        <Col xs={6} md={4} smHidden xsHidden>
          <Sidebar linkText={props.linkText} />
        </Col>
      </Row>
    </Grid>
  );
};

export default LeftContainer;
