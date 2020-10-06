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
    color: "white",
  },
  iconButton: {
    padding: 10,
    color: "white",
  },
}));

function Header({ value }) {
  const classes = useStyles();
  const [city, setCity] = useState("");

  const { getWeatherData, data } = useContext(DataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getWeatherData(city);
    setCity("");
  };

  if (data) {
    const cityName = data.data.city_name;
    const date = data.data.data[value].datetime;
    const reversedDate = date.split("-").reverse().join("-");
    return (
      <div className="header">
        <div className="city-details">
          <span className="city">{cityName}</span>
          <span className="date">{reversedDate}</span>
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
          <span className="city"></span>
          <span className="date"></span>
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
