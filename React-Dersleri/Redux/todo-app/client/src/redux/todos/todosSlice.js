import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    // const response = await fetch("http://localhost:7000/todos111");
    // return await response.json();
    const response = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`
    );
    return response.data;
  }
);

// add todo
export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (data) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`,
      data
    );
    return response.data;
  }
);

export const toggleTodoAsync = createAsyncThunk(
  "todos/toggleTodoAsync",
  async ({ id, data }) => {
    const response = await axios.patch(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`,
      data
    );
    return response.data;
  }
);

export const removeTodoAsync = createAsyncThunk(
  "todos/removeTodoAsync",
  async (id) => {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`
    );
    return id;
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    activeFilter: "all",
    addNewTodoIsLoading: false,
    addNewTodoError: null,
  },
  reducers: {
    // addNewTodo: {
    //   reducer: (state, action) => {
    //     state.items.push(action.payload);
    //     //console.log(action.payload);
    //   },
    //   prepare: ({ title }) => {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         completed: false,
    //         title,
    //       },
    //     };
    //   },
    // },
    // toggle: (state, action) => {
    //   const { id } = action.payload;
    //   const item = state.items.find((item) => item.id === id);

    //   item.completed = !item.completed;
    //   //console.log("gelen id", id);
    // },
    // destroy: (state, action) => {
    //   const id = action.payload;
    //   //console.log("gelen id: ", id);
    //   const filtered = state.items.filter((item) => item.id !== id);
    //   state.items = filtered;
    // },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      const filtered = state.items.filter((item) => item.completed === false);
      state.items = filtered;
    },
  },
  extraReducers: (builder) => {
    // get todos
    builder.addCase(getTodosAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTodosAsync.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTodosAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    // add todo
    builder.addCase(addTodoAsync.pending, (state, action) => {
      state.addNewTodoIsLoading = true;
    });
    builder.addCase(addTodoAsync.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.addNewTodoIsLoading = false;
    });
    builder.addCase(addTodoAsync.rejected, (state, action) => {
      state.addNewTodoIsLoading = false;
      state.addNewTodoError = action.error.message;
    });

    // toggle todo
    builder.addCase(toggleTodoAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      const { id, completed } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = completed;
    });
    // remove todo
    builder.addCase(removeTodoAsync.fulfilled, (state, action) => {
      //console.log(action.payload);
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    });
  },
});

export const selectedTodos = (state) => state.todos.items;

export const selectFilteredTodos = (state) => {
  if (state.todos.activeFilter === "all") {
    return state.todos.items;
  }

  return state.todos.items.filter((todo) =>
    state.todos.activeFilter === "active"
      ? todo.completed === false
      : todo.completed === true
  );
};

export const selectActiveFilter = (state) => state.todos.activeFilter;

export const {
  // addNewTodo,
  toggle,
  destroy,
  changeActiveFilter,
  clearCompleted,
} = todosSlice.actions;
export default todosSlice.reducer;
