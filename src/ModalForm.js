import React, {PropTypes} from 'react';
import {
  Button,
  Modal,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap';

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
    };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  handleSubmit(event) {
    event.preventDefault();

    const {title, description, buttonText, url} = this.state;
    this.props.onSubmit({title, description, buttonText, url});

    this.setState({ showModal: false });
  },

  render() {
    return (
      <div>
        <Button
          bsStyle="info"
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
                placeholder="Enter title"
                value={this.title}
              />

              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Description</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  placeholder="Enter description"
                  value={this.description}
                />
              </FormGroup>

              <FieldGroup
                id="formControlsText"
                type="text"
                label="Button text"
                placeholder="Enter button text"
                value={this.buttonText}
              />

              <FieldGroup
                id="formControlsText"
                type="text"
                label="Url"
                placeholder="Enter url"
                value={this.url}
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
