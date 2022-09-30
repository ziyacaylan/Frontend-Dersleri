import React from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import WeatherContainer from "./components/WeatherContainer";
import Footer from "./components/Footer";
import { UserProvider } from "./context/UserContext";

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}   --> by city name
function App() {
  return (
    <UserProvider>
      <Header />
      <MainContainer />
      <WeatherContainer />

      <Footer />
    </UserProvider>
  );
}

export default App;
