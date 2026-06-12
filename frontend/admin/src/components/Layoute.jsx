import React from 'react'
import { useState } from "react";
import Header from './Header'
import Saidebar from './Saidebar'
import { Outlet } from 'react-router-dom'

function Layoute() {
   const [openSidebar, setOpenSidebar] = useState(false);
   return (
    <div className="flex">
      <Saidebar  openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar} />

      <div className="flex-1">
        <Header setOpenSidebar={setOpenSidebar}  />
        <Outlet />
        
      </div>
    </div>
  )
}

export default Layoute
