import React from "react";
import "./App.css";
import { CircularProgress } from "@material-ui/core";
import VacancyList from "./components/VacancyList";
import { getVacancies, vacanciesSearch } from "./sources/headhunter";
import vacancy from "./components/vacancy";

class App extends React.Component {
  state = {
    vacancies: [],
    itemText: "",
    search: "",
    loading: true
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({ itemText: value });
  };

  handleSubmit = async () => {
    const { itemText } = this.state;
    if (itemText) {
      const data = await vacanciesSearch(itemText);
      this.setState({ vacancies: data.items, search: itemText });
    }
  };

  clear = async () => {
    const { itemText, vacancies } = this.state;
    const { items } = await getVacancies();
    this.setState({ itemText: "", vacancies: items });
  };

  async componentDidMount() {
    console.log(this.props, "props");
    const { params } = this.props.location;
    let data;
    if (params) {
      data = await vacanciesSearch(params);
    } else {
      data = await getVacancies();
    }
    const { items } = data;
    //console.log(items);
    this.setState({
      vacancies: items,
      loading: false,
      itemText: params,
      search: params
    });
  }

  render() {
    const { loading, vacancies, itemText, search } = this.state;

    return (
      <>
        <div className="header">
          <div className="clear-button" onClick={this.clear}>
            {" "}
            Отмена{" "}
          </div>
          <input
            className="input"
            value={itemText}
            onChange={this.onChange}
            placeholder="Поиск..."
          ></input>

          <div className="submitButton" onClick={this.handleSubmit}>
            Найти
          </div>
        </div>
        <div className="container">
          {loading ? (
            <div className="loader-wrapper">
              <CircularProgress className="loader" />
            </div>
          ) : (
            <VacancyList items={vacancies} searchText={search} />
          )}
        </div>
      </>
    );
  }
}

export default App;
