import React from 'react'

import Hero from './ComponentAcceuil/Hero';
import Partener from './ComponentAcceuil/Partener';
import Services from './ComponentAcceuil/Services';
import Apropos from './ComponentAcceuil/Apropos';
import ProjetsRealises from './ComponentAcceuil/ProjetsRealises';
import Avis from './ComponentAcceuil/Avis';
import Realisations from './ComponentAcceuil/Realisations';



function Principal() {
 
  return (
    <div>
<Hero/>
<Partener/>
 <Services/> 
<Apropos/> 

<Avis/>
<Realisations/>
    </div>
  )
}

export default Principal
