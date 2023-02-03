import { configureStore } from "@reduxjs/toolkit";
import CardsSlice from "./CardsSlice";

export const store = configureStore({
  reducer: {
    cards: CardsSlice,
  },
});
