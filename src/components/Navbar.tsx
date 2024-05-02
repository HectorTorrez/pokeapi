/* eslint-disable react/react-in-jsx-scope */
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-white border-gray-200 ">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
        <ul className="flex items-center gap-5 text-lg">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "text-blue-700" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/teams"}
              className={({ isActive }) => (isActive ? "text-blue-700" : "")}
            >
              Equipos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
