import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import VacancyList from "./components/VacancyList";
import vacancy from "./components/vacancy";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route path="/vacancy" component={vacancy} />
  </BrowserRouter>,

  document.getElementById("root")
);
