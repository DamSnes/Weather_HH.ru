import React from "react";
import "./App.css";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

const DEFAULT_HH_IMG =
  "https://upload.wikimedia.org/wikipedia/commons/7/79/HeadHunter_logo.png";

const VacancyList = props => {
  const { items, searchText } = props;
  console.log(items);
  return (
    <div className="list">
      {items &&
        items.map(({ salary, name, id, area, snippet, loading, employer }) => (
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
                  
                  <div className="block"><p>{name}</p></div>
                  
                  <div className="block2">
                  <p>{salary && (salary.from || salary.to)}</p>
                  </div>
                  
                </Link>
                
                <div className="vacancy-city">{area.name}</div>

                <div className="vacancy-text">{snippet.responsibility}</div>
                <div className="logo">
                  <img align="right"
                  src={
                  (employer.logo_urls &&
                    (employer.logo_urls[90] || DEFAULT_HH_IMG)) 
                }
                />
                </div>
                <div className="vacancy-text">{snippet.requirement}</div>

                
                

                
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default VacancyList;
