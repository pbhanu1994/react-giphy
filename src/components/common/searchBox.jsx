import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBox = ({ searchTerm, onChange }) => {
  return (
    <div className="input-group input-group-lg mt-2" style={{ width: "340px" }}>
      <div className="input-group-prepend">
        <span
          className="input-group-text"
          style={{ backgroundColor: "#ffc107" }}
          id="inputGroup-sizing-lg"
        >
          <FontAwesomeIcon icon="search" />
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="eg: harry potter"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
        onChange={e => onChange(e.currentTarget.value)}
        value={searchTerm}
      />
    </div>
  );
};

export default SearchBox;
