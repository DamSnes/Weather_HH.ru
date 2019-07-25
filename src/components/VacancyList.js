import React from "react";
import "./App.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { arrayExpression } from "@babel/types";



const VacancyList = props => {
  const { items } = props;
  console.log(props);

  
  return (
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

  );
};
  

export default VacancyList;

