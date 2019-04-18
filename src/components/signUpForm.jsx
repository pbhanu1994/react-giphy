import React, { Component } from "react";
import NavBar from "./common/navBar";
import firebase from "firebase/app";
import "firebase/auth";
import { config } from "../firebase/firebase";

class SignUp extends Component {
  constructor() {
    super();
    firebase.initializeApp(config);
  }
  state = {
    username: "",
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
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        console.log("Response", authUser);
        this.setState({ ...this.state });
        this.props.history.push("/welcome");
      })
      .catch(error => this.setState({ error }));
    console.log("Submit called");
  };

  render() {
    console.log("Props here", this.props);
    return (
      <React.Fragment>
        <NavBar />
        <h1>Sign Up</h1>
        {/* <FirebaseContext.Consumer>
          {firebase => <signUpForm firebase={firebase} />}
        </FirebaseContext.Consumer> */}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
              onChange={this.handleChange}
              aria-describedby="usernameHelp"
              placeholder="Enter Full name"
            />
          </div>
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Re-enter Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              id="confirmPassword"
              placeholder="Re-enter Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default SignUp;
