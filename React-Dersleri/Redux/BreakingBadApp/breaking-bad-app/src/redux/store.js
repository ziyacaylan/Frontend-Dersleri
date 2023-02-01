import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./charactersSlice";
import quotesSlice from "./quotesSlice";

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
    quotes: quotesSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
