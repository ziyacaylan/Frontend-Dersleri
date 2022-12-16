import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      { id: "1", title: "Learn React", completed: false },
      { id: "2", title: "Read a book", completed: true },
    ],
    activeFilter: "all",
  },
  reducers: {
    addNewTodo: (state, action) => {
      state.items.push(action.payload);
    },
    toggle: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);

      item.completed = !item.completed;
      //console.log("gelen id", id);
    },
    destroy: (state, action) => {
      const { id } = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
  },
});

export const { addNewTodo, toggle, destroy } = todosSlice.actions;
export default todosSlice.reducer;
