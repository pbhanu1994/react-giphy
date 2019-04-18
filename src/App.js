import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import WelcomeScreen from "./components/welcomeScreen";
import signUp from "./components/signUpForm";
import Login from "./components/loginForm";
import Giphys from "./components/giphys";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Switch>
          <Route path="/giphys" exact component={Giphys} />
          <Route exact path="/" component={WelcomeScreen} />
          <Route path="/signup" component={signUp} />
          <Route path="/login" component={Login} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default App;
