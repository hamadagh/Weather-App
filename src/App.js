import React, { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import { DataProvider } from "./context/DataContext";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header />

        <Main />
      </div>
    </DataProvider>
  );
}

export default App;
