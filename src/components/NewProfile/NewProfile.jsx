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
    isActive: 1,
    profileData: {
      firstName: "",
      lastName: "",
      yearOfGrad: 0,
      skills: [],
      story: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      website: "",
      image: "",
      resume: "",
      isActive: 1
    }
  };

  onChangeInput = e => {
    this.setState({
      ...this.state,
      profileData: {
        ...this.state.profileData,
        [e.target.name]: e.target.value ? e.target.value : ""
      }
    });
  };

  onChangeSkills = e => {
    let skillsArray = e.target.value.split(",");
    for (let i = 0; i < skillsArray.length; i++) {
      skillsArray[i] = skillsArray[i].trim();
    }
    this.setState({
      ...this.state,
      profileData: {
        ...this.state.profileData,
        skills: skillsArray
      }
    });
  };

  handleNewProfile = e => {
    e.preventDefault();
    this.props.profileNew(this.state.profileData);
  };

  uploadFile = e => {
    e.preventDefault();
    let name = e.target.name;
    console.log("uploadFile: ", e.target.files[0]);
    console.log(e.target.name);
    this.props.uploadFile(e.target.files[0]).then(response =>
      this.setState({
        ...this.state,
        profileData: {
          ...this.state.profileData,
          [name]: response.value.url.replace(/\s/g, "")
        }
      })
    );
  };

  render() {
    return (
      <div className="container">
        <header>
          <h2>{this.state.isNew ? "New" : "Edit"} Profile</h2>
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
                name="firstName"
                onChange={this.onChangeInput}
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
                name="lastName"
                onChange={this.onChangeInput}
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
                name="yearOfGrad"
                onChange={this.onChangeInput}
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
                name="skills"
                onChange={this.onChangeSkills}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formControlsTextarea">
            <Col componentClass={ControlLabel} sm={2}>
              Story
            </Col>
            <Col sm={10}>
              <FormControl
                componentClass="textarea"
                type="textarea"
                placeholder="Story"
                name="story"
                onChange={this.onChangeInput}
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
                name="phone"
                onChange={this.onChangeInput}
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
                  name="email"
                  onChange={this.onChangeInput}
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
                name="linkedin"
                onChange={this.onChangeInput}
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
                name="github"
                onChange={this.onChangeInput}
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
                name="website"
                onChange={this.onChangeInput}
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
                name="website"
                onChange={this.onChangeInput}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formControlsFile">
            <Col componentClass={ControlLabel} sm={2}>
              Image
            </Col>
            <Col sm={10}>
              <FieldGroup
                id="uploadButton"
                type="file"
                help={
                  this.state.profileData.image
                    ? this.state.profileData.image
                    : "Upload Image File."
                }
                name="image"
                onChange={e => this.uploadFile(e)}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formControlsFile">
            <Col componentClass={ControlLabel} sm={2}>
              Resume
            </Col>
            <Col sm={10}>
              <FieldGroup
                id="uploadButton"
                type="file"
                help={
                  this.state.profileData.resume
                    ? this.state.profileData.resume
                    : "Upload Resume File in PDF format."
                }
                name="resume"
                onChange={e => this.uploadFile(e)}
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
