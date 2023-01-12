import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./redux/AppSlice";
export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
