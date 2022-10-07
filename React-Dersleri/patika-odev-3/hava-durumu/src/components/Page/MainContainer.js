import React from "react";
import Card from "./Card";
import CityForm from "./CityForm";
import Header from "./Header";

function MainContainer() {
  return (
    <div className="main-container">
      <Header />
      <div className="container">
        <CityForm />
        <Card />
      </div>
    </div>
  );
}

export default MainContainer;
