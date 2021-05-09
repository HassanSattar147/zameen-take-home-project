import React from "react";
import ForkCard from "../ForkCard/ForkCard.component";
import FileCard from "../FilesCard/FileCard.component";
import "./gist-card.styles.css";

function GistCard({ gistDetails }) {
  const { files, forks } = gistDetails;
  return (
    <div className="gist-card">
      <div className="files-section">
        <h3>{files.length} Files:</h3>
        <hr />
        {files.map((file, index) => (
          <FileCard key={index + "_" + file.filename} fileDetails={file} />
        ))}
      </div>

      <div className="forks-section">
        <h3>{forks.length ? forks.length + " Forks:" : "No Forks!"}</h3>
        <hr />
        <div className="forks-container">
          {forks.map((fork, index) => (
            <ForkCard key={index + "_" + forks.login} forkDetails={fork} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default GistCard;
