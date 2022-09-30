import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import App from "./App";

//const root = document.querySelector("#root");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
