import React, { Component } from 'react';
import axios from 'axios';

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/links')
      .then(response => {
        this.setState({
          links: response.data,
        });
      })
      .catch(err => console.log(`Error! ${err}`));
  }

  render() {
    return (
      <div className="SideBar col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
        <div className="list-group">
          {this.state.links.map(link => {
            return (
              <a
                key={link._id}
                href={link.url}
                className="list-group-item">
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SideBar;
