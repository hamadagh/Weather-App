import React, { useState, useContext } from "react";
import DayDetails from "./DayDetails";
import Header from "./Header";
import DataContext from "../context/DataContext";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "60px",
    height: "100px",
    textAlign: "center",
    fontWeight: "bolder",
  },
}));

const Main = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const { data, loading, error } = useContext(DataContext);

  const date = new Date();
  const day = date.getDay();
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const slicedWeekDays1 = weekDays.slice(day);
  const slicedWeekDays2 = weekDays.slice(0, day);
  const finalDays = slicedWeekDays1.concat(slicedWeekDays2);

  if (error) {
    return (
      <div className="main-container">
        <Header value={value} error={error} />
        <span className="error message">Please check your city name !</span>
      </div>
    );
  } else if (loading === true) {
    return (
      <div className="main-container">
        <Header value={value} error={error} />
        <div className="circular-progress">
          <CircularProgress color="secondary" />
        </div>
      </div>
    );
  } else if (data) {
    const dailyWeatherList = data.data.data;

    return (
      <div className="main-container">
        <Header value={value} error={error} />
        <DayDetails value={value} />
        <div className="days-nav">
          <Chip
            className={classes.root}
            variant="outlined"
            onClick={() => {
              setValue(0);
            }}
            label={
              <div className="week-days">
                <span>{finalDays[0]}</span>
                <span>{Math.ceil(dailyWeatherList[0].temp)}</span>
              </div>
            }
          />
          <Chip
            className={classes.root}
            variant="outlined"
            onClick={() => {
              setValue(1);
            }}
            label={
              <div className="week-days">
                <span>{finalDays[1]}</span>
                <span>{Math.ceil(dailyWeatherList[1].temp)}</span>
              </div>
            }
          />
          <Chip
            className={classes.root}
            variant="outlined"
            onClick={() => {
              setValue(2);
            }}
            label={
              <div className="week-days">
                <span>{finalDays[2]}</span>
                <span>{Math.ceil(dailyWeatherList[2].temp)}</span>
              </div>
            }
          />
          <Chip
            className={classes.root}
            variant="outlined"
            onClick={() => {
              setValue(3);
            }}
            label={
              <div className="week-days">
                <span>{finalDays[3]}</span>
                <span>{Math.ceil(dailyWeatherList[3].temp)}</span>
              </div>
            }
          />
          <Chip
            className={classes.root}
            variant="outlined"
            onClick={() => {
              setValue(4);
            }}
            label={
              <div className="week-days">
                <span>{finalDays[4]}</span>
                <span>{Math.ceil(dailyWeatherList[4].temp)}</span>
              </div>
            }
          />
          <Chip
            className={classes.root}
            variant="outlined"
            onClick={() => {
              setValue(5);
            }}
            label={
              <div className="week-days">
                <span>{finalDays[5]}</span>
                <span>{Math.ceil(dailyWeatherList[5].temp)}</span>
              </div>
            }
          />
          <Chip
            className={classes.root}
            variant="outlined"
            onClick={() => {
              setValue(6);
            }}
            label={
              <div className="week-days">
                <span>{finalDays[6]}</span>
                <span>{Math.ceil(dailyWeatherList[6].temp)}</span>
              </div>
            }
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="second-container">
        <Header value={value} error={error} />
        <div className="bg-image"></div>
      </div>
    );
  }
};

export default Main;
