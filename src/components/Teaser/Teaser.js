import React from 'react';
import {Col, Button} from 'react-bootstrap';

const Teaser = () => {
  return (
    <Col xs={6} lg={4}>
      <h2>Heading</h2>
      <p>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
      </p>
      <p>
        <Button href="#">View details »</Button>
      </p>
    </Col>
  );
};

export default Teaser;
