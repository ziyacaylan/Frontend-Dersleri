import { createContext, useContext, useState, useEffect, useMemo } from "react";
import axios from "axios";
const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [isForecastLoading, setIsForecastLoading] = useState(false);
  const [weeklyForcast, setWeeklyForcast] = useState([]);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || navigator.language.split("-")[0]
  );
  //console.log("kayıtlı dil: ", language);

  const [tempType, setTempType] = useState(
    localStorage.getItem("tempType" === "true")
  );

  const key = process.env.REACT_APP_WEATHER_KEY;
  const url = process.env.REACT_APP_WEATHER_API_CURRENT;
  const foreCastUrl = process.env.REACT_APP_WEATHER_DAILY_API;

  const new_key = process.env.REACT_APP_WEATHER_NEW_KEY;
  const new_api = process.env.REACT_APP_WEATHER_NEW_API;

  useEffect(() => {
    localStorage.setItem("language", language);
    localStorage.setItem("tempType", tempType);
  }, [language, tempType]);

  const getForeCastWeatherDataByCity = async (city) => {
    setIsForecastLoading(false);
    try {
      const { data } = await axios.get(
        `${foreCastUrl}${city}&appid=${key}&lang=${language}&units=metric`
      );
      console.log(
        `${foreCastUrl}${city}&appid=${key}&lang=${language}&units=metric`
      );

      setWeeklyForcast(data);
      setError("");
      setIsForecastLoading(true);
    } catch (error) {
      console.log(
        `Havadurumu 5 günlük raporu gelmedi, Sarınım bir hata var : ${error}`
      );
      setIsForecastLoading(false);
      setError(
        `Havadurumu 5 günlük raporu gelmedi, Sarınım bir hata var : ${error}`
      );
    }
  };
  useEffect(() => {
    city && getForeCastWeatherDataByCity(city);
  }, [city]);

  const values = {
    isForecastLoading,
    setIsForecastLoading,
    error,
    setError,
    city,
    setCity,
    weeklyForcast,
    setWeeklyForcast,
    language,
    setLanguage,
    tempType,
    setTempType,
  };

  //console.log(lat, lng, weatherData);
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
