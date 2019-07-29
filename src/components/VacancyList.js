import React from "react";
import "./App.css";

const VacancyList = props => {
  const { items } = props;
  console.log(props);

  

  return (
<<<<<<< HEAD

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
  
=======
    <>
    <List>
      {items &&
        items.map(({ salary, name, id, area }) => (
          <ListItem key={id}>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText
              primary={salary && (salary.from || salary.to)}
              secondary={name}

            />




          </ListItem>
        ))}
    </List>

    <div className = "list">
      <p>1</p>
    </div>
    </>
>>>>>>> 5d2cbd9aa9e246f23624e207260420bea59285b1

  );
};
  
export default VacancyList;

