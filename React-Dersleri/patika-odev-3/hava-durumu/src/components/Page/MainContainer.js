import React from "react";
import Card from "./Card";
import CityForm from "./CityForm";
import Header from "./Header";
import { useWeather } from "../../context/WeatherContext";
import ErrorPage from "./ErrorPage";
import Settings from "./Settings";

function MainContainer() {
  const { error, city, isForecastLoading } = useWeather();
  return (
    <div className="main-container">
      <Header />
      <Settings />
      <div className="container">
        <CityForm />
        {!error ? (
          city &&
          (!isForecastLoading ? (
            <div className="d-flex align-items-center justify-content-center mt-5">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <Card />
          ))
        ) : (
          <ErrorPage />
        )}
      </div>
    </div>
  );
}

export default MainContainer;
