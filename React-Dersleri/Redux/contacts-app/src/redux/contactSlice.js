import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const contactAdapter = createEntityAdapter();
const initialState = contactAdapter.getInitialState();

export const contactSelectors = contactAdapter.getSelectors(
  (state) => state.contacts
);

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: contactAdapter.addOne,
    addContacts: contactAdapter.addMany,
    deleteContact: contactAdapter.removeOne,
    removeAllContacts: contactAdapter.removeAll,
    updateContact: contactAdapter.updateOne,
  },
});

export const {
  addContact,
  addContacts,
  deleteContact,
  removeAllContacts,
  updateContact,
} = contactSlice.actions;
export default contactSlice.reducer;
