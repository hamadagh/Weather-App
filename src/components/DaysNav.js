import React from "react";

const handleClick = (array, value) => {};

function DaysNav({ setDayData, data }) {
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
      <div className="days-nav">
        <div className="week-days">
          <span>{finalDays[0]}</span>
          <span>{Math.ceil(dailyWeatherList[0].temp)}</span>
        </div>
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
    );
  }
  return <div className="days-nav"></div>;
}

export default DaysNav;
