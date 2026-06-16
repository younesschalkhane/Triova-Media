import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import Header from "./Header";
import Saidebar from "./Saidebar";
import { Outlet } from "react-router-dom";

/**
 * Layout principal de l'interface admin.
 * - Contient la sidebar, le header et le contenu principal
 * - Gère le mode clair / sombre
 * - Gère l'ouverture/fermeture de la sidebar sur mobile
 */
function Layoute() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { isDark } = useTheme();

  return (
    <div className={`flex min-h-screen ${isDark ? "bg-gray-950" : "bg-slate-50"}`}>
      <Saidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        <Header setOpenSidebar={setOpenSidebar} />
        <main className="flex-1  pt-[0px] lg:ml-64">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layoute;