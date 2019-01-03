import React, { Component } from "react";
import { FormGroup, FormControl, Button } from "react-bootstrap";

import { Media } from "react-bootstrap";

import "./Search.css";
import Loading from "../Widgets/Loading";
import ErrorMessage from "../Widgets/ErrorMessage";

class Search extends Component {
  state = {
    searchInput: "",
    profiles: [] //local state after getting from store
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

  componentDidMount() {
    if (!this.props.profiles)
      this.props.fetchAllProfiles().then(() => {
        this.setState({ profiles: this.props.profiles });
      });
  }

  render() {
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
                            Edit Resume
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
