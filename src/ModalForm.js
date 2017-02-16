import React, {PropTypes} from 'react';
import {
  Button,
  Modal,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap';
import './ModalForm.css';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const ModalForm = React.createClass({

  getInitialState() {
    return {
      showModal: false,
      buttonObject: {}
    };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  onInputChange(event) {
    const buttonObject = this.state.buttonObject;
    buttonObject[event.target.name] = event.target.value;
    this.setState({buttonObject});
  },

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state.buttonObject);

    this.setState({ showModal: false });
  },

  render() {
    return (
      <div>
        <Button
          bsSize="large"
          bsStyle="info"
          className="modal-button"
          onClick={this.open}
        >
          Add Content
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton />
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              <FieldGroup
                id="formControlsText"
                type="text"
                label="Title"
                name="title"
                placeholder="Enter title"
                value={this.state.title}
                onChange={(event) => this.onInputChange(event)}
              />

              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Description</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  name="description"
                  placeholder="Enter description"
                  value={this.state.description}
                  onChange={(event) => this.onInputChange(event)}
                />
              </FormGroup>

              <FieldGroup
                id="formControlsText"
                type="text"
                label="Button text"
                name="buttonText"
                placeholder="Enter button text"
                value={this.state.buttonText}
                onChange={(event) => this.onInputChange(event)}
              />

              <FieldGroup
                id="formControlsText"
                type="text"
                label="Url"
                name="url"
                placeholder="Enter url"
                value={this.state.url}
                onChange={(event) => this.onInputChange(event)}
              />

              <Button type="submit">Submit</Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

export default ModalForm;

ModalForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
