import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const char_limit = 12;

export const fetchCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (page) => {
    const data = await axios.get(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?_page=${page}&_limit=${char_limit}`
    );
    return data.data;
  }
);

export const fetchCharDetails = createAsyncThunk(
  "char/getCharDetails",
  async (char_id) => {
    const data = await axios.get(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/?char_id=${char_id}`
    );
    return data.data;
  }
);

const charaktersSlice = createSlice({
  name: "charakters",
  initialState: {
    items: [],
    status: "idle",
    error: "",
    page: 0,
    hasNextPage: true,
    item: {},
  },
  reducers: {
    clearItem: (state) => {
      state.item = {};
    },
  },
  extraReducers: (builder) => {
    // getCharacters
    builder.addCase(fetchCharacters.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.items = [...state.items, ...action.payload];
      state.page += 1;
      state.status = "success";

      if (action.payload.length < 12) {
        state.hasNextPage = false;
      }
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    //get item
    builder.addCase(fetchCharDetails.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchCharDetails.fulfilled, (state, action) => {
      //console.log("storedan", action.payload);
      state.item = action.payload[0];
      state.status = "success";
    });
    builder.addCase(fetchCharDetails.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    });
  },
});
export const { clearItem } = charaktersSlice.actions;
export default charaktersSlice.reducer;
