import React from "react";
import Copyrights from "./common/copyrights";
import { Link } from "react-router-dom";

let username = "";

const WelcomeScreen = ({ location }) => {
  if (location.pathname === "/") {
    username = prompt("What's your name?", "");
  }

  return (
    <React.Fragment>
      <div className="jumbotron m-3">
        <center>
          <h1 className="display-4">GiphyApp!</h1>
          <h2>Hello, {username}!</h2>

          <p className="lead">
            This is a simple React Front-end application for showing Gif images
          </p>
          <hr className="my-4" />
          <p>Note: These are the trending Gif images provided by giphy.com.</p>
          <h4> Are you excited?</h4>
          <Link
            to={{
              pathname: "/giphys",
              state: {
                username: username
              }
            }}
            className="btn btn-warning btn-lg"
          >
            Get Started
          </Link>
        </center>
      </div>
      <Copyrights />
    </React.Fragment>
  );
};

export default WelcomeScreen;
