import React from "react";
import Footer from "./components/Page/Footer";
import MainContainer from "./components/Page/MainContainer";
import "./style/style.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { WeatherProvider } from "./context/WeatherContext";
import { CityProvider } from "./context/CityContext";
import { DayProvider } from "./context/DayContext";
import { AnimationProvider } from "./context/AnimationContext";

function App() {
  return (
    <div>
      <CityProvider>
        <AnimationProvider>
          <WeatherProvider>
            <DayProvider>
              <MainContainer />
              <Footer />
            </DayProvider>
          </WeatherProvider>
        </AnimationProvider>
      </CityProvider>
    </div>
  );
}

export default App;
