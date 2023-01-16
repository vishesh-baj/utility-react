import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  user: null,
  todo: [],
  notes: [
    {
      id: 1,
      title: "Note 1 Title",
      info: "note info",
      labelColor: "none",
    },
    {
      id: 2,
      title: "Note 1 Title",
      info: "note info",
      labelColor: "none",
    },
  ],
  pomodoro: [],
  colorPicker: [],
};

// global slice have all the data for the application
export const globalSlice = createSlice({
  name: "global_slice",
  initialState,
  reducers: {
    // ? add a todo
    addTodo: (state, action) => {
      state.todo = [...state.todo, action.payload];
    },
    // ? remove a todo
    removeTodo: (state, action) => {
      const filteredArr = state.todo.filter((todo) => {
        return todo.id !== action.payload;
      });
      state.todo = filteredArr;
    },
    // ? edit a todo
    editTodo: (state, action) => {
      const editedArr = state.todo.map((todo) => {
        if (todo.id === action.payload.id) {
          return { id: todo.id, title: action.payload.title };
        }
        return todo;
      });
      state.todo = editedArr;
    },

    // ? add a note
    addNote: (state, action) => {
      state.notes = [...state.notes, action.payload];
    },

    // ? remove a note
    removeNote: (state, action) => {
      const filteredArr = state.notes.filter(
        (note) => note.id !== action.payload
      );
      state.notes = filteredArr;
    },

    // ? change label color of note
    changeLabelColor: (state, action) => {
      const editedArr = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return { ...note, labelColor: action.payload.labelColor };
        }
        return note;
      });
      state.notes = editedArr;
    },

    // ? add to favourites
    addToFavourites: (state, action) => {
      console.log(state.notes);
    },

    // ? Edit note
    editNote: (state, action) => {
      const editedArr = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });
      state.notes = editedArr;
    },
  },
});

// * actions
export const {
  addTodo,
  removeTodo,
  editTodo,
  addNote,
  removeNote,
  changeLabelColor,
  addToFavourites,
  editNote,
} = globalSlice.actions;
// * reducer
export default globalSlice.reducer;
