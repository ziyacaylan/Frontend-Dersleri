import React from "react";
import Header from "./components/Header";
import WeatherContainer from "./components/WeatherContainer";
import Footer from "./components/Footer";
import { UserProvider } from "./context/UserContext";

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} --> by coordinates
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}   --> by city name
function App() {
  return (
    <UserProvider>
      <Header />
      <WeatherContainer />
      <Footer />
    </UserProvider>
  );
}

export default App;
