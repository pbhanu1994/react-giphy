import React, { Component } from "react";
import NavBar from "./common/navBar";
import firebase from "firebase/app";
import "firebase/auth";
import { config } from "../firebase/firebase";

class Login extends Component {
  constructor() {
    super();
    firebase.initializeApp(config);
  }

  state = {
    email: "",
    password: "",
    error: ""
  };

  handleChange = ({ currentTarget }) => {
    this.setState({ [currentTarget.name]: currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(authUser => {
        console.log("Response Sign in", authUser);
        this.setState({ ...this.state });
        // this.props.history.push("/giphys");
      })
      .catch(error => this.setState({ error: error.message }));
    console.log("Submit called");
  };

  render() {
    let user = firebase.auth().currentUser;
    if (user !== null) {
      console.log("User here", user);
    } else {
      console.log("No user found in Firebase");
    }

    return (
      <React.Fragment>
        <NavBar />
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
