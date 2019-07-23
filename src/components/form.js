import React from "react";
import Button from "@material-ui/core/Button";
import "./App.css";
import WeatherData from "./weather";

class Form extends React.Component {
  render() {
    const { city, country, error, sunrise, sunset, temp } = this.props;

    return (
      <form onSubmit={this.props.wMet} className="weather-form">
        <h2>Погода</h2>
        <Button variant="contained" color="primary" type="submit">
          Получить
        </Button>
        <WeatherData
          temp={temp}
          city={city}
          country={country}
          sunrice={sunrise}
          sunset={sunset}
          error={error}
        />
      </form>
    );
  }
}

export default Form;
