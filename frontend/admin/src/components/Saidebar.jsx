import React from 'react'
import { Link } from 'react-router-dom'

function Saidebar() {
  return (
    <div>

      <ul className='flex flex-col gap-4 p-4'>
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/client">Client</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/devis">Devis</Link></li> 
      <li><Link to="/services">Services</Link></li>


    
      </ul>
      
    </div>
  )
}

export default Saidebar
