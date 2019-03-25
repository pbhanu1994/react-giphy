import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container m-3">
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">
          Uh-Oh!{" "}
          <span role="img" aria-label="Not Found">
            😔
          </span>
        </h4>
        <p>Aww yeah, it seems like you requested a wrong Page</p>
        <hr />
        <p className="mb-0">
          <Link to="/">Click here</Link> to go to Home Page.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
