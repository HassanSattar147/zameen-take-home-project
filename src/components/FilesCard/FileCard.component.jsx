import React, { useState } from "react";
import "./file-card.styles.css";

function FileCard({ fileDetails }) {
  const { filename, type, language, content } = fileDetails;
  const [isContentVisible, setIsContentVisible] = useState(false);
  return (
    <div>
      <div className="file-card">
        <p>{filename}</p>
        <p>{type}</p>
        <p>{language}</p>
        <button onClick={() => setIsContentVisible(!isContentVisible)}>
          {isContentVisible ? "Hide " : "Show "} Content
        </button>
        {isContentVisible && <p>{content}</p>}
      </div>
    </div>
  );
}

export default FileCard;
