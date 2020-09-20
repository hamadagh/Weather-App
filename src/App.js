import React from "react";
import { useQuery } from "react-query";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import "./App.css";

const getWeatherData = async () => {
  const key = process.env.API_KEY;
  const res = await fetch(
    `api.openweathermap.org/data/2.5/forecast?q={berlin}&appid=${key}`
  );
  return res.json();
};

function App() {
  const { data, status } = useQuery("weatherData", getWeatherData);
  return (
    <div className="App">
      <Main />
      <SideBar />
    </div>
  );
}

export default App;
