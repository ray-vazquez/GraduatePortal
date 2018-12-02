import React, { Component } from "react";

import { InputGroup, ControlLabel, FormControl, Button, Glyphicon } from 'react-bootstrap';
import SearchResults from "./SearchResults";
import Loading from "../Widgets/Loading";
import ErrorMessage from "../Widgets/ErrorMessage";

class Search extends Component {
  
  handleChange = searchInput => {
    this.props.setSearchInput(searchInput)
    this.props.searchProfiles(this.props.searchInput);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <ControlLabel>SEARCH GRADUATES</ControlLabel>
        <InputGroup>
          <FormControl
            type="text"
            value={this.props.searchInput}
            onChange={e => this.handleChange(e.target.value)}
            placeholder={"Enter name or skill(s)"} />
            <InputGroup.Button>
              <Button 
                type="button"
                onClick={() => this.props.searchProfiles(this.props.searchInput)} >
                <Glyphicon glyph="search" />
              </Button>
            </InputGroup.Button>
        </InputGroup>

        {this.props.isLoading && <Loading />}
        {this.props.hasError && (
          <ErrorMessage>
            We're sorry. There seems to be a problem accessing the server. Please try again later.
          </ErrorMessage>
        )}
        {/* Nested conditional to determine whether to render anything below the search box */}
        {this.props.searchStarted && (
        Object.values(this.props.profiles)[0] ? 
          <div>
            <p><b>SEARCH RESULTS</b></p>
            <SearchResults 
              profiles={this.props.profiles}
              isAdmin={this.props.isAdmin} />
          </div>
        :
          <div>
            <p>No results found matching your search terms.</p>
          </div>
        )}
      </div>
    );
  }
}

export default Search;