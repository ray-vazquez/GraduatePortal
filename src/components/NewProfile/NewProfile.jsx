import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  HelpBlock,
  Button,
  ControlLabel
} from "react-bootstrap";
import ErrorMessage from "../Widgets/ErrorMessage";
import ModalWidget from "../Widgets/Modal";
import noPic from "../../images/no-profile.svg";
import resumeIcon from "../../images/resume-icon.svg";
import resumeMissingIcon from "../../images/resume-missing-icon.svg";
import "./NewProfile.css";

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id} bsClass="form-group grad-form-group">
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
      yearOfGrad: "",
      skills: "",
      story: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      website: "",
      image: "",
      resume: "",
      isActive: 1
    },
    firstNameValid: null,
    lastNameValid: null,
    yearOfGradValid: null,
    emailValid: null,
    submitForm: false
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

  handleNewProfile = e => {
    e.preventDefault();

    // check for validation on required fields
    const requiredArray = [
      ["firstName", "firstNameValid"], 
      ["lastName", "lastNameValid"], 
      ["yearOfGrad", "yearOfGradValid"],
      ["email", "emailValid"]
    ];
    for (let key of requiredArray) {
      if (!this.state.profileData[key[0]]) {
        this.setState({ [key[1]]: "error" });
      } else {
        this.setState({ [key[1]]: null });
      }
    }
    for (let key of requiredArray) {
      if (!this.state.profileData[key[0]]) return;
    }

    // convert skills back to an array and trim leading/trailing white spaces
    let skillsArray = this.state.profileData.skills.split(",");
    for (let i = 0; i < skillsArray.length; i++) {
      skillsArray[i] = skillsArray[i].trim();
    }
    let newProfileData = {
      ...this.state.profileData,
      skills: skillsArray
    };

    this.props.profileNew(newProfileData).then(() => {
      this.setState({
        submitForm: true
      });
    });
  };

  uploadFile = e => {
    e.preventDefault();
    let name = e.target.name;
    if (name === "image")
      this.props.uploadImageFile(e.target.files[0]).then(response =>
        this.setState({
          ...this.state,
          profileData: {
            ...this.state.profileData,
            [name]: response.value.url.replace(/\s/g, "")
          }
        })
      );
    else if (name === "resume")
      this.props.uploadResumeFile(e.target.files[0]).then(response =>
        this.setState({
          ...this.state,
          profileData: {
            ...this.state.profileData,
            [name]: response.value.url.replace(/\s/g, "")
          }
        })
      );
  };

  closeModal = () => {
    this.setState({
      submitForm: false
    });
  };

  linkToViewProfile = () => {
    this.setState(
      {
        profileData: {
          firstName: "",
          lastName: "",
          yearOfGrad: "",
          skills: "",
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
      },
      this.closeModal()
    );
  };

  addDefaultSrc(e) {
    e.target.src = noPic;
  }

  render() {
    return (
      <div>
        {/* New Profile Header */}
        <div className="header-wrap container-fluid">
          <header className="container grad-header">
            <h1>New Graduate Profile</h1>
          </header>
        </div>

        <main className="container grad-form">
          {/* OnSubmit Message */}
          <ModalWidget
            show={this.state.submitForm}
            message={
              "Graduate Added Successfully! What would you like to do next?"
            }
            title={"New Graduate Profile"}
            closeModal={this.closeModal}
            linkToViewProfile={this.linkToViewProfile}
            graduateId={this.props.graduateId}
          />

          {/* Profile Image */}
          <div className="profile-thumbnail form-thumbnail">
            {this.state.profileData.image ? (
              <img
                width={100}
                height={100}
                src={this.state.profileData.image}
                alt="profile"
                onError={this.addDefaultSrc}
              />
            ) : (
              <img 
                width={100}
                height={100} 
                src={noPic} 
                alt="profile missing" />
            )}
            <div className="choose-button">
              <h3>
                {this.state.profileData.image ? "Update" : "Add"}
                <br /> Image
              </h3>
            </div>
            <FieldGroup
              id="image"
              type="file"
              name="image"
              onChange={e => this.uploadFile(e)}
            />
          </div>

          {/* Profile Resume */}
          <div className="form-resume">
            <img
              src={
                this.state.profileData.resume ? resumeIcon : resumeMissingIcon
              }
              width={100}
              height={100}
              alt="Resume icon"
            />
            <div className="choose-button">
              <h3>{this.state.profileData.resume ? "Update" : "Add"} Resume</h3>
            </div>
            <FieldGroup
              id="resume"
              type="file"
              name="resume"
              onChange={e => this.uploadFile(e)}
            />
          </div>
          <div className="clearfix" />

          {/* Profile Form */}
          <form onSubmit={this.handleNewProfile}>
            <FormGroup 
              controlId="first-name" 
              validationState={this.state.firstNameValid}>
              <ControlLabel>
                First Name<span className="helper helper-asterisk">*</span>
              </ControlLabel>
              <FormControl
                type="text"
                placeholder="First Name"
                name="firstName"
                value={this.state.profileData.firstName}
                onChange={this.onChangeInput}
              />
            </FormGroup>
            <FormGroup 
              controlId="last-name"
              validationState={this.state.lastNameValid}>
              <ControlLabel>
                Last Name<span className="helper helper-asterisk">*</span>
              </ControlLabel>
              <FormControl
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={this.state.profileData.lastName}
                onChange={this.onChangeInput}
              />
            </FormGroup>
            <FormGroup 
              controlId="year-of-grad"
              validationState={this.state.yearOfGradValid}>
              <ControlLabel>
                Year of Graduation
                <span className="helper helper-asterisk">*</span>
              </ControlLabel>
              <FormControl
                type="text"
                placeholder="Year of Graduation"
                value={this.state.profileData.yearOfGrad}
                name="yearOfGrad"
                onChange={this.onChangeInput}
              />
            </FormGroup>
            <FormGroup controlId="skills">
              <ControlLabel>
                Skills<span className="helper">(Comma delimited)</span>
              </ControlLabel>
              <FormControl
                type="text"
                placeholder="Skills"
                value={this.state.profileData.skills}
                name="skills"
                onChange={this.onChangeInput}
              />
            </FormGroup>
            <FormGroup controlId="story">
              <ControlLabel>
                Story<span className="helper">(Max 800 characters)</span>
              </ControlLabel>
              <FormControl
                componentClass="textarea"
                type="textarea"
                placeholder="Story"
                rows={4}
                maxLength="800"
                value={this.state.profileData.story}
                name="story"
                onChange={this.onChangeInput}
              />
            </FormGroup>
            <FormGroup controlId="phone">
              <ControlLabel>Phone Number</ControlLabel>
              <FormControl
                type="text"
                placeholder="Phone Number"
                value={this.state.profileData.phone}
                name="phone"
                onChange={this.onChangeInput}
              />
            </FormGroup>
            <FormGroup 
              controlId="email"
              validationState={this.state.emailValid}>
              <ControlLabel>
                Email<span className="helper helper-asterisk">*</span>
              </ControlLabel>
              <FormControl
                type="text"
                placeholder="Email"
                value={this.state.profileData.email}
                name="email"
                onChange={this.onChangeInput}
              />
            </FormGroup>
            <FormGroup controlId="linkedin">
              <ControlLabel>LinkedIn</ControlLabel>
              <FormControl
                type="text"
                placeholder="LinkedIn"
                value={this.state.profileData.linkedin}
                name="linkedin"
                onChange={this.onChangeInput}
              />
            </FormGroup>
            <FormGroup controlId="github">
              <ControlLabel>GitHub</ControlLabel>
              <FormControl
                type="text"
                placeholder="GitHub"
                value={this.state.profileData.github}
                name="github"
                onChange={this.onChangeInput}
              />
            </FormGroup>
            <FormGroup controlId="website">
              <ControlLabel>Website</ControlLabel>
              <FormControl
                type="text"
                placeholder="Website"
                name="website"
                onChange={this.onChangeInput}
              />
            </FormGroup>
            <Button
              type="submit"
              className="btn grad-btn grad-btn-secondary"
              disabled={this.props.isLoading === true}
            >
              {this.props.isLoading ? "LOADING..." : "ADD"}
            </Button>
            {this.props.hasError && (
              <ErrorMessage>
                Sorry! The Graduate Portal is temporarily down. Our engineers
                are aware of the problem and are hard at work trying to fix it.
                Please come back later.
              </ErrorMessage>
            )}
          </form>
        </main>
      </div>
    );
  }
}

export default NewProfile;
