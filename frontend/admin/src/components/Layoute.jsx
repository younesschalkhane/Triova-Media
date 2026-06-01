import React from 'react'
import Header from './Header'
import Saidebar from './Saidebar'
import { Outlet } from 'react-router-dom'

function Layoute() {
   return (
    <div className="flex">
      <Saidebar />

      <div className="flex-1">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default Layoute
