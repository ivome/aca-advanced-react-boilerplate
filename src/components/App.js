import React, {Component} from 'react';
import './App.css';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Teaser from './Teaser/Teaser';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

class App extends Component {
  // constructor() {
  //   super();
  //
  //   this.state({
  //
  //   });
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row className="offcanvas offcanvas-right">
            <Col sm={9}>
              <p className="pull-right visible-xs">
                <Button bsStyle="primary" bsSize="xs" data-toggle="offcanvas">Toggle nav</Button>
              </p>
              <Hero />
              <Row>
                <Teaser />
                <Teaser />
                <Teaser />
                <Teaser />
                <Teaser />
                <Teaser />
              </Row>
            </Col>
            <Sidebar />
          </Row>
          <Footer />
        </Grid>
      </div>
    );
  }
}

export default App;
