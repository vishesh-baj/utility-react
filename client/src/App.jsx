import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthLayout, DashboardLayout } from "./layout";
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

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* auth routes */}
        <AuthLayout>
          <Routes>
            <Route element={<LoginPage />} path={PATHS.login} />
            <Route element={<RegisterPage />} path={PATHS.register} />
          </Routes>
        </AuthLayout>

        {/* app routes */}
        <Routes>
          <Route element={<Navigate to={PATHS.login} />} path={PATHS.root} />
          <Route element={<HomePage />} to={PATHS.home} />
          <Route element={<ColorPickerPage />} path={PATHS.colorpicker} />
          <Route element={<NotesPage />} path={PATHS.notes} />
          <Route element={<PomodoroPage />} path={PATHS.pomodoro} />
          <Route element={<TodoPage />} path={PATHS.todo} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
