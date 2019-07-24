import React from "react";
import "./App.css";
import { CircularProgress } from "@material-ui/core";
import Info from "./components/info";
import WeatherForm from "./components/form";
import VacancyList from "./components/VacancyList";
import Button from "@material-ui/core/Button";
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
      <>
      <div className = "header">
        <h1></h1>
        <Button onClick = {this.filterItem} className = "button-sort" variant="contained" color="primary" type="submit">
          сортировка
        </Button>
      </div>
      <div className="container">
        {loading ? (
          <div className="loader-wrapper">
            <CircularProgress className="loader" />
          </div>
        ) : (
          <VacancyList items={vacancies} />
        )}

        <WeatherForm wMet={this.getWeather} {...weatherProps} />
      </div>
      </>
    );
  }
}

export default App;
