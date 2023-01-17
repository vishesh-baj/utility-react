import React from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../routes/paths";

// error page to be showed everytime unassigned route is hit
const ErrorPage = () => {
  return (
    <div className="w-screen h-screen bg-primary flex flex-col justify-center items-center">
      <h1 className="text-8xl text-accent-content">404</h1>
      <h1 className="text-4xl">Page not found</h1>
      <div className="flex">
        <NavLink to={PATHS.home} className="btn btn-ghost">
          go back
        </NavLink>
        <NavLink to={PATHS.login} className="btn btn-primary">
          contact admin
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
