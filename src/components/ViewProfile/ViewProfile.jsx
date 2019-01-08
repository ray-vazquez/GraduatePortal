import React, { Component } from "react";
import { Button, Media } from "react-bootstrap";
import Loading from "../Widgets/Loading";
import ErrorMessage from "../Widgets/ErrorMessage";

class ViewProfile extends Component {
  state = {
    isAdmin: true,
    isLoading: true,
    hasError: false,
    graduateId: this.props.match.params.graduateId,
    profileData: null //local state after getting from store
  };

  filterGraduate = () => {
    console.log("filterProfiles", this.props.profiles);
    let searchTerms = this.state.graduateId;

    const profiles = Object.values(this.props.profiles).filter(profile => {
      let profileTerms = profile.skills

        .concat(profile.firstName)

        .concat(profile.lastName);

      for (let searchTerm of searchTerms) {
        let regexSearchTerm = new RegExp(searchTerm, "i");

        for (let profileTerm of profileTerms) {
          if (regexSearchTerm.test(profileTerm)) return true;
        }
      }

      return false;
    });
    return this.setState({ profiles });
  };

  componentDidMount() {
    if (!this.props.profiles)
      this.props.fetchAllProfiles().then(() => {
        this.setState({
          profiles: this.props.profiles
        });
      });
  }

  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <div className="ProfileDirectory">
        <main className="">
          <div className="ProfileView-profile">
            {this.state.isLoading && <Loading />}
            {this.state.hasError && (
              <ErrorMessage>
                Sorry! The Graduate Portal is temporarily down. Our engineers
                are aware of the problem and are hard at work trying to fix it.
                Please come back later.
              </ErrorMessage>
            )}
            {this.state.graduateId &&
              Object.values(this.state.profiles).filter(graduate => {
                const key = "graduate-" + graduate.graduateId;
                return (
                  graduate.graduateId === this.state.graduateId && (
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
                            <p>
                              {graduate.firstName + " " + graduate.lastName}{" "}
                            </p>
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
                  )
                );
              })}
          </div>
        </main>
      </div>
    );
  }
}

export default ViewProfile;
