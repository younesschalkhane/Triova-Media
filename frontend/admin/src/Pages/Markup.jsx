import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layoute from '../components/Layoute'
import PermissionRoute from '../components/PermissionRoute'
import Dashboard from './Dashboard/Tableaubord'
import Services from './Services/Services'
import Contact from './Contact/Contact'
import Client from './Client/Client'
import DevisList from './Devis/DevisList'
import DétailsClient from './Client/DétailsClient'
import Reviews from './Reviews/Reviews'

function Markup() {
  return (
    <Routes>
      <Route path="/" element={<Layoute />}>
        <Route
          index
          element={
            <PermissionRoute path="/">
              <Dashboard />
            </PermissionRoute>
          }
        />
        <Route
          path="services"
          element={
            <PermissionRoute path="/services">
              <Services />
            </PermissionRoute>
          }
        />
        <Route
          path="contact"
          element={
            <PermissionRoute path="/contact">
              <Contact />
            </PermissionRoute>
          }
        />
        <Route
          path="devis"
          element={
            <PermissionRoute path="/devis">
              <DevisList />
            </PermissionRoute>
          }
        />
        <Route
          path="client"
          element={
            <PermissionRoute path="/client">
              <Client />
            </PermissionRoute>
          }
        />
        <Route
          path="client/demandes"
          element={
            <PermissionRoute path="/client/demandes">
              <DétailsClient />
            </PermissionRoute>
          }
        />
        <Route
          path="avis"
          element={
            <PermissionRoute path="/avis">
              <Reviews />
            </PermissionRoute>
          }
        />
      </Route>
    </Routes>
  )
}

export default Markup
