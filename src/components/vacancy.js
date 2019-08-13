import React from "react";
import "./App.css";
import { CircularProgress } from "@material-ui/core";
import { getVacancyInfo, vacanciesSearch } from "../sources/headhunter";
import { Link } from "react-router-dom";

const DEFAULT_HH_IMG =
  "https://upload.wikimedia.org/wikipedia/commons/7/79/HeadHunter_logo.png";

class Vacancy extends React.Component {
  state = {
    currentVacancy: {},
    data: {},
    loading: true
  };

  async componentWillMount() {
    const { id } = this.props.match.params;

    const data = await getVacancyInfo(id);
    const temp = await vacanciesSearch("");
    console.log(data, "data");
    this.setState({ currentVacancy: data, loading: false });
  }

  render() {
    const {
      loading,
      currentVacancy: { name, salary, area, description, employer }
    } = this.state;
    const { params } = this.props.location;
    return (
      <>
        <div className="header-vacancy">
          <Link className="button-back" to={{ pathname: `/`, params }}>
            Назад
          </Link>
        </div>

        {loading ? (
          <div className="loader-wrapper">
            <CircularProgress className="loader" />
          </div>
        ) : (
          <div className="content">
            <div className="vacancy-name">{name}</div>

            <div className="vacancy-salary">
              {salary && (salary.from || salary.to)}
            </div>

            <div>{area && area.name}</div>

            <div dangerouslySetInnerHTML={{ __html: description }}></div>

            <div className="logo">
              <img
                src={
                  (employer.logo_urls &&
                    (employer.logo_urls[240] || employer.logo_urls[120])) ||
                  DEFAULT_HH_IMG
                }
              />
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Vacancy;
