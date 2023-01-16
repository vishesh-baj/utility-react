import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  todo: [],
  notes: [],
  pomodoro: [],
  colorPicker: [],
};

export const globalSlice = createSlice({
  name: "global_slice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo = [...state.todo, action.payload];
    },

    removeTodo: (state, action) => {
      const filteredArr = state.todo.filter((todo) => {
        return todo.id !== action.payload;
      });
      state.todo = filteredArr;
    },

    editTodo: (state, action) => {
      const editedArr = state.todo.map((todo) => {
        if (todo.id === action.payload.id) {
          return { id: todo.id, title: action.payload.title };
        }
        return todo;
      });
      state.todo = editedArr;
    },
  },
});

export const { addTodo, removeTodo, editTodo } = globalSlice.actions;
export default globalSlice.reducer;
