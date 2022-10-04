import React from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import WeatherContainer from "./components/WeatherContainer";
import Footer from "./components/Footer";
import { UserProvider } from "./context/UserContext";
import { CityProvider } from "./context/CityContext";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <UserProvider>
      <WeatherProvider>
        <CityProvider>
          <Header />
          <MainContainer />
          <WeatherContainer />
        </CityProvider>
      </WeatherProvider>
      <Footer />
    </UserProvider>
  );
}

export default App;
