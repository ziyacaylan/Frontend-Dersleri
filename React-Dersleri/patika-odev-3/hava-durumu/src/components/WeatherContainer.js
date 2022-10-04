import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/style.css";
import CardBody from "./CardBody";

function WeatherContainer() {
  return (
    <div className="container weather-container text-center">
      <h1 className="text-white">Container</h1>
      <CardBody></CardBody>
    </div>
  );
}

export default WeatherContainer;
