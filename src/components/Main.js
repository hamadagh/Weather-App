import React, { useState, useEffect, useContext } from "react";
import DaysNav from "./DaysNav";
import "../App.css";
import DataContext from "../context/DataContext";

function Main() {
  const [dayData, setDayData] = useState({
    temp: null,
    day: null,
    weather: null,
  });
  const { data, loading, error } = useContext(DataContext);

  if (dayData.temp !== null) {
    return (
      <div className="main">
        <div className="weather-details">
          <span>{dayData.temp}</span>
          <span>{dayData.day}</span>
          <span>{dayData.weather}</span>
        </div>

        <DaysNav setDayData={setDayData} />
      </div>
    );
  } else {
    return (
      <div className="main">
        <div className="weather-details">
          <div className="day-weather">
            <span className="temperature">13</span>
          </div>
          <div className="day-details">
            <span className="time">16:30</span>
            <span className="day">Monday</span>
            <span className="weather-status">Rainy</span>
          </div>
        </div>
        <DaysNav setDayData={setDayData} data={data} />
      </div>
    );
  }
}

export default Main;
