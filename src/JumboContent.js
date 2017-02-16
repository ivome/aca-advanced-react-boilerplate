import React, {PropTypes} from 'react';
import {Col, Row} from 'react-bootstrap';
import JumboTron from './JumboTron';
import Content from './Content';

const JumboContent = props => {
  return (
    <Col md={9}>
      <JumboTron
        jumbotronHeader={props.jumbotronHeader}
        jumbotronContent={props.jumbotronContent}
      />
      <Row className="show-grid">
        {props.teasers.map(content => {
          return (
            <Content
              key={content._id}
              title={content.title}
              description={content.description}
              url={content.url}
              buttonText={content.buttonText}
              onRemoveClick={() => props.onRemoveContent(content._id)}
            />
          );
        })
      }
      </Row>
    </Col>
  );
};

export default JumboContent;

JumboContent.propTypes = {
  jumbotronContent: PropTypes.string.isRequired,
  jumbotronHeader: PropTypes.string.isRequired,
  teasers: PropTypes.array.isRequired,
  onRemoveContent: PropTypes.func.isRequired
};
