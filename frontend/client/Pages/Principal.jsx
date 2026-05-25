import React from 'react'

import Hero from './ComponentAcceuil/Hero';
import Partener from './ComponentAcceuil/Partener';
import Services from './ComponentAcceuil/Services';
import Apropos from './ComponentAcceuil/Apropos';
import ProjetsRealises from './ComponentAcceuil/ProjetsRealises';
import Avis from './ComponentAcceuil/Avis';




function Principal() {
 
  return (
    <div>
<Hero/>
<Partener/>
 <Services/> 
<Apropos/> 
<ProjetsRealises/>
<Avis/>

    </div>
  )
}

export default Principal
