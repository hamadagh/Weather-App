import React, { useState, useEffect } from "react";
import DaysNav from "./DaysNav";
import "../App.css";

function Main() {
  const [data, setData] = useState({
    temp: null,
    day: null,
    weather: null,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (data.temp !== null) {
    return (
      <div className="main">
        <span>{data.temp}</span>
        <span>{data.day}</span>
        <span>{data.weather}</span>
        <DaysNav setData={setData} />
      </div>
    );
  } else {
    return (
      <div className="main">
        <span>Temp</span>
        <span>Day</span>
        <span>Weather</span>
        <DaysNav setData={setData} />
      </div>
    );
  }
}

export default Main;
