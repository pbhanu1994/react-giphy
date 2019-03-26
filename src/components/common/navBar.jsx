import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ username }) => {
  return (
    <nav className="navbar navbar-light bg-warning">
      <Link className="navbar-brand" to="/">
        <b>GiphyApp</b>
      </Link>
      <span className="navbar-brand mb-0 h3">{username}</span>
    </nav>
  );
};

export default NavBar;
