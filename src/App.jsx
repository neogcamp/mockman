import React from "react";
import "./App.css";
import Mockman from "../lib/main";
import useData from "../lib/context/data";
function App() {
  const { data, setData } = useData();
  return (
    <div className="App">
      <Mockman />
    </div>
  );
}

export default App;
