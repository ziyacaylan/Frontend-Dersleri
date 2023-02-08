import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchText = createAsyncThunk(
  "text/fetchText",
  async ({ paragraph, format }) => {
    const res = await axios(
      `https://baconipsum.com/api/?type=all-meat&paras=${paragraph}&format=${format}`
    );
    console.log("res.data", res.data);
    return res.data;
  }
);

export const textSlice = createSlice({
  name: "text",
  initialState: {
    items: [],
    paragraph: 1,
    format: "text",
  },
  reducers: {
    setTextParagraph: (state, aciton) => {
      state.paragraph = aciton.payload;
    },
    setFormat: (state, aciton) => {
      state.format = aciton.payload;
    },
  },
  extraReducers: {
    [fetchText.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setTextParagraph, setFormat } = textSlice.actions;
export default textSlice.reducer;
