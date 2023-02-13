import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCity = createAsyncThunk("weather/city", async (city) => {
  const {
    data: { coord },
    data: { name: cityName },
  } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  );
  return { coord, cityName };
});

export const fetchCurrentWeather = createAsyncThunk(
  "current/getData",
  async (city) => {
    const currentData = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&lang=tr&units=metric`
    );
    return currentData.data;
  }
);

export const fetchWeatherData = createAsyncThunk(
  "weather/getData",
  async (coord) => {
    const {
      // data: { current },
      data: { list },
      data: { city },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&appid=${process.env.REACT_APP_API_KEY}&lang=tr&units=metric`
    );

    const newList = [];

    list.forEach((item) => {
      const daily = list.splice(
        0,
        list.filter(
          (eleman) =>
            eleman.dt_txt.split("").slice(0, 10).join("") ===
            item.dt_txt.split("").slice(0, 10).join("")
        ).length
      );
      newList.push(daily);
    });
    return { newList, city };
  }
);
