import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  Button,
  InputGroup,
  Glyphicon
} from "react-bootstrap";

import { Media } from "react-bootstrap";

import SearchResult from "./SearchResult";
import "./Search.css";
import Loading from "../Widgets/Loading";
import ErrorMessage from "../Widgets/ErrorMessage";

class Search extends Component {
  state = {
    searchInput: "",
    profiles: [] //local state after getting from store
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.searchProfiles(this.state.searchInput);
  // };

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
    if (!this.props.profiles) this.props.fetchAllProfiles();

    //From Bill's Filter
    // this.setState({
    //   profiles: this.props.profiles
    // });
  }

  componentWillUpdate(nextProps) {
    if (this.state.profiles !== nextProps.profiles) {
      this.setState({
        profiles: nextProps.profiles
      });
    }
  }

  render() {
    return (
      <div className="ProfileDirectory">
        <div className="">
          <h1>Employer Portal</h1>
        </div>
        <main className="">
          <FormGroup>
            <FormControl
              type="text"
              className="login-input"
              placeholder="Enter name or skills"
              aria-label="Search Input"
              value={this.state.searchInput}
              onChange={e => this.handleChange(e)}
            />
          </FormGroup>

          {/* <div className="inner-addon right-addon">
            <i className="glyphicon glyphicon-search" />
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name or Skills"
              value={this.state.searchInput}
              onChange={e => this.props.searchProfiles(e.target.value)}
            />
          </div> */}

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
                const key = "graduate-" + graduate.graduate_id;

                return (
                  <div className="card" key={key}>
                    <Media>
                      <Media.Left>
                        <img
                          className="profile-thumbnail"
                          width={200}
                          height={200}
                          src={graduate.image}
                          alt=""
                        />
                      </Media.Left>
                      <Media.Body>
                        <Media.Heading>
                          <p>{graduate.firstName + " " + graduate.lastName} </p>
                        </Media.Heading>
                        <p>{graduate.skills.join(", ")}</p>
                        <p>{graduate.story}</p>

                        <i className="fab fa-linkedin-in" />

                        <i className="fab fa-github" />
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
