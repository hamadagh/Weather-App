import React from "react";
import "../App.css";

function DayDetails({ dailyWeather }) {
  if (dailyWeather.temp !== null) {
    console.log(dailyWeather);
    return (
      <div className="container">
        <div className="weather-details">
          <div className="day-weather">
            <span className="temperature">
              {Math.ceil(dailyWeather.temp.temp)}
            </span>
          </div>
          <div className="day-details">
            <span className="time">16:30</span>
            <span className="day">{dailyWeather.day}</span>
            <span className="weather-status">{dailyWeather.weather}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="container"></div>;
  }
}

export default DayDetails;
