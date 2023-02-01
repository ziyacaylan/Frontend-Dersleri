import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuotes = createAsyncThunk("quotes/getQoutes", async () => {
  const data = await axios.get(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/quotes`
  );
  return data.data;
});

export const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    items: [],
    status: "idle",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuotes.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchQuotes.fulfilled, (state, action) => {
      state.items = [...action.payload];
      state.status = "success";
    });
    builder.addCase(fetchQuotes.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    });
  },
});
export default quotesSlice.reducer;
