import { createContext, useContext, useState, useEffect, useMemo } from "react";
import axios from "axios";
import useGeoLocation from "../hook/useGeoLocation";
const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const location = useGeoLocation();
  const { lat, lng } = location.coordinates;
  //console.log("latitüde :", lat, "logitude : ", lng);
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState([]);
  const [weeklyForcast, setWeeklyForcast] = useState([]);
  const [city, setCity] = useState("istanbul");
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

  useEffect(() => {
    localStorage.setItem("language", language);
    localStorage.setItem("tempType", tempType);
  }, [language, tempType]);

  const getWeatherDataByLocation = async (lat, lng) => {
    try {
      const { data } = await axios.get(
        `${url}lat=${lat}&lon=${lng}&appid=${key}&lang=${language}&units=metric`
      );
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.log(`Havadurumu raporu gelmedi, Sarınım bir hata var : ${error}`);
    }
  };

  const getForeCastWeatherDataByCity = async (city) => {
    try {
      const { data } = await axios.get(
        `${foreCastUrl}${city}&appid=${key}&lang=${language}&units=metric`
      );
      setWeeklyForcast(data);
      console.log(data);
    } catch (error) {
      console.log(
        `Havadurumu 5 günlük raporu gelmedi, Sarınım bir hata var : ${error}`
      );
    }
  };
  useEffect(() => {
    city && getForeCastWeatherDataByCity("cide");
  }, [city]);
  useEffect(() => {
    lat && lng && getWeatherDataByLocation(lat, lng);
  }, [lat, lng]);

  const values = {
    loading,
    setLoading,
    city,
    setCity,
    weatherData,
    setWeatherData,
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
