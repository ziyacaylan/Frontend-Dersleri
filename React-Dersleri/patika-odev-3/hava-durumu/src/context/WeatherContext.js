import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useCity } from "./CityContext";

const WeatherContext = createContext();

const WEEK_DAYS = [];

export const WeatherProvider = ({ children }) => {
  const [isForecastLoading, setIsForecastLoading] = useState(false);
  const [currentWeather, setCurrentWeather] = useState({});
  const [weeklyForecast, setWeeklyForecast] = useState({});
  const { city } = useCity();
  const [error, setError] = useState("");
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || navigator.language.split("-")[0]
  );
  const [tempType, setTempType] = useState(
    localStorage.getItem("tempType") || "°C"
  );
  const [savedCity, setSavedCity] = useState(
    JSON.parse(localStorage.getItem("savedCity")) || {}
  );

  const week_days_eng = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const week_days_tr = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  if (language === "tr") {
    WEEK_DAYS.splice(0, WEEK_DAYS.length);
    WEEK_DAYS.push(...week_days_tr);
  } else {
    WEEK_DAYS.splice(0, WEEK_DAYS.length);
    WEEK_DAYS.push(...week_days_eng);
  }

  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  const key = process.env.REACT_APP_WEATHER_KEY;
  const current_url = process.env.REACT_APP_WEATHER_API_CURRENT;
  const foreCastUrl = process.env.REACT_APP_WEATHER_DAILY_API;

  const getForeCastWeatherDataByCity = async (city) => {
    setIsForecastLoading(false);
    try {
      const { data } = await axios.get(
        `${current_url}q=${city}&appid=${key}&lang=${language}${
          tempType === "°C" ? "&units=metric" : ""
        }`
      );
      setCurrentWeather(data);

      await axios(
        `${foreCastUrl}q=${city}&appid=${key}&lang=${language}${
          tempType === "°C" ? "&units=metric" : ""
        }`
      ).then((response) => {
        setWeeklyForecast(response.data);
      });
      // console.log(
      //   `${foreCastUrl}${city}&appid=${key}&lang=${language}&units=metric`
      // );
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
  }, [city, language, tempType]);

  const values = {
    isForecastLoading,
    setIsForecastLoading,
    forecastDays,
    city,
    error,
    setError,
    currentWeather,
    setCurrentWeather,
    weeklyForecast,
    setWeeklyForecast,
    language,
    setLanguage,
    tempType,
    setTempType,
    savedCity,
    setSavedCity,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
