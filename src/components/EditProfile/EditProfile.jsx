import React, { Component } from "react";
import history from "../../history";
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

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id} bsClass="form-group grad-form-group">
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
    profileData: {
      graduateId: "",
      firstName: "",
      lastName: "",
      skills: "",
      github: "",
      linkedin: "",
      email: "",
      website: "",
      phone: "",
      yearOfGrad: "",
      image: "",
      resume: "",
      story: "",
      isActive: 1
    },
    submitForm: false,
    storyHeight: 4
  };

  handleEditProfile = e => {
    e.preventDefault();

    // convert skills back to an array and trim leading/trailing white spaces
    let skillsArray = this.state.profileData.skills.split(",");
    for (let i = 0; i < skillsArray.length; i++) {
      skillsArray[i] = skillsArray[i].trim();
    }
    let newProfileData = {
      ...this.state.profileData,
      skills: skillsArray
    };

    const response = this.props.profileEdit(newProfileData);
    this.setState({ submitForm: true, graduateId: response.graduateId });
  };

  closeModal = () => {
    this.setState({
      submitForm: false
    });
  };

  linkToViewProfile = () => {
    this.setState({
      submitForm: false
    });
    history.push(`/profile/${this.state.profileData.graduateId}`);
  };

  addDefaultSrc(e) {
    e.target.src = noPic;
  }

  componentDidMount() {
    let id = this.state.graduateId;
    if (!this.props.profiles)
      // this step shouldn't be necessary (but it is and I don't know why -- Bill)
      this.props.fetchAllProfiles().then(() => {
        this.setState({
          profileData: {
            graduateId: id,
            firstName: this.props.profiles[id].firstName,
            lastName: this.props.profiles[id].lastName,
            // convert skills to a string
            skills: this.props.profiles[id].skills.join(", "),
            github: this.props.profiles[id].links.github,
            linkedin: this.props.profiles[id].links.linkedin,
            email: this.props.profiles[id].links.email,
            website: this.props.profiles[id].links.website,
            phone: this.props.profiles[id].phone,
            yearOfGrad: this.props.profiles[id].yearOfGrad,
            image: this.props.profiles[id].image,
            resume: this.props.profiles[id].resume,
            story: this.props.profiles[id].story,
            isActive: this.props.profiles[id].isActive
          }
        });
      });
    // this is the only place we should be setting the profileData in state
    else {
      let currentProfile = this.props.profiles[id];
      this.setState({
        profileData: {
          graduateId: id,
          firstName: currentProfile.firstName,
          lastName: currentProfile.lastName,
          // convert skills to a string
          skills: currentProfile.skills.join(", "),
          github: currentProfile.links.github,
          linkedin: currentProfile.links.linkedin,
          email: currentProfile.links.email,
          website: currentProfile.links.website,
          phone: currentProfile.phone,
          yearOfGrad: currentProfile.yearOfGrad,
          image: currentProfile.image,
          resume: currentProfile.resume,
          story: currentProfile.story,
          isActive: currentProfile.isActive
        }
      });
    }
  }

  render() {
    return (
      <div>
        {/* New Profile Header */}
        <div className="header-wrap container-fluid">
          <header className="container grad-header">
            <h1>Edit Graduate Profile</h1>
            {/* Add Profile Button */}
            {this.props.isAdmin && (
              <Button
                className="grad-btn grad-btn-secondary add-btn"
                title="Add new graduate profile"
                bsSize="small"
                href={`/profile/add`}
              >
                +
              </Button>
            )}
          </header>
        </div>

        {/* OnSubmit Message */}
        <main className="container grad-form">
          <ModalWidget
            show={this.state.submitForm}
            message={
              "Graduate edited successfully! What would you like to do next?"
            }
            title={"Edit Graduate Profile"}
            closeModal={this.closeModal}
            graduateId={this.state.profileData.graduateId}
            // linkToViewProfile={this.linkToViewProfile}
            // graduate={this.state.profileData}
          />

          {/* Profile Image */}
          <div className="profile-thumbnail form-thumbnail">
            {this.state.profileData.image ? (
              <img
                width={100}
                src={this.state.profileData.image}
                alt="profile"
                onError={this.addDefaultSrc}
              />
            ) : (
              <img width={100} src={noPic} alt="profile missing" />
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
              onChange={e => this.setState({ image: e.target.value })}
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
              onChange={e => this.setState({ resume: e.target.value })}
            />
          </div>
          <div className="clearfix" />

          {/* Profile Form */}
          <form onSubmit={this.handleEditProfile}>
            <FormGroup controlId="first-name">
              <ControlLabel>
                First Name<span className="helper helper-asterisk">*</span>
              </ControlLabel>
              <FormControl
                type="text"
                placeholder="First Name"
                value={this.state.profileData.firstName}
                onChange={e =>
                  this.setState({
                    profileData: {
                      ...this.state.profileData,
                      firstName: e.target.value
                    }
                  })
                }
              />
            </FormGroup>
            <FormGroup controlId="last-name">
              <ControlLabel>
                Last Name<span className="helper helper-asterisk">*</span>
              </ControlLabel>
              <FormControl
                type="text"
                placeholder="Last Name"
                value={this.state.profileData.lastName}
                onChange={e =>
                  this.setState({
                    profileData: {
                      ...this.state.profileData,
                      lastName: e.target.value
                    }
                  })
                }
              />
            </FormGroup>
            <FormGroup controlId="year-of-grad">
              <ControlLabel>
                Year of Graduation
                <span className="helper helper-asterisk">*</span>
              </ControlLabel>
              <FormControl
                type="text"
                placeholder="Year of Graduation"
                value={this.state.profileData.yearOfGrad}
                onChange={e =>
                  this.setState({
                    profileData: {
                      ...this.state.profileData,
                      yearOfGrad: e.target.value
                    }
                  })
                }
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
                onChange={e =>
                  this.setState({
                    profileData: {
                      ...this.state.profileData,
                      skills: e.target.value
                    }
                  })
                }
              />
            </FormGroup>
            <FormGroup controlId="story">
              <ControlLabel>
                Story<span className="helper">(Max 800 characters)</span>
              </ControlLabel>
              <FormControl
                componentClass="textarea"
                placeholder="Story"
                rows={this.state.storyHeight}
                data-min-rows="4"
                maxLength="800"
                value={this.state.profileData.story}
                onChange={e =>
                  this.setState({
                    profileData: {
                      ...this.state.profileData,
                      story: e.target.value
                    }
                  })
                }
              />
            </FormGroup>
            <FormGroup controlId="phone">
              <ControlLabel>Phone Number</ControlLabel>
              <FormControl
                type="text"
                placeholder="Phone Number"
                value={this.state.profileData.phone}
                onChange={e =>
                  this.setState({
                    profileData: {
                      ...this.state.profileData,
                      phone: e.target.value
                    }
                  })
                }
              />
            </FormGroup>
            <FormGroup controlId="email">
              <ControlLabel>
                Email<span className="helper helper-asterisk">*</span>
              </ControlLabel>
              <FormControl
                type="text"
                placeholder="Email"
                value={this.state.profileData.email}
                onChange={e =>
                  this.setState({
                    profileData: {
                      ...this.state.profileData,
                      email: e.target.value
                    }
                  })
                }
              />
            </FormGroup>
            <FormGroup controlId="linkedin">
              <ControlLabel>LinkedIn</ControlLabel>
              <FormControl
                type="text"
                placeholder="LinkedIn"
                value={this.state.profileData.linkedin}
                onChange={e =>
                  this.setState({
                    profileData: {
                      ...this.state.profileData,
                      linkedin: e.target.value
                    }
                  })
                }
              />
            </FormGroup>
            <FormGroup controlId="github">
              <ControlLabel>GitHub</ControlLabel>
              <FormControl
                type="text"
                placeholder="GitHub"
                value={this.state.profileData.github}
                onChange={e =>
                  this.setState({
                    profileData: {
                      ...this.state.profileData,
                      github: e.target.value
                    }
                  })
                }
              />
            </FormGroup>
            <FormGroup controlId="website">
              <ControlLabel>Website</ControlLabel>
              <FormControl
                type="text"
                placeholder="Website"
                value={this.state.profileData.website}
                onChange={e =>
                  this.setState({
                    profileData: {
                      ...this.state.profileData,
                      website: e.target.value
                    }
                  })
                }
              />
            </FormGroup>
            <Button
              type="submit"
              className="btn grad-btn grad-btn-secondary"
              disabled={this.props.isLoading === true}
            >
              {this.props.isLoading ? "LOADING..." : "UPDATE"}
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

export default EditProfile;
