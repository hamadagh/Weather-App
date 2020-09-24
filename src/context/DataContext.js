import React, { createContext, useState } from "react";
import axios from "axios";

const DataContext = createContext({
  data: null,
  setData: () => null,
  loading: false,
  setLoading: () => null,
  error: null,
  setError: () => null,
  getWeatherData: () => null,
});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeatherData = async (city) => {
    try {
      setLoading(true);
      const key = process.env.REACT_APP_API_KEY;
      const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${key}`;
      const res = await axios.get(url);
      if (res.status === 200) {
        setData(res);
      } else if (res.status === 204) {
        setError("not found");
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        loading,
        setLoading,
        error,
        setError,
        getWeatherData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
