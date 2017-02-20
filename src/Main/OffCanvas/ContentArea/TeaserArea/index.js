import React, { Component } from 'react';
import axios from 'axios';
import Teaser from './Teaser/index.js';
import AddTeaserModal from './AddTeaserModal/index.js';
import './index.css';

/* eslint max-len: ["error", { "ignoreStrings": true }] */
/* eslint no-console: 0 */


class TeaserArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teasers: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/teasers')
      .then(response => {
        this.setState({
          teasers: response.data,
        });
      })
      .catch(err => console.log(`Error! ${err}`));
  }

  handleAddTeaser(teaser) {
    axios.post('http://localhost:4000/teasers', teaser)
      .then(response => {
        this.setState({
          teasers: [...this.state.teasers, response.data]
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleRemoveTeaser(id) {
    axios.delete(`http://localhost:4000/teasers/${id}`)
      .then(() => {
        this.setState({
          teasers: this.state.teasers.filter(teaser => teaser._id !== id)
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="TeaserArea">
        <div className="teasers group">
          {this.state.teasers.map(teaser => {
            return (
              <Teaser
                key={teaser._id}
                teaser={teaser}
                onRemoveTeaser={this.handleRemoveTeaser.bind(this)}
              />
            );
          })}
        </div>
        <AddTeaserModal
          onAddTeaser={this.handleAddTeaser.bind(this)}
        />
      </div>
    );
  }
}

export default TeaserArea;
