import React from "react";

//Inprocess of working , needs to modify. Used from example of User directory,
function SearchResult(props) {
  return (
    <div className="SearchDirectory">
      <div className="Search">
        <input
          type="search"
          placeholder="Search..."
          aria-label="Search"
          className="search"
          onChange={e => this.search(e.target.value)}
        />
      </div>
      <div className="SerachDirectory-searches">
        {this.state.hasError ? (
          <p>We are sorry, an error has occurred.</p>
        ) : null}
        {this.state.isLoading ? <p>Loading ...</p> : null}
        {this.state.profiles.map((profile, index) => {
          const key = "profile-" + index;
          const name =
            profile.name.first[0].toUpperCase() +
            profile.name.first.substring(1) +
            " " +
            profile.name.last[0].toUpperCase() +
            profile.name.last.substring(1);
          return (
            <div className="card" key={key}>
              <div className="card-section media-object">
                <div className="thumbnail">
                  <img src={profile.picture.medium} alt="" />
                </div>
                <div className="media-object-section align-self-middle">
                  <div>
                    <span className="h6">{name}</span>
                    <br />
                    <a href={"mailto:" + profile.email}>{profile.email}</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {Array.isArray(this.state.profiles) &&
        this.state.profiles.length === 0 &&
        !this.state.isLoading &&
        !this.state.hasError ? (
          <p>No results found.</p>
        ) : null}
      </div>
    </div>
  );
}

export default SearchResult;
