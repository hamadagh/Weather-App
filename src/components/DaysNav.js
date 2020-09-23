import React from "react";

function DaysNav({ setDayData, data }) {
  const handleClick = () => {
    setDayData({
      temp: 24,
      day: "Monday",
      weather: "Sunny",
    });
  };
  const date = new Date();
  const day = date.getDay();
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const slicedWeekDays1 = weekDays.slice(day);
  const slicedWeekDays2 = weekDays.slice(0, day);
  const finalDays = slicedWeekDays1.concat(slicedWeekDays2);

  if (data) {
    console.log(data);

    return (
      <div className="days-nav">
        <div className="week-days">
          <span>{finalDays[0]}</span>
          <span>13</span>
        </div>
        <div className="week-days">
          <span>{finalDays[1]}</span>
          <span>2</span>
        </div>
        <div className="week-days">
          <span>{finalDays[2]}</span>
          <span>1</span>
        </div>
        <div className="week-days">
          <span>{finalDays[3]}</span>
          <span>4</span>
        </div>
        <div className="week-days">
          <span>{finalDays[4]}</span>
          <span>6</span>
        </div>
        <div className="week-days">
          <span>{finalDays[5]}</span>
          <span>8</span>
        </div>
        <div className="week-days">
          <span>{finalDays[6]}</span>
          <span>10</span>
        </div>
      </div>
    );
  }
  return (
    <div className="days-nav">
      <div className="week-days">
        <span>{finalDays[0]}</span>
        <span>13</span>
      </div>
      <div className="week-days">
        <span>{finalDays[1]}</span>
        <span>2</span>
      </div>
      <div className="week-days">
        <span>{finalDays[2]}</span>
        <span>1</span>
      </div>
      <div className="week-days">
        <span>{finalDays[3]}</span>
        <span>4</span>
      </div>
      <div className="week-days">
        <span>{finalDays[4]}</span>
        <span>6</span>
      </div>
      <div className="week-days">
        <span>{finalDays[5]}</span>
        <span>8</span>
      </div>
      <div className="week-days">
        <span>{finalDays[6]}</span>
        <span>10</span>
      </div>
    </div>
  );
}

export default DaysNav;
