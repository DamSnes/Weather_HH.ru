import React from "react";
import "./App.css";
import { getVacancyInfo } from "../sources/headhunter";

class Vacancy extends React.Component {
  state = {
    currentVacancy: {}
  };

  async componentWillMount() {
    const id = this.props.location.props;
    const data = await getVacancyInfo(id);
    this.setState({ currentVacancy: data });
  }

  render() {
    const {
      currentVacancy: { name }
    } = this.state;
    return <div>{name}</div>;
  }
}

export default Vacancy;
