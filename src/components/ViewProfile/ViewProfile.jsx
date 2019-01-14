import React, { Component } from "react";
import { Button, Media } from "react-bootstrap";

import Loading from "../Widgets/Loading";
import ErrorMessage from "../Widgets/ErrorMessage";
import noPic from "../../images/no-profile.svg";

class ViewProfile extends Component {
  state = {
    graduateId: this.props.match.params.graduateId,
    profileData: null
  };

  addDefaultSrc(e) {
    e.target.src = noPic;
  }

  componentDidMount() {
    this.props.fetchAllProfiles().then(() => {
      this.setState({
        profileData: Object.values(this.props.profiles).filter(profile => {
          return profile.id === parseInt(this.state.graduateId);
        })
      });
    });
  }

  render() {
    return (
      <div>
        <div className="header-wrap container-fluid">
          <header className="container grad-header">
            <h1>Graduate Profile</h1>
            {/* Edit Profile Button */}
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
        <main className="container">
          <div className="profile-directory">
            <div className="ProfileDirectory-profiles">
              {this.state.isLoading && <Loading />}
              {this.state.hasError && (
                <ErrorMessage>
                  Sorry! The Graduate Portal is temporarily down. Our engineers
                  are aware of the problem and are hard at work trying to fix
                  it. Please come back later.
                </ErrorMessage>
              )}
              {this.state.profileData &&
                Object.values(this.state.profileData).map(graduate => {
                  const key = "graduate-" + graduate.id;
                  return (
                    <div className="card" key={key}>
                      <Media>
                        <Media.Left>
                          <div className="profile-thumbnail">
                            {graduate.image ? (
                              <img
                                width={100}
                                height={100}
                                src={graduate.image}
                                alt="profile"
                                onError={this.addDefaultSrc}
                              />
                            ) : (
                              <img
                                width={100}
                                height={100}
                                src={noPic}
                                alt="profile missing"
                              />
                            )}
                          </div>
                        </Media.Left>
                        <Media.Body>
                          <Media.Heading>
                            {graduate.firstName + " " + graduate.lastName}
                          </Media.Heading>
                          <p>{graduate.yearOfGrad}</p>
                          <p className="skills">{graduate.skills.join(", ")}</p>
                          <p>{graduate.story}</p>
                          {graduate.phone && <p>Phone: {graduate.phone}</p>}

                          {graduate.links &&
                            Object.entries(graduate.links).map(profileLinks => {
                              const [ linkKey ] = profileLinks;
                              const icons = {
                                linkedin: "fab fa-linkedin-in",
                                github: "fab fa-github",
                                website: "fas fa-globe",
                                email: "fas fa-envelope"
                              };
                              const titles = {
                                linkedin: `View ${
                                  graduate.firstName
                                }'s linkedin profile`,
                                github: `View ${
                                  graduate.firstName
                                }'s github profile`,
                                website: `View ${graduate.firstName}'s website`,
                                email: `Contact ${graduate.firstName}`
                              };
                              // test to see if its truthy
                              if (graduate.links[linkKey])
                                return (
                                  <Button
                                    key={linkKey}
                                    className="grad-btn grad-btn-primary links"
                                    bsSize="small"
                                    href={
                                      graduate.links[linkKey] ===
                                      graduate.links.email
                                        ? `mailto:${graduate.links.email}`
                                        : graduate.links[linkKey]
                                    }
                                    title={titles[linkKey]}
                                    target={
                                      graduate.links[linkKey] ===
                                      graduate.links.email
                                        ? ""
                                        : "_blank"
                                    }
                                  >
                                    <i
                                      className={`${
                                        icons[linkKey]
                                      } fa-lg acc-primary`}
                                    />
                                  </Button>
                                );
                              else return null;
                            })}

                          {graduate.resume && (
                            <Button
                              className="grad-btn grad-btn-primary"
                              bsSize="small"
                              href={graduate.resume}
                              target="_blank"
                            >
                              View Resume
                            </Button>
                          )}

                          {this.props.isAdmin && (
                            <Button
                              className="grad-btn grad-btn-secondary"
                              bsSize="small"
                              href={`/profile/${graduate.id}/edit`}
                            >
                              Edit
                            </Button>
                          )}
                        </Media.Body>
                      </Media>
                    </div>
                  );
                })}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default ViewProfile;
