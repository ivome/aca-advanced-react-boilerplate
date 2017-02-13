import React, { Component } from 'react';
import NavigationBar from './Components/NavigationBar';
import LeftContainer from './Components/LeftContainer';
import Body from './Components/Body';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: 'Hello, World!',
      headerParagraph: 'This is an example to show the potential of an offcanvas layout pattern in Bootstrap. Try some responsive-range viewport sizes to see it in action.',
      bodyText:'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
      bodyTextArray:[],
      bodyHeader:'Header',
      linkText:'Link',
      navText:''
    };
  }
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <LeftContainer
          header={this.state.header}
          headerParagraph={this.state.headerParagraph}
          linkText={this.state.linkText}
        />
        <Body
          bodyText={this.state.bodyText}
          bodyHeader={this.state.bodyHeader}
        />
      </div>
    );
  }
}

export default App;
