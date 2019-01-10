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
    graduateId: this.props.match.params.graduateId,
    isNew: false,
    isAdmin: true,
    isLoading: false,
    hasError: false,
    isActive: 1,
    profileData: {}
  };

  onChangeInput = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      profileData: {
        ...this.state.profileData,
        [e.target.name]: e.target.value ? e.target.value : ""
      }
    });
  };

  onChangeSkills = e => {
    e.preventDefault();
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

  handleEditProfile = e => {
    e.preventDefault();
    this.props.profileEdit(this.state.profileData);
  };

  uploadFile = e => {
    e.preventDefault();
    let name = e.target.name;
    console.log("uploadFile: ", e.target.files[0]);
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

  componentDidMount() {
    if (!this.props.profiles)
      this.props.fetchAllProfiles().then(() => {
        this.setState({
          profileData: Object.values(this.props.profiles).filter(profile => {
            return profile.id === parseInt(this.state.graduateId);
          })
        });
      });
  }

  render() {
    console.log("profileData:", this.state.profileData);
    return (
      <main className="">
        {this.state.profileData &&
          Object.values(this.state.profileData).map(graduate => {
            const key = "graduate-" + graduate.id;
            return (
              <div className="card" key={key}>
                <header>
                  <h2>{this.state.isNew ? "New" : "Edit"} Profile</h2>
                </header>
                <form onSubmit={this.handleEditProfile}>
                  <FormGroup controlId="formBasicText">
                    <Col componentClass={ControlLabel} sm={2}>
                      First Name
                    </Col>
                    <Col sm={10}>
                      <FormControl
                        type="text"
                        placeholder="First Name"
                        value={graduate.firstName}
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
                        value={graduate.lastName}
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
                        value={graduate.yearOfGrad}
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
                        value={graduate.skills}
                        name="skills"
                        onChange={this.onChangeInput}
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
                        placeholder="Story"
                        value={graduate.story}
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
                        value={graduate.phone}
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
                          value={graduate.email}
                          name="email"
                          onChange={this.onChangeInput}
                        />
                      </Col>
                    </FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                      LinkedIn
                    </Col>
                    <Col sm={10}>
                      <FormControl
                        type="text"
                        placeholder="LinkedIn"
                        value={graduate.linkedin}
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
                        value={graduate.github}
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
                        value={graduate.website}
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
                        label={
                          graduate.image
                            ? graduate.image
                            : this.state.profileData.image
                        }
                        help="Upload New Image File."
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
                        label={
                          graduate.resume
                            ? graduate.resume
                            : this.state.profileData.resume
                        }
                        help="Upload New Resume File in PDF format."
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
                    {this.props.isLoading ? "LOADING..." : "UPDATE"}
                  </Button>
                  {this.props.hasError && (
                    <ErrorMessage>
                      Sorry! The Graduate Portal is temporarily down. Our
                      engineers are aware of the problem and are hard at work
                      trying to fix it. Please come back later.
                    </ErrorMessage>
                  )}
                </form>
              </div>
            );
          })}
      </main>
    );
  }
}

export default EditProfile;
