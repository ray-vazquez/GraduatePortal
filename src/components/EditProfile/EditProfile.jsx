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

  // handleEditProfile = e => {
  //   e.preventDefault();
  //   console.log(this.state);
  //   this.setState({
  //     profileData: {
  //       graduateId: this.state.graduateId,
  //       firstName: this.state.firstName,
  //       lastName: this.state.lastName,
  //       skills: this.state.skills,
  //       github: this.state.github,
  //       linkedin: this.state.linkedin,
  //       email: this.state.email,
  //       website: this.state.website,
  //       phone: this.state.phone,
  //       yearOfGrad: this.state.yearOfGrad,
  //       inage: this.state.image,
  //       resume: this.state.resume,
  //       story: this.state.story,
  //       isActive: this.state.isActive
  //     }
  //   });
  //   this.props.fetchProfileEdit(this.state.profileData);
  // };

  componentDidMount() {
    let id = this.props.match.params.graduateId;
    if (!this.props.profiles)
      this.props.fetchAllProfiles().then(() => {
        this.setState({
          profileData: this.props.profiles[id]
        });
      });
  }

  render() {
    console.log("from render:", this.props.profiles);
    return (
      <main className="">
        <div className="card">
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
                  value={this.state.profileData.skills}
                  onChange={e =>
                    this.setState({
                      profileData: {
                        ...this.state.profileData,
                        skills: [e.target.value]
                      }
                    })
                  }
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
                </Col>
              </FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                LinkedIn
              </Col>
              <Col sm={10}>
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
                  label={
                    this.state.profileData.image
                      ? this.state.profileData.image
                      : "None"
                  }
                  help="Upload New Image"
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
                  label={
                    this.state.profileData.resume
                      ? this.state.profileData.resume
                      : "None"
                  }
                  help="Upload New Resume"
                  onChange={e => this.setState({ resume: e.target.value })}
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
                Sorry! The Graduate Portal is temporarily down. Our engineers
                are aware of the problem and are hard at work trying to fix it.
                Please come back later.
              </ErrorMessage>
            )}
          </form>
        </div>
      </main>
    );
  }
}

export default EditProfile;
