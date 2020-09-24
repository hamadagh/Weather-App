import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import DataContext from "../context/DataContext";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

function Header({ value }) {
  const classes = useStyles();
  const [city, setCity] = useState("");

  const { getWeatherData, data } = useContext(DataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getWeatherData(city);
  };
  if (data !== null) {
    return (
      <div className="header">
        <div className="city-details">
          <span>{data.data.city_name}</span>
          <span>{data.data.data[value].datetime}</span>
        </div>
        <div className="input-form">
          <InputBase
            className={classes.input}
            placeholder="Choose a city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
            onClick={handleSubmit}
          >
            <Search />
          </IconButton>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header">
        <div className="city-details">
          <span>City</span>
          <span>Date</span>
        </div>
        <div className="input-form">
          <InputBase
            className={classes.input}
            placeholder="Choose a city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
            onClick={handleSubmit}
          >
            <Search />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default Header;
