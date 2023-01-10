import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../routes/paths";

const DashboardLayout = ({ children }) => {
  const toggleRef = useRef();
  return (
    <div className="drawer">
      <input
        ref={toggleRef}
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">Utility App</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
              <li>
                <a>Navbar Item 1</a>
              </li>
              <li>
                <a>Navbar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu flex flex-col gap-5 p-4 w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink
              to={PATHS.login}
              className={({ isActive }) =>
                isActive ? "btn btn-primary" : "bg-transparent"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink>Todo</NavLink>
          </li>
          <li>
            <NavLink>Notes</NavLink>
          </li>
          <li>
            <NavLink>Pomodoro</NavLink>
          </li>
          <li>
            <NavLink>Color Picker</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
