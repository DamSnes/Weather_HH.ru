import React from "react";
import "./App.css";

const VacancyList = props => {
  const { items } = props;
  console.log(props);

  

  return (

    <div className = "list">
      {items &&
        items.map(({ salary, name, id, area, snippet }) => (
          <div key={id}>

          
          <div className = "list-item">
            
            <div className = "vacancy-name">
              <p>{name}</p>
            </div>

            <div className = "vacancy-text">
              
              {snippet.responsibility}
            </div>

            <div className = "vacancy-city">
              {area.name}
            </div>

            <div className = "vacancy-salary">
            {salary && (salary.from || salary.to)} руб.
            </div>

          </div>

          </div>
      ))}

          

    </div>
  

  );
};
  
export default VacancyList;

