import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  X,
  LogOut,
  LayoutDashboard,
  Users,
  MessageSquare,
  FileText,
  Sparkles,
} from "lucide-react";
import logo from "./logo.jpeg";
import { getCurrentUser, hasPermission, logout } from "../auth/mockAuth";

const menuItems = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, superadminOnly: true },
  { to: "/client", label: "Client", icon: Users, permission: "orders" },
  { to: "/contact", label: "Contact", icon: MessageSquare, permission: "users" },
  { to: "/devis", label: "Devis", icon: FileText, permission: "devis" },
  { to: "/services", label: "Services", icon: Sparkles, permission: "services" },
];

function Saidebar({ openSidebar, setOpenSidebar }) {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const visibleItems = menuItems.filter((item) => {
    if (item.superadminOnly) return user?.role === "superadmin";
    return !item.permission || hasPermission(user, item.permission);
  });

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      {/* Overlay Mobile */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpenSidebar(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static top-0 left-0 z-50
          min-h-screen w-64
          bg-gradient-to-br from-violet-200 via-violet-300 to-sky-300
          text-black
          transform transition-transform duration-300
          flex flex-col
          ${openSidebar ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Close Mobile */}
        <div className="flex justify-end p-4 lg:hidden">
          <button onClick={() => setOpenSidebar(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Logo */}
        <div className="px-6 py-4 flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-14 h-14 rounded-full object-cover bg-white p-1"
          />

          <div>
            <h2 className="font-bold text-lg text-violet-800">
              TRIOVA
            </h2>
            <p className="text-xs text-gray-600 tracking-wider">
              PANNEAU ADMIN
            </p>
          </div>
        </div>

        {/* Menu */}
        <ul className="flex flex-col gap-2 p-4">
          {visibleItems.map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-white text-violet-700 shadow-md font-semibold"
                      : "hover:bg-white/30"
                  }`
                }
              >
                <Icon size={20} />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Logout */}
        <div className="mt-auto p-4 border-t border-white/30">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-black hover:bg-red-500/10 hover:text-red-600 transition-all"
          >
            <LogOut size={20} />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Saidebar;