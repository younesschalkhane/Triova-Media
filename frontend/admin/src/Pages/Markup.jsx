import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layoute from '../components/Layoute'
import Dashboard from './Dashboard/Tableaubord'
import Services from './Services/Services'
import Contact from './Contact/Contact'
import Client from './Client/Client'
import DevisList from './Devis/DevisList'



function Markup() {
  return (
    <div>

    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layoute />}>
        <Route index element={<Dashboard />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="devis" element={<DevisList />} />
         
        <Route path="client" element={<Client />} />
      </Route>
     </Routes>
    </BrowserRouter>


      
    </div>
  )
}

export default Markup
