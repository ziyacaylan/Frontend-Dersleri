import { createSlice } from "@reduxjs/toolkit";

import { fetchCity, fetchCurrentWeather, fetchWeatherData } from "../Services";

export const WeatherSlice = createSlice({
  name: "weather",
  initialState: {
    fetchCityStatus: "",
    fetchDataStatus: "",
    fetchCurrentDataStatus: "",
    currentData: {},
    dailyData: {},
    cityData: {},
    cityName: "",
    coord: {},
    theme: localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light",
  },
  reducers: {
    changeTheme: (state, action) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
    },
    setLocation: (state, action) => {
      state.coord = action.payload;
    },
  },
  extraReducers: (builder) => {
    // getCity
    builder.addCase(fetchCity.pending, (state, action) => {
      state.fetchCityStatus = "loading";
    });
    builder.addCase(fetchCity.fulfilled, (state, action) => {
      const { coord, cityName } = action.payload;
      state.coord = coord;
      state.cityName = cityName;
      state.fetchCityStatus = "successed";
    });
    builder.addCase(fetchCity.rejected, (state, action) => {
      state.fetchCityStatus = "failed";
    });
    // getCurrentData
    builder.addCase(fetchCurrentWeather.pending, (state, action) => {
      state.fetchCurrentDataStatus = "loading";
    });
    builder.addCase(fetchCurrentWeather.fulfilled, (state, action) => {
      state.currentData = action.payload;
      state.fetchCurrentDataStatus = "successed";
    });
    builder.addCase(fetchCurrentWeather.rejected, (state, action) => {
      state.fetchCurrentDataStatus = "failed";
    });
    // getWeather Data
    builder.addCase(fetchWeatherData.pending, (state, action) => {
      state.fetchDataStatus = "loading";
    });
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      const { newList, city } = action.payload;
      state.cityData = city;
      state.dailyData = newList;
      // state.timezone = timezone;
      state.fetchDataStatus = "successed";
    });
    builder.addCase(fetchWeatherData.rejected, (state, action) => {
      state.fetchDataStatus = "failed";
    });
  },
});

export const { changeTheme, setLocation } = WeatherSlice.actions;
export default WeatherSlice.reducer;
