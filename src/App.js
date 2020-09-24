import React from "react";
import { DataProvider } from "./context/DataContext";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Main />
      </div>
    </DataProvider>
  );
}

export default App;
