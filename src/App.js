import React, { useState } from "react";
import Header from "./components/Header";
import { DataProvider } from "./context/DataContext";
import "./App.css";
import DaysNav from "./components/DaysNav";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header />
        <DaysNav />
      </div>
    </DataProvider>
  );
}

export default App;
