import React from 'react'

import Hero from './ComponentAcceuil/Hero';
import Partener from './ComponentAcceuil/Partener';
import Services from './ComponentAcceuil/Services';
import Apropos from './ComponentAcceuil/Apropos';
import RealisationsSection from './ComponentAcceuil/RealisationsSection';
import Avis from './ComponentAcceuil/Avis';



function Principal() {
 
  return (
    <div>
<Hero/>
<Partener/>
 <Services/> 
<Apropos/> 
<RealisationsSection/>
<Avis/>


    </div>
  )
}

export default Principal
