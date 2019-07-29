import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import VacancyList from "./components/VacancyList";
import Vacancy from "./components/Vacancy";

ReactDOM.render((

  <BrowserRouter>
    <Route path="/" component={App}/>
    <Route path="/Vacancy" component={Vacancy}/>
  </BrowserRouter>
    
 ), document.getElementById('root'))
