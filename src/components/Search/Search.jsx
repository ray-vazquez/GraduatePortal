import React, { Component } from "react";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import { Media } from "react-bootstrap";

import Loading from "../Widgets/Loading";
import ErrorMessage from "../Widgets/ErrorMessage";

import "./Search.css";
import noPic from "../../images/no-profile.svg"; //if no profile picture use this default pic

class Search extends Component {
  state = {
    searchInput: "",
    profiles: null //local state after getting from store
  };

  handleChange = e => {
    this.setState({ searchInput: e.target.value }, () => this.filterProfiles());
  };

  filterProfiles = () => {
    console.log("filterProfiles", this.props.profiles);
    let searchTerms = this.state.searchInput.split(" ");

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

  addDefaultSrc(e) {
    e.target.src = noPic;
  }

  componentDidMount() {
    if (!this.state.profiles)
      this.props.fetchAllProfiles().then(() => {
        this.setState({ profiles: this.props.profiles });
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="ProfileDirectory">
        <div className="">
          <h1>Employer Portal</h1>
        </div>
        <main className="">
          <FormGroup>
            <span className="search-icon">
              <a>
                <i className="fas fa-search" />
              </a>
            </span>
            <FormControl
              type="text"
              className="login-input"
              placeholder="Enter name or skills"
              aria-label="Search Input"
              value={this.state.searchInput}
              onChange={e => this.handleChange(e)}
            />
          </FormGroup>

          <div className="ProfileDirectory-profiles">
            {this.state.isLoading && <Loading />}
            {this.state.hasError && (
              <ErrorMessage>
                Sorry! The Graduate Portal is temporarily down. Our engineers
                are aware of the problem and are hard at work trying to fix it.
                Please come back later.
              </ErrorMessage>
            )}
            {this.state.profiles &&
              Object.values(this.state.profiles).map(graduate => {
                const key = "graduate-" + graduate.id;

                // For Story
                const isBioLong = graduate.story.length > 200;
                const gradStory = isBioLong
                  ? graduate.story.substring(0, 200) + "..."
                  : graduate.story;
                const fullBio = graduate.story;
                const viewLink = "/profile/" + graduate.id;
                return (
                  <div className="card" key={key}>
                    <Media>
                      <Media.Left>
                        <a href={`/profile/${graduate.id}`}>
                          {graduate.image ? (
                            <img
                              className="profile-thumbnail"
                              width={100}
                              src={graduate.image}
                              alt=""
                              onError={this.addDefaultSrc}
                            />
                          ) : (
                            <img
                              className="profile-thumbnail"
                              width={100}
                              src={noPic}
                              alt=""
                            />
                          )}
                        </a>
                      </Media.Left>
                      <Media.Body>
                        <Media.Heading>
                          <p>
                            <a href={viewLink}>
                              {graduate.firstName + " " + graduate.lastName}
                            </a>{" "}
                          </p>
                        </Media.Heading>
                        <p>{graduate.yearOfGrad}</p>
                        <p>{graduate.skills.join(", ")}</p>

                        {/* If Bio is long show Read More button */}
                        {isBioLong ? <p>{gradStory}</p> : <p>{fullBio}</p>}

                        {graduate.links &&
                          Object.entries(graduate.links).map(profileLinks => {
                            const [linkKey, linkVal] = profileLinks;
                            console.log(linkKey, linkVal);
                            const icons = {
                              linkedin: "fab fa-linkedin-in",
                              github: "fab fa-github",
                              website: "fas fa-globe",
                              email: "fas fa-envelope"
                            };
                            // test to see if its truthy
                            if (graduate.links[linkKey])
                              return (
                                <span className="" key={linkKey}>
                                  <a
                                    href={
                                      graduate.links[linkKey] ===
                                      graduate.links.email
                                        ? `mailto:${graduate.links.email}`
                                        : graduate.links[linkKey]
                                    }
                                    target={"_blank"}
                                  >
                                    <i className={`${icons[linkKey]} fa-lg`} />
                                  </a>
                                </span>
                              );
                          })}

                        {graduate.resume && (
                          <Button
                            bsStyle="primary"
                            bsSize="small"
                            href={graduate.resume}
                          >
                            <span>
                              <i className="fas fa-eye" />
                            </span>
                            View Resume
                          </Button>
                        )}

                        {/* View Profile Button */}
                        <Button
                          bsStyle="primary"
                          bsSize="small"
                          href={`/profile/${graduate.id}`}
                        >
                          <span>
                            <i className="fas fa-eye" />
                          </span>
                          View Profile
                        </Button>

                        {/* Edit Profile Button */}
                        {this.props.isAdmin && (
                          <span>
                            <Button
                              bsStyle="primary"
                              bsSize="small"
                              href={`/profile/${graduate.id}/edit`}
                            >
                              Edit Profile
                            </Button>
                          </span>
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

export default Search;
