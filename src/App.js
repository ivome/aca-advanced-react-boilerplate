import React, { Component } from 'react';
import {Grid, Row} from 'react-bootstrap';
import axios from 'axios';

import './App.css';
import NavBar from './NavBar';
import JumboContent from './JumboContent';
import SideNav from './SideNav';
import Footer from './Footer';
import ModalForm from './ModalForm';


/* eslint-disable max-len */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jumbotronHeader: 'Hello, World!',
      jumbotronContent: 'This is an example to show the potential of an offcanvas layout pattern in Bootstrap. Try some responsive-range viewport sizes to see it in action.',
      teasers: []
    };
  }

  componentDidMount() {
    axios.get('http://www.localhost:4000/teasers')
      .then(resp => {
        this.setState({
          teasers: resp.data
        });
      })
      .catch(err => {
        console.log(`Error ${err}`);
      });
  }

  handleContentSubmit(attributes) {
    axios.post('http://localhost:4000/teasers', attributes)
      .then(resp => {
        this.setState({
          teasers: [...this.state.teasers, resp.data]
        });
      })
      .catch(err => console.log(err));
  }

  handleDeleteContent(id) {
    axios.delete(`http://localhost:4000/teasers/${id}`)
      .then(() => {
        this.setState({
          teasers: this.state.teasers.filter(teaser => teaser._id !== id)
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <NavBar />
        <Grid>
          <Row className="show-grid">
            <JumboContent
              jumbotronHeader={this.state.jumbotronHeader}
              jumbotronContent={this.state.jumbotronContent}
              teasers={this.state.teasers}
              onRemoveContent={this.handleDeleteContent.bind(this)}
            />
            <SideNav />
          </Row>
          <Row>
            <ModalForm
              onSubmit={this.handleContentSubmit.bind(this)}
            />
          </Row>
          <Footer />
        </Grid>
      </div>
    );
  }
}

export default App;
