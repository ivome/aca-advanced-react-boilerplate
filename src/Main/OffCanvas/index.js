import React, { Component, PropTypes } from 'react';
import { Row } from 'react-bootstrap';
import ContentArea from './ContentArea/index.js';
import SideBar from './SideBar/index.js';

class OffCanvas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      inactiveClasses: 'row-offcanvas row-offcanvas-right',
      activeClasses: 'row-offcanvas row-offcanvas-right active'
    };
  }

  handleToggleOffCanvas() {
    if (this.state.active) {
      this.setState({
        active: false
      });
    } else {
      this.setState({
        active: true
      });
    }
  }

  render() {
    return (
      <Row className={this.state.active ? this.state.activeClasses : this.state.inactiveClasses}>
        <ContentArea
          onToggleOffCanvas={this.handleToggleOffCanvas.bind(this)}
          jumbotron={this.props.jumbotron}
          />
        <SideBar />
      </Row>
    );
  }
}

export default OffCanvas;

OffCanvas.propTypes = {
  jumbotron: PropTypes.object.isRequired
};
