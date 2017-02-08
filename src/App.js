import React, { Component } from 'react';
import Nav from './Nav/index.js';
import Main from './Main/index.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
