import React from "react";
import GistCard from "../GistCard/GistCard.component";
import "./current-user-gists-container.styles.css";

function CurrentUserGistsContainer({ gistsDetails }) {
  return (
    <div className="gists-container">
      {gistsDetails.map((gistDetails) => (
        <GistCard gistDetails={gistDetails} />
      ))}
    </div>
  );
}

export default CurrentUserGistsContainer;
