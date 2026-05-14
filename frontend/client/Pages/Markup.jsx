import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layoute  from '../Component/Layoute'
import Principal from './Principal'
import NotreAgence from './NotreAgence'
import Services from './Services'
import Contacte from './Contacte'

function Markup() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layoute />} >

        <Route path="/" element={<Principal />} />
        <Route path="/Notre-agence" element={<NotreAgence />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contacte />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    
    
  )
}

export default Markup
