import React from "react";
import logo from "../src/assets/logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  const baseStyle =
    "px-4 py-2 border-b-2 transition hover:scale-105";

  const activeStyle =
    "border-violet-600 text-violet-600";
  const inactiveStyle =
    "border-transparent text-gray-600 hover:border-violet-600";

  return (
    <header className="p-4 bg-gradient-to-br from-sky-100 via-violet-50 to-violet-100 backdrop-blur-md border-b border-gray-100 text-gray-600">
      <div className="container flex justify-between h-16 mx-auto items-center">

        {/* Logo */}
        <NavLink to="/" className="flex items-center p-2">
          <img src={logo} alt="logo" className="w-40 h-auto" />
        </NavLink>

        {/* Nav */}
        <ul className="hidden lg:flex items-center space-x-6">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              Accueil
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Notre-agence"
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              A propos
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Services"
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              Nos services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              Contacts
            </NavLink>
          </li>

        </ul>
      </div>
    </header>
  );
}

export default Header;