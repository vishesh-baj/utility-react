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
                <NavLink to={PATHS.home}>Home</NavLink>
              </li>
              <li>
                <NavLink to={PATHS.todo}>Todo</NavLink>
              </li>
              <li>
                <NavLink to={PATHS.notes}>Notes</NavLink>
              </li>
              <li>
                <NavLink to={PATHS.pomodoro}>Pomodoro</NavLink>
              </li>
              <li>
                <NavLink to={PATHS.colorpicker}>Color Picker</NavLink>
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
              onClick={() => (toggleRef.current.checked = false)}
              to={PATHS.home}
              className={({ isActive }) =>
                isActive ? "btn btn-primary" : "bg-transparent"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => (toggleRef.current.checked = false)}
              to={PATHS.todo}
              className={({ isActive }) =>
                isActive ? "btn btn-primary" : "bg-transparent"
              }
            >
              Todos
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => (toggleRef.current.checked = false)}
              to={PATHS.notes}
              className={({ isActive }) =>
                isActive ? "btn btn-primary" : "bg-transparent"
              }
            >
              Notes
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => (toggleRef.current.checked = false)}
              to={PATHS.pomodoro}
              className={({ isActive }) =>
                isActive ? "btn btn-primary" : "bg-transparent"
              }
            >
              Pomodoro
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => (toggleRef.current.checked = false)}
              to={PATHS.colorpicker}
              className={({ isActive }) =>
                isActive ? "btn btn-primary" : "bg-transparent"
              }
            >
              Color Picker
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
