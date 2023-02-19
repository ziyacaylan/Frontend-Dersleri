import { configureStore } from "@reduxjs/toolkit";

import GameSlice from "./GameSlice";
import BoardSclice from "./BoardSclice";

export const store = configureStore({
  reducer: {
    board: BoardSclice,
    game: GameSlice,
  },
});
