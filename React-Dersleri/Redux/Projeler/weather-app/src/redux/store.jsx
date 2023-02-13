import { configureStore } from "@reduxjs/toolkit";
import WeatherSlice from "./WeatherSlice";

export const store = configureStore({
  reducer: {
    weather: WeatherSlice,
  },
});
