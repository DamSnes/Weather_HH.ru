import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import VacancyList from "./components/VacancyList";
import vacancy from "./components/vacancy";
import respond from "./components/respond"

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={App} />
        <Route path="/vacancy/:id" component={vacancy} />
        <Route path="/respond" component={respond} />

      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
