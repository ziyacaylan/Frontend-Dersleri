import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "../style/style.css";

function WeatherContainer() {
  return (
    <Container>
      <div className="container">
        <h1 className="text-center">Hava Durumu</h1>
      </div>
    </Container>
  );
}

export default WeatherContainer;
