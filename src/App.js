import React from "react";
import { useQuery } from "react-query";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import "./App.css";

const getWeatherData = async () => {
  const city = "hamburg";
  const key = process.env.REACT_APP_API_KEY;
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`
  );
  return res.json();
};

function App() {
  const { data, status } = useQuery("weatherData", getWeatherData);
  console.log(data);

  return (
    <div className="App">
      <Main />
      <SideBar />
    </div>
  );
}

export default App;
