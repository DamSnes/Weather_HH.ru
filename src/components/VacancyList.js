import React from "react";
import "./App.css";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

const VacancyList = props => {
  const { items, searchText } = props;
  return (
    <div className="list">
      {items &&
        items.map(({ salary, name, id, area, snippet, loading }) => (
          <div key={id}>
            {loading ? (
              <div className="loader-wrapper">
                <CircularProgress className="loader" />
              </div>
            ) : (
              <div className="list-item">
                <Link
                  to={{ pathname: `/vacancy/${id}`, params: searchText }}
                  className="vacancy-name"
                >
                  <p>{name}</p>
                </Link>

                <div className="vacancy-text">{snippet.responsibility}</div>

                <div className="vacancy-city">{area.name}</div>

                <div className="vacancy-salary">
                  {salary && (salary.from || salary.to)}
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default VacancyList;
