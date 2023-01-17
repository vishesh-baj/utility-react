import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  user: null,
  todo: [],
  notes: {
    sessionNotes: [],
    favouriteNotes: [],
  },
  pomodoro: [],
  colorPicker: [],
  appConstants: {
    activityScore: 0,
    userLevel: 0,
    timesLoggedIn: 0,
  },
};

// global slice have all the data for the application
export const globalSlice = createSlice({
  name: "global_slice",
  initialState,
  reducers: {
    // * TODOS___________________________________________________________
    // ? add a todo
    addTodo: (state, action) => {
      state.todo = [...state.todo, action.payload];
      state.appConstants.activityScore += 1;
    },
    // ? remove a todo
    removeTodo: (state, action) => {
      const filteredArr = state.todo.filter((todo) => {
        return todo.id !== action.payload;
      });
      state.todo = filteredArr;
      state.appConstants.activityScore += 1;
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
      state.appConstants.activityScore += 1;
    },

    // * NOTES___________________________________________________________
    // ? add a note
    addNote: (state, action) => {
      state.notes.sessionNotes = [...state.notes.sessionNotes, action.payload];
      state.appConstants.activityScore += 1;
    },

    // ? remove a note
    removeNote: (state, action) => {
      const filteredArr = state.notes.sessionNotes.filter(
        (note) => note.id !== action.payload
      );
      state.notes.sessionNotes = filteredArr;
      state.appConstants.activityScore += 1;
    },

    // ? change label color of note to different color
    changeLabelColor: (state, action) => {
      const editedArr = state.notes.sessionNotes.map((note) => {
        if (note.id === action.payload.id) {
          return { ...note, labelColor: action.payload.labelColor };
        }
        return note;
      });
      state.notes.sessionNotes = editedArr;
      state.appConstants.activityScore += 1;
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
      state.appConstants.activityScore += 1;
    },

    // ? Add note to favourite
    addNoteToFavourite: (state, action) => {
      state.notes.favouriteNotes = [
        ...state.notes.favouriteNotes,
        action.payload,
      ];
      state.appConstants.activityScore += 1;
    },
  },
});

// specifics are provided
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
  addNoteToFavourite,
} = globalSlice.actions;
// * reducer
export default globalSlice.reducer;
