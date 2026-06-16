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
import { useTheme } from "../context/ThemeContext";
import { getCurrentUser, hasPermission, logout } from "../auth/mockAuth";

/**
 * Menu items de la sidebar.
 * - Dashboard visible uniquement pour les superadmins
 * - Les autres items sont contrôlés par les permissions
 */
const menuItems = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, superadminOnly: true },
  { to: "/services", label: "Services", icon: Sparkles, permission: "services" },
  { to: "/devis", label: "Devis", icon: FileText, permission: "devis" },
  { to: "/client/demandes", label: "Demandes", icon: MessageSquare, permission: "orders" },
  { to: "/contact", label: "Contact", icon: Users, permission: "contact" },
  
  { to: "/avis", label: "Avis Clients", icon: MessageSquare, permission: "services" },
];

function Saidebar({ openSidebar, setOpenSidebar }) {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const { isDark } = useTheme();

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
          
          fixed left-0 top-[80px] h-[calc(100vh-80px)] z-50
          min-h-screen w-64
          flex flex-col
          transform transition-transform duration-300
          ${openSidebar ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          ${isDark
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200"
            : "bg-gradient-to-br from-violet-200 via-violet-300 to-sky-300 text-black"
          }
        `}
      >
        {/* Close Mobile */}
        <div className="flex justify-end p-4 lg:hidden">
          <button onClick={() => setOpenSidebar(false)}>
            <X size={24} />
          </button>
        </div>

        {/* En-tête sidebar (sans logo, sans "Panneau Admin") */}
       

        {/* Menu */}
        <ul className="flex flex-col gap-2 p-4">
          {visibleItems.map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-xl transition-all ${
                    isActive
                      ? isDark
                        ? "bg-violet-900/40 text-violet-300 shadow-md font-semibold"
                        : "bg-white text-violet-700 shadow-md font-semibold"
                      : isDark
                        ? "hover:bg-gray-700/50 text-gray-300"
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

        {/* Déconnexion */}
        <div
          className={`mt-auto p-4 border-t ${
            isDark ? "border-gray-700" : "border-white/30"
          }`}
        >
          <button
            onClick={handleLogout}
            className={`
              w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all
              ${isDark
                ? "text-gray-300 hover:bg-red-900/20 hover:text-red-400"
                : "text-black hover:bg-red-500/10 hover:text-red-600"
              }
            `}
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