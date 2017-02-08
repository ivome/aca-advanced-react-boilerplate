import React from 'react';
import { Row } from 'react-bootstrap';
import ContentArea from './ContentArea/index.js';

const OffCanvas = () => {
  return (
    <Row className="row-offcanvas row-offcanvas-right">
      <ContentArea />
    </Row>
  );
};

export default OffCanvas;
