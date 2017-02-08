import React, { Component } from 'react';
import Navagationbar from './Components/Navagationbar';
import LeftContainer from './Components/LeftContainer';
import Body from './Components/Body';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: 'Hello, World!',
      headerParagraph: 'This is an example to show the potential of an offcanvas layout pattern in Bootstrap. Try some responsive-range viewport sizes to see it in action.'
    };
  }
  render() {
    return (
      <div className="App">
        <Navagationbar />
        <LeftContainer
          header={this.state.header}
          headerParagraph={this.state.headerParagraph}
        />
        <Body />
      </div>
    );
  }
}

export default App;
