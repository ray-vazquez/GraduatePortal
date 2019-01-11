import React, { Component } from "react";
import { Button } from "react-bootstrap";

import { Media } from "react-bootstrap";

import "./ViewProfile.css";
import Loading from "../Widgets/Loading";
import ErrorMessage from "../Widgets/ErrorMessage";

class ViewProfile extends Component {
  state = {
    graduateId: this.props.match.params.graduateId,
    profileData: null,
    isAdmin: false
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
    console.log(this.state.profileData);
    console.log(this.props);
    return (
      <div className="ProfileDirectory">
        <main className="">
          <div className="ProfileDirectory-profiles">
            {this.state.isLoading && <Loading />}
            {this.state.hasError && (
              <ErrorMessage>
                Sorry! The Graduate Portal is temporarily down. Our engineers
                are aware of the problem and are hard at work trying to fix it.
                Please come back later.
              </ErrorMessage>
            )}
            {this.state.profileData &&
              Object.values(this.state.profileData).map(graduate => {
                const key = "graduate-" + graduate.id;
                return (
                  <div className="card" key={key}>
                    <Media>
                      <Media.Left>
                        <img
                          className="profile-thumbnail"
                          width={100}
                          src={graduate.image}
                          alt=""
                        />
                      </Media.Left>
                      <Media.Body>
                        <Media.Heading>
                          <p>{graduate.firstName + " " + graduate.lastName} </p>
                        </Media.Heading>
                        <p>{graduate.yearOfGrad}</p>
                        <p>{graduate.skills.join(", ")}</p>
                        <p>{graduate.story}</p>

                        <a href={graduate.links.linkedin}>
                          <i className="fab fa-linkedin-in fa-lg" />
                        </a>

                        <a href={graduate.links.github}>
                          <i className="fab fa-github fa-lg" />
                        </a>

                        <a href={graduate.links.website}>
                          <i className="fas fa-globe fa-lg" />
                        </a>
                        <a href={graduate.links.email}>
                          <i className="fas fa-envelope fa-lg" />
                        </a>

                        <Button
                          bsStyle="primary"
                          bsSize="small"
                          onClick={graduate.resume}
                        >
                          <span>
                            <i className="fas fa-eye" />
                          </span>
                          View Resume
                        </Button>

                        {this.state.isAdmin && (
                          <Button bsStyle="primary" bsSize="small">
                            Edit Profile
                          </Button>
                        )}
                      </Media.Body>
                    </Media>
                  </div>
                );
              })}
          </div>
        </main>
      </div>
    );
  }
}

export default ViewProfile;
