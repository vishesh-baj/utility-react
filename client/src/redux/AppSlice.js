import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  todo: [],
  completedTodo: [],
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
      const objToEdit = state.todo.filter((todo, idx) => todo.id);
    },
  },
});

export const { addTodo, removeTodo } = globalSlice.actions;
export default globalSlice.reducer;
