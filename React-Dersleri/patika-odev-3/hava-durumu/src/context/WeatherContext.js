import axios from "axios";
import { useState, createContext, useContext } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState([]);

  const getWeatherData = async (lat, lon) => {
    const key = process.env.REACT_APP_API_KEY;
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
      );
      setWeatherData(data);
    } catch (error) {
      alert(`Havadurumu raporu gelmedi, SArınım bir hata var : ${error}`);
    }
  };

  const values = {
    loading,
    setLoading,
    weatherData,
    setWeatherData,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
