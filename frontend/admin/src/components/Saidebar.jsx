import React from 'react'
import { Link } from 'react-router-dom'

function Saidebar() {
  return (
    <div>
      <h2 >Triova</h2>
      <ul >
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/client" >Client</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
        <li><Link to="/devis" >Devis</Link></li> 
        <li><Link to="/services" >Services</Link></li>
      </ul>
    </div>
  )
}

export default Saidebar
