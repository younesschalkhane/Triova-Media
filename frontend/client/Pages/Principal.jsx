import React from 'react'
import { Link } from 'react-router-dom'

function Principal() {
  return (
    <div>
        <nav>
        <Link to="/">Principal</Link>
        <Link to="/Notre-agence">Notre-agence</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Contact">Contact</Link>






        </nav>
      
    </div>
  )
}

export default Principal
