import React from 'react'
import image from "./image.PNG"


function Services() {
  return (
 <div>
   
    <section className="min-h-screen bg-gradient-to-br from-[#0b0220] via-violet-600 to-sky-500 text-white px-6 py-16 ">

      
      {/* Title */}

      <div className="flex justify-around gap-15 pt-20  ">

      <div className=''>
        <span className="bg-violet-500/20 text-sky-400 px-4 py-2 rounded-full text-sm tracking-widest uppercase">

          Nos Services

        </span>

        <h1 className="text-5xl font-bold mt-6 leading-tight bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">

          Des solutions digitales <br />

        <span className="text-sky-400">adaptées à vos besoins</span>

        </h1>

        <p className="text-gray-300 mt-6 text-lg w-120 pb-10">

          Nous proposons des services modernes pour développer

          votre présence digitale et booster votre activité.

        </p>
        <button className="mt-6 md:mt-0 px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-violet-400 hover:scale-105 transition duration-300 font-semibold">Demmandez Votre Projet</button>
        </div>
        <img src={image} alt="Service" className="w-150 " />

      </div>

</section>  

   {/* Heading */}
    
     <section className='pt-15'>
      <div className='flex justify-around '>
        <div className='flex-col'>
      <h2 className='text-5xl font-bold leading-tight bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent'>Un Système Digital </h2>
      <h3 className='text-5xl font-bold leading-tight bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent'> Centralisé et Innovant</h3>
      </div>
      <p className='w-150 pt-18'>Chaque service apporte sa propre valeur. 
        Réunis, ils créent une synergie digitale qui renforce chaque point de contact.</p>
</div>

     </section>

      {/* boxs */}

       <section className="py-24 bg-white pb-8">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Card 1 */}
      <div className="group rounded-3xl border border-gray-200 p-8 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-100">
        
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 flex items-center justify-center text-white mb-8">
          🔍
        </div>

        {/* Category */}
        <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gray-400">
          Visibilité Organique
        </span>

        {/* Title */}
        <h3 className="mt-4 text-3xl font-bold text-gray-900">
          SEO & Référencement
        </h3>

        {/* Desc */}
        <p className="mt-5 text-gray-600 leading-relaxed">
          Audit technique, stratégie de contenu et optimisation SEO pour
          améliorer votre visibilité sur Google.
        </p>

        {/* Features */}
        <ul className="mt-8 space-y-4">
          {[
            "Audit SEO technique complet",
            "Recherche de mots-clés",
            "Optimisation on-page",
            "Stratégie backlinks",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-gray-700"
            >
              <div className="w-2 h-2 rounded-full bg-sky-500"></div>
              {item}
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm text-gray-400">Résultat type</span>

          <div className="flex items-center gap-2 text-sky-600 font-semibold">
            +184% trafic
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group rounded-3xl border border-gray-200 p-8 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-100">
        
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-sky-500 flex items-center justify-center text-white mb-8">
          🚀
        </div>

        {/* Category */}
        <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gray-400">
          Google Ads • Meta • TikTok
        </span>

        {/* Title */}
        <h3 className="mt-4 text-3xl font-bold text-gray-900">
          Publicité Payante (SEA)
        </h3>

        {/* Desc */}
        <p className="mt-5 text-gray-600 leading-relaxed">
          Campagnes data-driven optimisées pour maximiser le ROAS et générer
          une croissance rentable.
        </p>

        {/* Features */}
        <ul className="mt-8 space-y-4">
          {[
            "Tracking & architecture",
            "Création visuelle",
            "A/B testing",
            "Reporting ROAS",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-gray-700"
            >
              <div className="w-2 h-2 rounded-full bg-violet-500"></div>
              {item}
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm text-gray-400">Résultat type</span>

          <div className="flex items-center gap-2 text-violet-600 font-semibold">
            ROAS x4.2
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 
 <section className="py-24 bg-white pt-0">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Card 3 */}
      <div className="group rounded-3xl border border-gray-200 p-8 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-100">
        
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 flex items-center justify-center text-white mb-8">
          🔍
        </div>

        {/* Category */}
        <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gray-400">
          Création Site Web 
        </span>

        {/* Title */}
        <h3 className="mt-4 text-3xl font-bold text-gray-900">
          Programmation des Sites Web
        </h3>

        {/* Desc */}
        <p className="mt-5 text-gray-600 leading-relaxed">
          Nous développons des sites web modernes, rapides et entièrement sur mesure pour répondre aux besoins spécifiques de votre activité. Chaque projet est conçu avec une attention particulière portée à la performance,
           l’expérience utilisateur et l’évolutivité.
        </p>

        {/* Features */}
        <ul className="mt-8 space-y-4">
          {[
            "Développement front-end moderne & responsive",
            "Interfaces fluides et optimisées UX/UI",
            "Intégration de fonctionnalités dynamiques",
            "Code propre, scalable et maintenable",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-gray-700"
            >
              <div className="w-2 h-2 rounded-full bg-sky-500"></div>
              {item}
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm text-gray-400">Résultat type</span>

          <div className="flex items-center gap-2 text-sky-600 font-semibold">
            +184% trafic
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="group rounded-3xl border border-gray-200 p-8 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-100">
        
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-sky-500 flex items-center justify-center text-white mb-8">
          🚀
        </div>

        {/* Category */}
        <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gray-400">
          COMMUNAUTE & ENGAGEMENT
        </span>

        {/* Title */}
        <h3 className="mt-4 text-3xl font-bold text-gray-900">
          Social Media
        </h3>

        {/* Desc */}
        <p className="mt-5 text-gray-600 leading-relaxed">
          Stratégie éditoriale, production de contenu et community management.
           On transforme vos abonnés en ambassadeurs.
        </p>

        {/* Features */}
        <ul className="mt-8 space-y-4">
          {[
            "Stratégie & ligne éditoriale",
            "Production photo, vidéo, motion",
            "Community management 7j/7",
            "Influence & partenariats créateurs",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-gray-700"
            >
              <div className="w-2 h-2 rounded-full bg-violet-500"></div>
              {item}
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm text-gray-400">Résultat type</span>

          <div className="flex items-center gap-2 text-violet-600 font-semibold">
            ROAS x4.2
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>











</div>


  )
}

export default Services
