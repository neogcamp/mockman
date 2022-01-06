import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataProvider } from "../lib/context/data";

// import { makeServer } from "../lib/server";

// if (process.env.NODE_ENV === "development") {
//   makeServer({ environment: "development" });
// }

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
