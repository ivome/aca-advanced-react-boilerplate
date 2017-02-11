import React, { Component } from 'react';
import './App.css';
import NavbarInstance from './NavbarInstance';
import Greeting from './Greeting';
import GridList from './GridList';
import Links from './Links';
import {
  Grid,
  Row,
  Col,
  Glyphicon

} from 'react-bootstrap';


class App extends Component {
  constructor() {
    super();
    this.state = {
      navigation: {
        name: 'Project name',
        link1: 'Home',
        link2: 'About',
        link3: 'Contact'
      },
      jumbo: {
        greeting: 'Hello, world!',
        para : 'This is an example to show the potential of an off canvas layout pattern in Bootstrap. Try some responsive-range viewport sizes to see it in action.'
      },

      grid: {
        heading: 'Heading',
        para: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
        btn: 'View Details'
      },

      link: 'Link',

      footer: '2016 Company, Inc.'

    };
  }
  render() {
    return (
      <div className="App">
        <NavbarInstance
          links={this.state.navigation}
        />
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={9}>
              <Greeting
                greetings={this.state.jumbo}
              />
              <GridList
                grid={this.state.grid}
              />
              <GridList
                grid={this.state.grid}
              />
            </Col>
            <Col xs={6} md={3}>
              <Links
                link={this.state.link}
              />
            </Col>
          </Row>
          <hr />
          <footer>
            <p>
              <Glyphicon glyph="copyright-mark" /> {this.state.footer}
            </p>
          </footer>
        </Grid>


      </div>
    );
  }
}
export default App;
