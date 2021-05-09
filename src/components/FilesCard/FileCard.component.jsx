import React from "react";
import "./file-card.styles.css";

function FileCard({ fileDetails }) {
  const { filename, type, language, content } = fileDetails;
  return (
    <div>
      <div className="file-card">
        <p>{filename}</p>
        <p>{type}</p>
        <p>{language}</p>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default FileCard;
