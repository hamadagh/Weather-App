import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import "../App.css";

const thunderStormCode = [200, 201, 202, 230, 231, 232, 233];
const cloudyCode = [611, 612];
const partlyCloudyCode = [700, 711, 721, 731, 741, 751, 803, 804];
const partlyRainy = [521];
const partlySnowy = [600, 621];
const rainyCode = [300, 301, 302, 500, 501, 502, 511, 520, 522, 900];
const snowyCode = [601, 602, 610, 622, 623];

let iconClass;
const setIconCode = (iconCode) => {
  if (thunderStormCode.includes(iconCode)) {
    return (iconClass = "thunder-storm");
  } else if (cloudyCode.includes(iconCode)) {
    return (iconClass = "cloudy");
  } else if (partlyCloudyCode.includes(iconCode)) {
    return (iconClass = "partly-cloudy");
  } else if (partlyRainy.includes(iconCode)) {
    return (iconClass = "partly-rainy");
  } else if (partlySnowy.includes(iconCode)) {
    return (iconClass = "partly-snowy");
  } else if (rainyCode.includes(iconCode)) {
    return (iconClass = "rainy");
  } else if (snowyCode.includes(iconCode)) {
    return (iconClass = "snowy");
  } else {
    return (iconClass = "clear-sky");
  }
};

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

  const iconCode = data.data.data[value].weather.code;

  setIconCode(iconCode);
  if (data) {
    const dayTemp = data.data.data[value].temp;
    const weatherStatus = data.data.data[value].weather.description;
    const humidity = data.data.data[value].rh;
    const pressure = data.data.data[value].pres;
    const windSpeed = data.data.data[value].wind_spd;
    const windDirection = data.data.data[value].wind_cdir_full;

    return (
      <div className="container">
        <div className="body-container">
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
          <div className={`icons ${iconClass}`} id="icons"></div>
        </div>
        <div className="footer-container">
          <p className="footer-details">
            <span className="footer-label">Humidity:</span>
            {` `}
            {humidity}
          </p>

          <p className="footer-details">
            <span className="footer-label">Pressure:</span>
            {` `}
            {pressure}
          </p>

          <p className="footer-details">
            <span className="footer-label">Wind Speed:</span>
            {` `}
            {windSpeed}
          </p>

          <p className="footer-details">
            <span className="footer-label">Wind Direction:</span>
            {` `}
            {windDirection}
          </p>
        </div>
      </div>
    );
  } else {
    return <div className="container"></div>;
  }
}

export default DayDetails;
