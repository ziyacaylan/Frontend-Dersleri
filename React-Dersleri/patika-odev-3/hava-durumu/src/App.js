import React from "react";
import Header from "./components/Page/Header";
import Footer from "./components/Page/Footer";
import MainContainer from "./components/Page/MainContainer";
import "./style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { WeatherProvider } from "./context/WeatherContext";
import { CityProvider } from "./context/CityContext";
import { DayProvider } from "./context/DayContext";

function App() {
  return (
    <div>
      <CityProvider>
        <DayProvider>
          <WeatherProvider>
            <MainContainer />
            <Footer />
          </WeatherProvider>
        </DayProvider>
      </CityProvider>
    </div>
  );
}

export default App;
