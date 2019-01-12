import React, { Component } from "react";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import { Media } from "react-bootstrap";

import Loading from "../Widgets/Loading";
import ErrorMessage from "../Widgets/ErrorMessage";

import noPic from "../../images/no-profile.svg";
import "./Search.css";

class Search extends Component {
  state = {
    searchInput: "",
    profiles: null //local state after getting from store
  };

  handleChange = e => {
    this.setState({ searchInput: e.target.value }, () => this.filterProfiles());
  };

  filterProfiles = () => {
    // convert search input to an array of terms without leading/trailing white space
    let searchTerms = this.state.searchInput.toLowerCase().trim().split(" ");

    const profiles = Object.values(this.props.profiles).filter(profile => {
      let profileSkills = profile.skills.reduce((arr, term) => arr.concat(term.toLowerCase()), []);
      let profileNames = []
        .concat(profile.firstName.toLowerCase())
        .concat(profile.lastName.toLowerCase());
        for (let searchTerm of searchTerms) {
          for (let name of profileNames) {
          // first compare each search term to first/last names for a partial match
          // the regex escapes any special characters so there are no errors when creating new RegExp
            let nameSearchTerm = searchTerm.replace(/[^\w\s]/g, "\\$&");
            let searchTermRegex = new RegExp(nameSearchTerm, "i");
            if (searchTermRegex.test(name)) return true;
          };
          // then, if no name matches, ensure the term is an exact match to one of the skills
          if (!profileSkills.includes(searchTerm.toLowerCase())) return false;
        };
        return true;
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
    return (
      <div className="search">
        <div className="search-wrap container-fluid">
          <header className="container">
            <h1>Graduate Portal</h1>
            <div className="search-input">
              <FormGroup>
                <span className="search-icon">
                  <i className="fas fa-search" />
                </span>
                <FormControl
                  type="text"
                  className="login-input"
                  placeholder="Filter graduates by name or skills"
                  aria-label="Search Input"
                  value={this.state.searchInput}
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
            </div>
          </header>
        </div>
        <main className="profile-directory">
          <div>
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
                const isBioLong = graduate.story.length > 270;
                const gradStory = isBioLong
                  ? graduate.story.substring(0, 270) + "..."
                  : graduate.story;
                const fullBio = graduate.story;
                const viewLink = "/profile/" + graduate.id;
                return (
                  <div className="card" key={key}>
                    <Media>
                      <Media.Left>
                        <a href={`/profile/${graduate.id}`}
                          className="profile-thumbnail">
                          {graduate.image ? (
                            <img
                              width={100}
                              src={graduate.image}
                              alt="profile"
                              onError={this.addDefaultSrc}
                            />
                          ) : (
                            <img
                              width={100}
                              src={noPic}
                              alt="profile missing"
                            />
                          )}
                        </a>
                      </Media.Left>
                      <Media.Body>
                        <Media.Heading>
                            <a href={viewLink}>
                              {graduate.firstName + " " + graduate.lastName}
                            </a>{" "}
                        </Media.Heading>
                        <p>{graduate.yearOfGrad}</p>
                        <p className="skills">{graduate.skills.join(", ")}</p>

                        {/* If Bio is long show Read More button */}
                        {isBioLong ? <p>{gradStory}</p> : <p>{fullBio}</p>}

                        {graduate.links &&
                          Object.keys(graduate.links).map(linkKey => {
                            const icons = {
                              linkedin: "fab fa-linkedin-in",
                              github: "fab fa-github",
                              website: "fas fa-globe",
                              email: "fas fa-envelope"
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
                                  target={"_blank"}
                                >
                                  <i className={`${icons[linkKey]} fa-lg acc-primary`} />
                                </Button>
                              );
                              else return null;
                          })}

                        {graduate.resume && (
                          <Button
                            className="grad-btn grad-btn-primary"
                            bsSize="small"
                            href={graduate.resume}
                          >
                            View Resume
                          </Button>
                        )}

                        {/* View Profile Button */}
                        <Button
                          className="grad-btn grad-btn-primary"
                          bsSize="small"
                          href={`/profile/${graduate.id}`}
                        >
                          View Profile
                        </Button>

                        {/* Edit Profile Button */}
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
        </main>
      </div>
    );
  }
}

export default Search;
