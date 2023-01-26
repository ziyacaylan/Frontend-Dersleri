import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:3000";

const getCharacters = createAsyncThunk("characters/getCharacters", async () => {
  const data = await axios.get(`${baseURL}/charakters`);
  return data;
});

const charaktersSlice = createSlice({
  name: "charakters",
  initialState: {
    item: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacters.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getCharacters.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default charaktersSlice.reducer;
