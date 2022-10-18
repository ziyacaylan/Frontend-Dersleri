import React, { useEffect, useState } from "react";
import Card from "./Card";
import CityForm from "./CityForm";
import Header from "./Header";
import { useWeather } from "../../context/WeatherContext";
import ErrorPage from "./ErrorPage";
import Settings from "./Settings";
import Footer from "./Footer";

function MainContainer() {
  const { error, city, isForecastLoading } = useWeather();
  const [pageHeight, setPageHeight] = useState("");

  useEffect(() => {
    city && setPageHeight("pageHeight");
  }, [city]);

  return (
    <div className={`main-container ${pageHeight}`}>
      <Header />
      <Settings />
      <div className="container">
        <CityForm />
        {!error ? (
          city &&
          (!isForecastLoading ? (
            <div className="d-flex align-items-center justify-content-center mt-5 emptyHeight">
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
      {/* <Footer /> */}
    </div>
  );
}

export default MainContainer;
