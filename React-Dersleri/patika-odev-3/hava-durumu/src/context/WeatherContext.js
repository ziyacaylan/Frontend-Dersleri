import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";
import useCity from "../context/CityContext";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState([]);
  const [lang, setLang] = useState(localStorage.getItem("lang") === "true");
  const [tempType, setTempType] = useState(
    localStorage.getItem("tempType") === "true"
  );

  useEffect(() => {
    localStorage.setItem("lang", lang);
    localStorage.setItem("tempType", tempType);
  }, [lang, tempType]);
  //console.log(city);
  const getWeatherData = async (lat, lon) => {
    const key = process.env.REACT_APP_API_KEY;
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
      );
      setWeatherData(data);
    } catch (error) {
      alert(`Havadurumu raporu gelmedi, Sarınım bir hata var : ${error}`);
    }
  };

  const values = {
    loading,
    setLoading,
    weatherData,
    setWeatherData,
    lang,
    setLang,
    tempType,
    setTempType,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
