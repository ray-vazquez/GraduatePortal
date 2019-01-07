import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  HelpBlock,
  Button,
  Col,
  ControlLabel
} from "react-bootstrap";
import ErrorMessage from "../Widgets/ErrorMessage";

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class EditProfile extends Component {
  state = {
    isNew: true,
    isAdmin: false,
    isLoading: false,
    hasError: false,
    profile: {
      profileId: null,
      firstName: null,
      lastName: null,
      skills: [],
      story: null,
      links: {
        github: null,
        linkedIn: null,
        email: null,
        website: null
      },
      phoneNumber: null,
      yearOfGrad: null,
      image: null,
      resume: null
    }
  };

  handleUpdateProfile = e => {
    e.preventDefault();
    this.props.editProfile(this.state.profileId);
  };

  render() {
    return (
      <div className="container">
        <header>
          <h2>
            Graduate Portal
            <br />
            {this.state.isNew ? "New" : "Edit"} Profile
          </h2>
        </header>
        <form onSubmit={this.handleUpdateProfile}>
          <FormGroup controlId="formBasicText">
            <Col componentClass={ControlLabel} sm={2}>
              First Name
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="First Name" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formBasicText">
            <Col componentClass={ControlLabel} sm={2}>
              Last Name
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Last Name" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formBasicText">
            <Col componentClass={ControlLabel} sm={2}>
              Year of Graduation
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Year of Graduation" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formBasicText">
            <Col componentClass={ControlLabel} sm={2}>
              Skills
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Skills" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formControlsTextarea">
            <Col componentClass={ControlLabel} sm={2}>
              Story
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Story" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formBasicText">
            <Col componentClass={ControlLabel} sm={2}>
              Phone Number
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Phone Number" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formBasicText">
            <FormGroup controlId="formBasicText">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="Email" />
              </Col>
            </FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Linked In
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Linked In" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formBasicText">
            <Col componentClass={ControlLabel} sm={2}>
              GitHub
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="GitHub" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formBasicText">
            <Col componentClass={ControlLabel} sm={2}>
              Website
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Website" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formControlsFile">
            <Col componentClass={ControlLabel} sm={2}>
              Image
            </Col>
            <Col sm={10}>
              <FieldGroup
                id="formControlsFile"
                type="file"
                label="File"
                help="Upload Image File."
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formControlsFile">
            <Col componentClass={ControlLabel} sm={2}>
              Resume
            </Col>
            <Col sm={10}>
              <FieldGroup
                id="formControlsFile"
                type="file"
                label="File"
                help="Upload Resume File in PDF format."
              />
            </Col>
          </FormGroup>
          <Button
            type="submit"
            className="btn btn-primary"
            disabled={this.props.isLoading === true}
          >
            {this.props.isLoading ? "UPDATE" : "ADD"}
          </Button>
          {this.props.hasError && (
            <ErrorMessage>
              Sorry! The Graduate Portal is temporarily down. Our engineers are
              aware of the problem and are hard at work trying to fix it. Please
              come back later.
            </ErrorMessage>
          )}
        </form>
      </div>
    );
  }
}

export default EditProfile;
