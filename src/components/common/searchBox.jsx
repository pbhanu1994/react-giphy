import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBox = ({ searchTerm, onChange }) => {
  return (
    <div className="input-group input-group-lg m-2" style={{ width: "500px" }}>
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-lg">
          Search
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
      <button type="submit" className="btn btn-primary">
        <FontAwesomeIcon icon="search" />
      </button>
    </div>
  );
};

export default SearchBox;
