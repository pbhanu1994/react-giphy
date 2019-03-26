import React from "react";

const NextButton = ({ nextPage }) => {
  return (
    <button
      onClick={nextPage}
      type="button"
      className="btn btn-lg btn-warning m-5"
    >
      <b>Load More</b>
    </button>
  );
};

export default NextButton;
