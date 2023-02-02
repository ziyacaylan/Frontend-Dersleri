import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const contactAdapter = createEntityAdapter();
const initialState = contactAdapter.getInitialState();

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
});
export default contactSlice.reducer;
