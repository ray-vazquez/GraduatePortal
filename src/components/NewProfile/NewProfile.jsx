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

class NewProfile extends Component {
  state = {
    isNew: true,
    isAdmin: true,
    hasError: false,
    isActive: 1
  };

  handleNewProfile = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      graduateId: this.state.graduateId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      skills: this.state.skills,
      github: this.state.github,
      linkedin: this.state.linkedin,
      email: this.state.email,
      website: this.state.website,
      phone: this.state.phone,
      yearOfGrad: this.state.yearOfGrad,
      inage: this.state.image,
      resume: this.state.resume,
      story: this.state.story,
      isActive: this.state.isActive
    });
    this.props.newProfile(this.state);
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
        <form onSubmit={this.handleNewProfile}>
          <FormGroup controlId="formBasicText">
            <Col componentClass={ControlLabel} sm={2}>
              First Name
            </Col>
            <Col sm={10}>
              <FormControl
                type="text"
                placeholder="First Name"
                onChange={e => this.setState({ firstName: e.target.value })}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formBasicText">
            <Col componentClass={ControlLabel} sm={2}>
              Last Name
            </Col>
            <Col sm={10}>
              <FormControl
                type="text"
                placeholder="Last Name"
                onChange={e => this.setState({ lastName: e.target.value })}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formBasicText">
            <Col componentClass={ControlLabel} sm={2}>
              Year of Graduation
            </Col>
            <Col sm={10}>
              <FormControl
                type="text"
                placeholder="Year of Graduation"
                onChange={e => this.setState({ yearOfGrad: e.target.value })}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formBasicText">
            <Col componentClass={ControlLabel} sm={2}>
              Skills
            </Col>
            <Col sm={10}>
              <FormControl
                type="text"
                placeholder="Skills"
                onChange={e => this.setState({ skills: [e.target.value] })}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formControlsTextarea">
            <Col componentClass={ControlLabel} sm={2}>
              Story
            </Col>
            <Col sm={10}>
              <FormControl
                type="text"
                placeholder="Story"
                onChange={e => this.setState({ story: e.target.value })}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formBasicText">
            <Col componentClass={ControlLabel} sm={2}>
              Phone Number
            </Col>
            <Col sm={10}>
              <FormControl
                type="text"
                placeholder="Phone Number"
                onChange={e => this.setState({ phone: e.target.value })}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formBasicText">
            <FormGroup controlId="formBasicText">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl
                  type="text"
                  placeholder="Email"
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </Col>
            </FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Linked In
            </Col>
            <Col sm={10}>
              <FormControl
                type="text"
                placeholder="Linked In"
                onChange={e => this.setState({ linkedin: e.target.value })}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formBasicText">
            <Col componentClass={ControlLabel} sm={2}>
              GitHub
            </Col>
            <Col sm={10}>
              <FormControl
                type="text"
                placeholder="GitHub"
                onChange={e => this.setState({ github: e.target.value })}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formBasicText">
            <Col componentClass={ControlLabel} sm={2}>
              Website
            </Col>
            <Col sm={10}>
              <FormControl
                type="text"
                placeholder="Website"
                onChange={e => this.setState({ website: e.target.value })}
              />
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
                onChange={e => this.setState({ image: e.target.value })}
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
                onChange={e => this.setState({ resume: e.target.value })}
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

export default NewProfile;
