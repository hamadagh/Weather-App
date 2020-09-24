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

  if (data !== null) {
    return (
      <div className="container">
        <div className="weather-details">
          <div className="day-weather">
            <span className="temperature">
              {Math.ceil(data.data.data[value].temp)}
            </span>
          </div>
          <div className="day-details">
            <span className="time">16:30</span>
            <span className="day">{finalDays[value]}</span>
            <span className="weather-status">
              {data.data.data[value].weather.description}
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="container"></div>;
  }
}

export default DayDetails;
