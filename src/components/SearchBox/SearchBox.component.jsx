import React, { useRef } from "react";

function SearchBox({ handleSearchUser }) {
  const refInput = useRef(null);
  return (
    <div>
      <input type="search" placeholder="Search" ref={refInput} />
      <button
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
