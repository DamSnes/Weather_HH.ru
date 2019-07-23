import React from "react";
import "./App.css";
import Info from "./components/info";
import WeatherForm from "./components/form";
import VacancyList from "./components/VacancyList";

import { getWheatherData } from "./sources/wheather";
import { getVacancies } from "./sources/headhunter";

class App extends React.Component {
  state = {
    loading: true,
    temp: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
    vacancies: []
  };

  async componentDidMount() {
    const { items } = await getVacancies();
    //console.log(items);
    this.setState({ vacancies: items, loading: false });
  }

  getWeather = async event => {
    event.preventDefault();

    const data = await getWheatherData();

    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      error: ""
    });
  };

  render() {
    const { loading, vacancies, ...weatherProps } = this.state;

    return (
      <div className="container">
        {loading ? "Идет загрузка..." : <VacancyList items={vacancies} />}

        <WeatherForm wMet={this.getWeather} {...weatherProps} />
      </div>
    );
  }
}

export default App;
