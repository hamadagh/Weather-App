import React, { useState } from "react";
import Main from "./components/Main";
import DaysNav from "./components/DaysNav";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const getWeatherData = async (city) => {
    try {
      setLoading(true);
      const key = process.env.REACT_APP_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`;
      const res = await axios.get(url);
      setData(res);
      console.log(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Main data={data} loading={loading} error={error} />
      <DaysNav getWeatherData={getWeatherData} data={data} />
    </div>
  );
}

export default App;
