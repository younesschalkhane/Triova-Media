import React from 'react'
import { Menu, Search, Bell } from "lucide-react";

 function Header({ setOpenSidebar }) {
  return (
<<<<<<< HEAD
    <header className="h-[70px] bg-gradient-to-br from-violet-50 via-violet-100 to-sky-100 border-b border-gray-100 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <button
                onClick={() => setOpenSidebar(true)}

         className="lg:hidden p-2 rounded-lg bg-gradient-to-r from-violet-500 to-sky-600 text-white">
          <Menu size={20}className='text-white'  />
        </button>

        <div className="flex items-center gap-2 w-[300px] h-10 px-4 bg-gray-50 border border-gray-200 rounded-full">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="flex-1 bg-transparent outline-none text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative cursor-pointer">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
        </div>

        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold bg-gradient-to-r from-orange-400 to-pink-500">
          A
        </div>
      </div>
    </header>
  );
=======
    <div>
      <h1 >Admin Dashboard</h1>
      
    </div>
  )
>>>>>>> 41eef6c711df4d6e90db6ae1c408f07f389a9b56
}

export default Header
