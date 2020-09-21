import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
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

function Header({ getWeatherData }) {
  const classes = useStyles();

  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getWeatherData(city);
  };

  return (
    <div className="header">
      <div className="city-details">
        <span>Berlin / Germany</span>
        <span>20.09.2020</span>
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

export default Header;
