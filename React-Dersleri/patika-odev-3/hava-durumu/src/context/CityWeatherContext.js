import { createContext, useContext, useState, useEffect } from "react";
import { useWeather } from "./WeatherContext";
import { useCity } from "./CityContext";

const CityWeatherContext = createContext();

export const CityWeatherProvider = ({ children }) => {
  const { isForecastLoading, setIsForecastLoading, weeklyForcast } =
    useWeather();
  const { city, setCity } = useCity();
  const [cityWeather, setCityWeather] = useState({
    cityName: "",
    lat: "",
    lng: "",
    sunrise: "",
    sunset: "",
    _date: "",
    _time: "",
    temp: "",
    min_temp: "",
    max_temp: "",
    feels_temp: "",
    humidity: "",
    description: "",
    icon: "",
    clouds: "",
    wind_speed: "",
    wind_deg: "",
    wind_gust: "",
  });

  const getCityWeather = () => {
    weeklyForcast.list.map((item) => {
      setCityWeather({
        cityName: `${weeklyForcast?.city.name}`,
        lat: `${weeklyForcast?.city?.coord?.lat}`,
        lng: `${weeklyForcast?.city?.coord?.lon}`,
        sunrise: `${new Date(weeklyForcast?.city?.sunrise * 1000)
          .toLocaleTimeString()
          .slice(0, 5)}`,
        sunset: `${new Date(weeklyForcast?.city?.sunset * 1000)
          .toLocaleTimeString()
          .slice(0, 5)}`,
        _date: `${new Date(item.dt * 1000).toLocaleDateString()}`,
        _time: `${new Date(item.dt * 1000).toLocaleTimeString()}`,
        temp: `${item.main.temp}`,
        min_temp: `${item.main.temp_min}`,
        max_temp: `${item.main.temp_max}`,
        feels_temp: `${item.main.feels_like}`,
        humidity: `${item.main.humidity}`,
        description: `${item.weather[0].description}`,
        icon: `${item.weather[0].icon}`,
        clouds: `${item.clouds.all}`,
        wind_speed: `${item.wind.speed}`,
        wind_deg: `${item.wind.deg}`,
        wind_gust: `${item.wind.gust}`,
      });
    });
  };

  useEffect(() => {
    getCityWeather();
  }, [city]);
  const values = {
    cityWeather,
    setCityWeather,
  };
  return (
    <CityWeatherContext.Provider value={values}>
      {children}
    </CityWeatherContext.Provider>
  );
};

export const useCityWeather = () => useContext(CityWeatherContext);
