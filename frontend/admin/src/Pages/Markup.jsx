import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layoute from '../components/Layoute'
import Dashboard from './Dashboard/Tableaubord'
import Services from './Services/Services'
import Contact from './Contact/Contact'
import Devis from './Devis/DevisList'
import Client from './Client/Client'


function Markup() {
  return (
    <Routes>
      <Route path="/" element={<Layoute />}>
        <Route index element={<Dashboard />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="devis" element={<Devis />} />
        <Route path="client" element={<Client />} />
      </Route>
    </Routes>
  )
}

export default Markup
