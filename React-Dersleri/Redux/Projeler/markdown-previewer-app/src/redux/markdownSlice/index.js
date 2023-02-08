import { createSlice } from "@reduxjs/toolkit";

import { help } from "../../utils/helpMarkdownText";

export const markdownSlice = createSlice({
  name: "markdown",
  initialState: {
    markdownText: "",
    textHelp: help,
    isShowingHelp: false,
  },
  reducers: {},
});

export const {} = markdownSlice.actions;
export default markdownSlice.reducer;
