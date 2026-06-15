import React from "react";

import { NavLink } from "react-router-dom";
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


function Saidebar({ openSidebar, setOpenSidebar }) {
  return (

    <>
      {/* Overlay */}
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
    min-h-screen w-64 bg-gradient-to-br from-violet-200 via-violet-300 to-sky-300 text-black
    transform transition-transform duration-300
    flex flex-col
    ${openSidebar ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0
  `}
>
        {/* Close button mobile */}
        <div className="flex justify-end p-4 lg:hidden">
          <button onClick={() => setOpenSidebar(false)}>
            <X size={24} />
          </button>
        </div>

         <div className="px-6 py-4 flex gap-2 items-center">
            <img src={logo} alt="Logo" className="w-18 h-18 rounded-4xl object-contain" />
            
            
            <p className="text-xs text-gray-600">Panneau Admin</p>
          </div>

        <ul className="flex flex-col gap-2 p-4">
  <li>
    <NavLink
      to="/"
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10"
    >
      <LayoutDashboard size={20} />
      <span>Dashboard</span>
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/client"
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10"
    >
      <Users size={20} />
      <span>Client</span>
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/contact"
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10"
    >
      <MessageSquare size={20} />
      <span>Contact</span>
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/devis"
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10"
    >
      <FileText size={20} />
      <span>Devis</span>
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/services"
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10"
    >
      <Sparkles size={20} />
      <span>Services</span>
    </NavLink>
  </li>
</ul>
         {/* Logout */}
      <div className="mt-auto p-4">
  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-black hover:bg-red-500/10 hover:text-red-400 transition-all">
    <LogOut size={20} />
    <span>Déconnexion</span>
  </button>
</div>
      </aside>

    </>
  );

    
}


  
export default Saidebar;
