import React from "react";
import { DataProvider } from "./context/DataContext";
import DaysNav from "./components/DaysNav";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <DaysNav />
      </div>
    </DataProvider>
  );
}

export default App;
