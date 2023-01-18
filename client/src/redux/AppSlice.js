import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  user: null,
  todo: [
    { id: 1, title: "Make Coffee" },
    { id: 2, title: "Complete created tasks" },
    { id: 3, title: "Go out for a walk" },
  ],
  notes: {
    sessionNotes: [
      {
        id: Math.trunc(Math.random() * 10000),
        title: "A short story",
        info: "orem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend pellentesque tempus. Nullam malesuada varius quam quis placerat. Vivamus est eros, porta ut risus eu, fringilla vulputate libero. Morbi tellus leo, sagittis id faucibus vitae, tincidunt sed ipsum. Maecenas nec feugiat libero. Mauris id nunc ac ex bibendum varius nec eget urna. Morbi et velit sit amet dolor dignissim finibus. Duis commodo rhoncus blandit. Mauris pretium feugiat mi, id tempus purus imperdiet pulvinar. Ut pellentesque metus sed ligula ornare aliquet. Praesent finibus fringilla egestas. Sed nec quam nisi.",
        labelColor: "none",
      },
      {
        id: Math.trunc(Math.random() * 10000),
        title: "Life's stanza",
        info: "orem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend pellentesque tempus. Nullam malesuada varius quam quis placerat.",
        labelColor: "none",
      },
      {
        id: Math.trunc(Math.random() * 10000),
        title: "What to do today",
        info: "orem ipsum dolor sit amet, consectetur adipiscing elit.",
        labelColor: "none",
      },
    ],
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
