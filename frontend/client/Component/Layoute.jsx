import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ChatBox from "./ChatBox";

function Layoute() {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
       <ChatBox />
    </div>
  )
}

export default Layoute

