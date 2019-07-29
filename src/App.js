import React from "react";
import "./App.css";
import { CircularProgress } from "@material-ui/core";
import VacancyList from "./components/VacancyList";
import { getVacancies } from "./sources/headhunter";
import Vacancy from "./components/Vacancy";


class App extends React.Component {
  state = {
    vacancies: []
  };
  
  async componentDidMount() {
    const { items } = await getVacancies();
    //console.log(items);
    this.setState({ vacancies: items, loading: false });
    
  }

  


  render() {
    const { loading, vacancies} = this.state;

    return (
      <>
<<<<<<< HEAD
      
      <div className = "header"></div>
=======
      <div className = "header">
        <h1></h1>
        <Button className = "button-sort" variant="contained" color="primary" type="submit">
          сортировка
        </Button>
      </div>
>>>>>>> 5d2cbd9aa9e246f23624e207260420bea59285b1
      <div className="container">
        {loading ? (
          <div className="loader-wrapper">
            <CircularProgress className="loader" />
          </div>
        ) : (
          <VacancyList items={vacancies} />
        )}

      </div>
      </>
    );
  }
}

export default App;
