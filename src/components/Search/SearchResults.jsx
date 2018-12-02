import React from "react";
import { Media } from 'react-bootstrap';


function SearchResults({ profiles, isAdmin }) {
  return (
    Object.values(profiles).map(profile => {
      return (
        <Media
          key={profile.id}
          profile={profile} >
          <Media.Left>
            <img width={64} height={64} src={profile.image} alt={profile.firstName + " " + profile.lastName} />
          </Media.Left>
          <Media.Body>
            <Media.Heading>{profile.firstName + " " + profile.lastName}</Media.Heading>
            <p>{profile.story}</p>
          </Media.Body>
        </Media>
      );
    })
  );
}

export default SearchResults;
