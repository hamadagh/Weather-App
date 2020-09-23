import React from "react";

function DaysNav({ setDayData, data }) {
  const handleClick = () => {
    setDayData({
      temp: 24,
      day: "Monday",
      weather: "Sunny",
    });
  };
  if (data) {
    console.log(data);
    return (
      <div className="days-nav">
        <div className="week-days">
          <span>Mon</span>
          <span>13</span>
        </div>
        <div className="week-days">
          <span>Tue</span>
          <span>2</span>
        </div>
        <div className="week-days">
          <span>Wed</span>
          <span>1</span>
        </div>
        <div className="week-days">
          <span>Thu</span>
          <span>4</span>
        </div>
        <div className="week-days">
          <span>Fri</span>
          <span>6</span>
        </div>
        <div className="week-days">
          <span>Sat</span>
          <span>8</span>
        </div>
        <div className="week-days">
          <span>Sun</span>
          <span>10</span>
        </div>
      </div>
    );
  }
  return (
    <div className="days-nav">
      <div className="week-days">
        <span>Mon</span>
        <span>13</span>
      </div>
      <div className="week-days">
        <span>Tue</span>
        <span>2</span>
      </div>
      <div className="week-days">
        <span>Wed</span>
        <span>1</span>
      </div>
      <div className="week-days">
        <span>Thu</span>
        <span>4</span>
      </div>
      <div className="week-days">
        <span>Fri</span>
        <span>6</span>
      </div>
      <div className="week-days">
        <span>Sat</span>
        <span>8</span>
      </div>
      <div className="week-days">
        <span>Sun</span>
        <span>10</span>
      </div>
    </div>
  );
}

export default DaysNav;
