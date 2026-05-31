import React, { useEffect, useState } from "react";
import logo from "../src/assets/logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseStyle = "px-4 py-2 border-b-2 transition hover:scale-105";
  const activeStyle = "border-violet-600 text-violet-600";
  const inactiveStyle =
    "border-transparent text-gray-600 hover:border-violet-600";

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-gradient-to-br from-sky-100 via-violet-50 to-violet-100"
      }`}
    >
      <div className="container flex justify-between h-16 mx-auto items-center px-4">

        {/* LOGO */}
        <NavLink to="/" className="flex items-center p-2">
          <img src={logo} alt="logo" className="w-32 sm:w-36 md:w-40" />
        </NavLink>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center space-x-6">
          {[
            { to: "/", label: "Accueil" },
            { to: "/Notre-agence", label: "A propos" },
            { to: "/Services", label: "Nos services" },
            { to: "/Contact", label: "Contact" },
          ].map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `${baseStyle} ${
                    isActive ? activeStyle : inactiveStyle
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white shadow-md px-6 py-4 space-y-3">
          {[
            { to: "/", label: "Accueil" },
            { to: "/Notre-agence", label: "A propos" },
            { to: "/Services", label: "Nos services" },
            { to: "/Contact", label: "Contact" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "text-violet-600 font-semibold" : "text-gray-600"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;