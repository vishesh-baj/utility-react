import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import {
  ColorPickerPage,
  HomePage,
  LoginPage,
  NotesPage,
  PomodoroPage,
  RegisterPage,
  TodoPage,
} from "./pages";
import { PATHS } from "./routes/paths";
import { Protected } from "./routes/ProtectedRoutes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* auth routes */}
          <Route element={<LoginPage />} path={PATHS.login} />
          <Route element={<RegisterPage />} path={PATHS.register} />
          <Route element={<Navigate to={PATHS.login} />} path={PATHS.root} />

          {/* app routes protected with extra layer */}
          <Route
            element={
              <Protected isLoggedIn={true}>
                <HomePage />
              </Protected>
            }
            path={PATHS.home}
          />
          <Route
            element={
              <Protected isLoggedIn={true}>
                <TodoPage />
              </Protected>
            }
            path={PATHS.todo}
          />
          <Route
            element={
              <Protected isLoggedIn={true}>
                <NotesPage />
              </Protected>
            }
            path={PATHS.notes}
          />
          <Route
            element={
              <Protected isLoggedIn={true}>
                <PomodoroPage />
              </Protected>
            }
            path={PATHS.pomodoro}
          />
          <Route
            element={
              <Protected isLoggedIn={true}>
                <ColorPickerPage />
              </Protected>
            }
            path={PATHS.colorpicker}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
