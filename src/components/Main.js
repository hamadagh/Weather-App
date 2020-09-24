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

  const [dailyWeather, setDailyWeather] = useState({
    temp: null,
    day: null,
    weather: null,
  });
  const [cityAndDate, setCityAndDate] = useState({
    cityName: null,
    date: null,
  });
  const { data, loading, error } = useContext(DataContext);

  const date = new Date();
  const day = date.getDay();
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const slicedWeekDays1 = weekDays.slice(day);
  const slicedWeekDays2 = weekDays.slice(0, day);
  const finalDays = slicedWeekDays1.concat(slicedWeekDays2);

  if (data) {
    const dailyWeatherList = data.data.data;

    return (
      <div className="main-container">
        <Header cityAndDate={cityAndDate} />
        <DayDetails dailyWeather={dailyWeather} />
        <div className="days-nav">
          <Chip
            className={classes.root}
            variant="outlined"
            onClick={() => {
              setDailyWeather({
                temp: dailyWeatherList[0],
                day: finalDays[0],
                weather: dailyWeatherList[0].weather.description,
              });
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
              setDailyWeather({
                temp: dailyWeatherList[1],
                day: finalDays[1],
                weather: dailyWeatherList[1].weather.description,
              });
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
              setDailyWeather({
                temp: dailyWeatherList[2],
                day: finalDays[2],
                weather: dailyWeatherList[2].weather.description,
              });
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
              setDailyWeather({
                temp: dailyWeatherList[3],
                day: finalDays[3],
                weather: dailyWeatherList[3].weather.description,
              });
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
              setDailyWeather({
                temp: dailyWeatherList[4],
                day: finalDays[4],
                weather: dailyWeatherList[4].weather.description,
              });
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
              setDailyWeather({
                temp: dailyWeatherList[5],
                day: finalDays[5],
                weather: dailyWeatherList[5].weather.description,
              });
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
              setDailyWeather({
                temp: dailyWeatherList[6],
                day: finalDays[6],
                weather: dailyWeatherList[6].weather.description,
              });
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
  } else if (loading === true) {
    return (
      <div className="main-container">
        <Header />
        <div className="circular-progress">
          <CircularProgress color="secondary" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="main-container">
        <Header />
        <div className="days-nav"></div>
        <div className="weather-details"></div>
      </div>
    );
  }
};

export default Main;
