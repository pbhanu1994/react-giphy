import React from "react";

const NextButton = ({ nextPage }) => {
  return (
    <button
      onClick={nextPage}
      type="button"
      style={{
        float: "left",
        clear: "both",
        marginLeft: "30%",
        marginTop: "10px",
        marginBottom: "10px"
      }}
      className="btn btn-lg btn-warning"
    >
      <b>Load More</b>
    </button>
  );
};

export default NextButton;
