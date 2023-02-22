import { configureStore } from "@reduxjs/toolkit";

import GameSlice from "./GameSlice";

export const store = configureStore({
  reducer: {
    game: GameSlice,
  },
});
