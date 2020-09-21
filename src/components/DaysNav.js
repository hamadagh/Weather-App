import React from "react";

function DaysNav({ setData }) {
  const handleClick = () => {
    setData({
      temp: 24,
      day: "Monday",
      weather: "Sunny",
    });
  };

  return (
    <div className="days-nav">
      <span onClick={handleClick}>Mon</span>
      <span>Tue</span>
      <span>Wed</span>
      <span>Thu</span>
      <span>Fri</span>
      <span>Sat</span>
      <span>Sun</span>
    </div>
  );
}

export default DaysNav;
