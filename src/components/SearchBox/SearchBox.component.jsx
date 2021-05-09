import React, { useRef } from "react";
import "./searchbox.styles.css"

function SearchBox({ handleSearchUser }) {
  const refInput = useRef(null);
  return (
    <div className="searchbox-container">
      <button className="search-btn invisible">Search</button>
      <input type="search" placeholder="Search" ref={refInput} />
      <button
      className="search-btn"
        onClick={() => {
          console.log(`Search User: ${refInput.current.value}`);
          handleSearchUser(refInput.current.value);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBox;
