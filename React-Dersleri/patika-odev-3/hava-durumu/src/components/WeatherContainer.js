import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/style.css";
import CardBody from "./CardBody";

function WeatherContainer() {
  return (
    <div className="container weather-container ">
      <h1 className="text-center text-white">Container</h1>
      <CardBody />
    </div>
  );
}

export default WeatherContainer;
