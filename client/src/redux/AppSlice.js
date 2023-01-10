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
  reducers: {},
});

export default globalSlice.reducer;
