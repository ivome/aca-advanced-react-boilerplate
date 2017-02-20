import React, { Component, PropTypes } from 'react';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class AddTeaserModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      teaserTitle: '',
      teaserDescription: '',
      teaserUrl: 'http://'
    };
  }

  openAddModal() {
    this.setState({ showModal: true });
  }

  closeAddModal() {
    this.setState({
      showModal: false,
      teaserTitle: '',
      teaserDescription: '',
      teaserUrl: 'http://'
    });
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit() {
    const teaser = {
      title: this.state.teaserTitle,
      description: this.state.teaserDescription,
      url: this.state.teaserUrl,
      buttonText: 'Read more'
    };

    this.props.onAddTeaser(teaser);
    this.closeAddModal();
  }

  render() {
    return (
      <div className="AddTeaserModal">
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.openAddModal.bind(this)}
        >
          Add Teaser
        </Button>

        <Modal show={this.state.showModal} onHide={this.closeAddModal.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Teaser</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup
                controlId="addTeaserTitle"
              >
                <ControlLabel>Teaser Title</ControlLabel>
                <FormControl
                  type="text"
                  name="teaserTitle"
                  value={this.state.teaserTitle}
                  placeholder="Enter title"
                  onChange={this.handleInputChange.bind(this)}
                />
              </FormGroup>
              <FormGroup
                controlId="addTeaserDescription"
              >
                <ControlLabel>Teaser Description</ControlLabel>
                <FormControl
                  type="text"
                  name="teaserDescription"
                  value={this.state.teaserDescription}
                  placeholder="Enter description"
                  onChange={this.handleInputChange.bind(this)}
                />
              </FormGroup>
              <FormGroup
                controlId="addTeaserUrl"
              >
                <ControlLabel>Teaser URL</ControlLabel>
                <FormControl
                  type="text"
                  name="teaserUrl"
                  value={this.state.teaserUrl}
                  placeholder="Enter text"
                  onChange={this.handleInputChange.bind(this)}
                />
              </FormGroup>
            </form>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeAddModal.bind(this)}>Cancel</Button>
            <Button
              onClick={this.handleSubmit.bind(this)}
              disabled={!this.state.teaserTitle.trim() ||
                !this.state.teaserDescription.trim() ||
                !this.state.teaserUrl.trim()}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddTeaserModal;

AddTeaserModal.propTypes = {
  onAddTeaser: PropTypes.func.isRequired
};
