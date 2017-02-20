import React, { Component } from 'react';
import Nav from './Nav/index.js';
import Main from './Main/index.js';
import './App.css';

/* eslint max-len: ["error", { "ignoreStrings": true }] */

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: 'Alex Gaw',
      project: 'React Bootstrap',
      navLinks: {
        link1: 'Home',
        link2: 'About',
        link3: 'Squirrels'
      },
      jumbotron: {
        header: 'Hello, world!',
        body: 'Here\'s a fancy text area full of text. Gee whiz, you see all that text? So much text! Wowza, get a load of all that text! Shaka brah!'
      }
    };
  }
  render() {
    return (
      <div className="App">
        <Nav project={this.state.project} navLinks={this.state.navLinks} />
        <Main
          company={this.state.company}
          jumbotron={this.state.jumbotron}
        />
      </div>
    );
  }
}

export default App;
