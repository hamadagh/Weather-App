import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import "../App.css";

function DayDetails({ value }) {
  const { data } = useContext(DataContext);

  const date = new Date();
  const day = date.getDay();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const slicedWeekDays1 = weekDays.slice(day);
  const slicedWeekDays2 = weekDays.slice(0, day);
  const finalDays = slicedWeekDays1.concat(slicedWeekDays2);

  if (data) {
    console.log(data);
    const dayTemp = data.data.data[value].temp;
    const weatherStatus = data.data.data[value].weather.description;
    const iconCode = data.data.data[value].weather.icon;
    console.log(iconCode);
    return (
      <div className="container">
        <div className="weather-details">
          <div className="day-weather">
            <span className="temperature">{Math.ceil(dayTemp)}</span>
          </div>
          <div className="day-details">
            <span className="degree">°C</span>
            <span className="day">{finalDays[value]}</span>
            <span className="weather-status">{weatherStatus}</span>
          </div>
        </div>
        <div
          className="icons"
          style={{ backgroundImage: `url(./img/icons/${iconCode}.png)` }}
        ></div>
      </div>
    );
  } else {
    return <div className="container"></div>;
  }
}

export default DayDetails;
