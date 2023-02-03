import React from "react";
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const CardsAdapter = createEntityAdapter();

export const CardsSelector = CardsAdapter.getSelectors((state) => state.cards);

export const CardsSlice = createSlice({
  name: "cards",
  initialState: CardsAdapter.getInitialState(),
  reducers: {
    fillCards: CardsAdapter.addMany,
    updateCard: CardsAdapter.updateOne,
    updateCards: CardsAdapter.updateMany,
    deleteCards: CardsAdapter.removeAll,
  },
});

export const { addMany, updateCard, updateCards, deleteCards } =
  CardsSlice.reducer;
export default CardsSlice.reducer;
