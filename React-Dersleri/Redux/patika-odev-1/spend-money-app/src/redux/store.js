import { configureStore } from "@reduxjs/toolkit";

import productsSclice from "./productsSclice";

export const store = configureStore({
  reducer: {
    products: productsSclice,
  },
});
