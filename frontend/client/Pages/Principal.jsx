import React from 'react'

import Hero from './ComponentAcceuil/Hero';
import Partener from './ComponentAcceuil/Partener';
import Services from './ComponentAcceuil/Services';
import Apropos from './ComponentAcceuil/Apropos';



function Principal() {
 
  return (
    <div>
<Hero/>
<Partener/>
 <Services/> 
<Apropos/>    
    </div>
  )
}

export default Principal
