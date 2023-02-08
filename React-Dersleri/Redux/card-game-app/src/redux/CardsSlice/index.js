import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data";

const setCards = () => {
  const newCardList = data.map((card, index) => ({
    ...card,
    id: data.length + (index + 1),
  }));
  return data.concat(newCardList).sort(() => Math.random() - 0.5);
};

export const CardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
    score: 200,
    status: "",
    activeCards: [],
    total: {
      opened: 0,
      closed: 24,
      all: 24,
    },
  },
  reducers: {
    fillCards: (state, action) => {
      state.cards = setCards();
    },
    resetGame: (state) => {
      state.cards = [];
      state.activeCards = [];
      state.score = 200;
      state.status = "";
      state.total = {
        opened: 0,
        closed: 24,
        all: 24,
      };
    },
    openCard: (state, action) => {
      const findCard = state.cards.find((card) => card.id === action.payload);
      findCard.status = true;
      state.activeCards = [...state.activeCards, findCard];
      state.status = "selected";
    },
    closeCard: (state) => {
      state.activeCards.map(
        (item) =>
          (state.cards.find((pokemon) => pokemon.id === item.id).status = false)
      );
      state.status = "";
      state.activeCards = [];
    },
    correctMatch: (state) => {
      state.score = state.score + 50;
      state.activeCards = [];
      state.status = "success";
      state.total = {
        opened: (state.total.opened += 2),
        closed: (state.total.closed -= 2),
        all: 24,
      };
    },
    failMatch: (state) => {
      state.score = state.score - 10;
      state.activeCards = [];
      state.status = "failed";
    },
  },
});

export const {
  fillCards,
  resetGame,
  openCard,
  closeCard,
  correctMatch,
  failMatch,
} = CardsSlice.actions;
export default CardsSlice.reducer;
