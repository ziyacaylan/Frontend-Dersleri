import { createSlice } from "@reduxjs/toolkit";
import arrayShuffle from "array-shuffle";

import wordData from "../../Mock/wordData.json";

export const wordSlice = createSlice({
  name: "typingSpeed",
  initialState: {
    words: arrayShuffle(wordData.words).map((item) => {
      return { ...item, status: "" };
    }),
    language: ["TR", "ENG"],
    selectedLanguage: "TR",
    inputText: "",
    currentWord: "",
    wordIndex: 0,
    totalCorrectWords: 0,
    totalWrongWords: 0,
    correctWordsTick: 0,
    inCorrectWordsTick: 0,
    tickStatus: false,
    time: 60,
    start: false,
    modalOpen: false,
    timerKey: 60,
  },
  reducers: {
    setModalstate: (state) => {
      state.modalOpen = true;
    },
    startGame: (state) => {
      state.start = true;
    },
    stopGame: (state) => {
      state.timerKey = state.timerKey + 1;
      state.start = false;
    },
    changeLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
    setCurrentWord: (state, action) => {
      state.currentWord = action.payload;
    },
    setInputWord: (state, action) => {
      const inputTextLastCharacter =
        action.payload.trim().split("").length === 0
          ? ""
          : action.payload.trim().split("")[action.payload.length - 1];

      const text = action.payload.trim();

      if (text) {
        state.inputText = action.payload;

        if (
          state.currentWord.split("")[state.inputText.length - 1] ===
          inputTextLastCharacter
        ) {
          state.correctWordsTick++;
          state.tickStatus = false;
        } else {
          state.inCorrectWordsTick++;
          state.tickStatus = true;
        }
      } else {
        state.inputText = "";
      }
    },
    setKeyTick: (state, action) => {
      const currentText = action.payload.trim();
      const currentArray = currentText.split("");
      const inputArray = state.inputText.split("");
      inputArray.map((ch, idx) =>
        ch === currentArray[idx]
          ? state.correctWordsTick++
          : state.inCorrectWordsTick++
      );
    },
    setKeyPress: (state) => {
      const currentWord = state.words[state.wordIndex];

      if (
        state.inputText.trim() === currentWord.turkish ||
        state.inputText.trim() === currentWord.english
      ) {
        state.totalCorrectWords++;
        currentWord.status = "correct";
      } else {
        state.totalWrongWords++;
        currentWord.status = "wrong";
      }
      state.wordIndex++;
      state.inputText = "";
    },
    resetGame: (state) => {
      state.words = arrayShuffle(wordData.words);
      state.language = ["TR", "ENG"];
      state.inputText = "";
      state.currentWord = "";
      state.totalCorrectWords = 0;
      state.totalWrongWords = 0;
      state.correctWordsTick = 0;
      state.inCorrectWordsTick = 0;
      state.tickStatus = false;
      state.wordIndex = 0;
      state.time = 60;
      state.start = false;
      state.modalOpen = false;
    },
    setModalStatus: (state, action) => {
      state.modalOpen = action.payload;
    },
  },
});

export const {
  startGame,
  stopGame,
  changeLanguage,
  resetGame,
  setModalStatus,
  setInputWord,
  setCurrentWord,
  setKeyTick,
  setKeyPress,
  setModalstate,
} = wordSlice.actions;
export default wordSlice.reducer;
