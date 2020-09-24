import React, { useState, useContext } from "react";
import Main from "./Main";
import DataContext from "../context/DataContext";
import Paper from "@material-ui/core/Paper";
import "../App.css";

const DaysNav = () => {
  const [dailyWeather, setDailyWeather] = useState({
    temp: null,
    day: null,
    weather: null,
  });
  const { data, loading, error } = useContext(DataContext);

  const date = new Date();
  const day = date.getDay();
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const slicedWeekDays1 = weekDays.slice(day);
  const slicedWeekDays2 = weekDays.slice(0, day);
  const finalDays = slicedWeekDays1.concat(slicedWeekDays2);

  if (data) {
    console.log(data);
    const dailyWeatherList = data.data.data;
    console.log(dailyWeatherList);

    return (
      <div className="main-container">
        <Main dailyWeather={dailyWeather} />
        <div className="days-nav">
          <Paper
            elevation={1}
            onClick={() => {
              setDailyWeather({
                temp: dailyWeatherList[0],
                day: finalDays[0],
                weather: dailyWeatherList[0].weather.description,
              });
            }}
          >
            <div className="week-days">
              <span>{finalDays[0]}</span>
              <span>{Math.ceil(dailyWeatherList[0].temp)}</span>
            </div>
          </Paper>

          <div className="week-days">
            <span>{finalDays[1]}</span>
            <span>{Math.ceil(dailyWeatherList[1].temp)}</span>
          </div>
          <div className="week-days">
            <span>{finalDays[2]}</span>
            <span>{Math.ceil(dailyWeatherList[2].temp)}</span>
          </div>
          <div className="week-days">
            <span>{finalDays[3]}</span>
            <span>{Math.ceil(dailyWeatherList[3].temp)}</span>
          </div>
          <div className="week-days">
            <span>{finalDays[4]}</span>
            <span>{Math.ceil(dailyWeatherList[4].temp)}</span>
          </div>
          <div className="week-days">
            <span>{finalDays[5]}</span>
            <span>{Math.ceil(dailyWeatherList[5].temp)}</span>
          </div>
          <div className="week-days">
            <span>{finalDays[6]}</span>
            <span>{Math.ceil(dailyWeatherList[6].temp)}</span>
          </div>
        </div>
      </div>
    );
  }
  return <div className="days-nav"></div>;
};

export default DaysNav;
