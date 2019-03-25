import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Giphys from "./components/giphys";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

library.add(faSearch);

console.log(process.env);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();