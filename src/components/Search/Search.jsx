import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  Button,
  InputGroup,
  Glyphicon
} from "react-bootstrap";

import SearchResult from "./SearchResult";
import "./Search.css";
import Loading from "../Widgets/Loading";
import ErrorMessage from "../Widgets/ErrorMessage";

class Search extends Component {
  state = {
    searchInput: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchProfiles(this.state.searchInput);
  };

  componentDidMount() {}
  render() {
    return (
      <div className="container-search">
        <form className="">
          <header className="">
            <h2>Employer Portal</h2>
          </header>
          <main className="search">
            <FormGroup controlId="formValidationNull" validationState={null}>
              <InputGroup>
                <FormControl
                  type="text"
                  value={this.state.searchInput}
                  placeholder="Enter Name or Skills"
                  aria-label="Search"
                  onChange={e => this.setState({ searchInput: e.target.value })}
                />
                <InputGroup.Button>
                  <Glyphicon glyph="search" />
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
            <div className="">
              {this.state.hasError ? (
                <p>We are sorry, an error has occurred.</p>
              ) : null}
              {this.state.isLoading ? <p>Loading ...</p> : null}
            </div>
          </main>
        </form>
      </div>
    );
  }
}

export default Search;
