import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

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

function SideBar({ getWeatherData }) {
  const classes = useStyles();

  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getWeatherData(city);
  };

  return (
    <div className="side-bar">
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

export default SideBar;
