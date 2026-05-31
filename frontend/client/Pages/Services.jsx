import React from 'react'
import image3 from "./image3.png"
import {
  Code2,
  Brain,
  Palette,
  Megaphone,
  Sparkles,
  Share2,
  Search
} from "lucide-react";
import { motion } from "framer-motion";


function Services() {
  return (
 <div className= "pb-20">
   
    <section className="min-h-screen bg-gradient-to-br from-sky-100 via-violet-50 to-violet-100 text-white px-6 py-16 ">

      
      {/* Title */}

      <div className="flex justify-around gap-15 pt-20  ">

      <motion.div initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <span className="bg-violet-500/20 text-sky-400 px-4 py-2 rounded-full text-sm tracking-widest uppercase">

          Nos Services

        </span>

        <h1 className="text-5xl font-bold mt-6 leading-tight bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">

          Des solutions digitales <br />

        <span className="text-5xl font-bold leading-tight bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">adaptées à vos besoins</span>

        </h1>

        <p className="text-gray-600 mt-6 text-lg w-120 pb-10">

          Nous proposons des services modernes pour développer

          votre présence digitale et booster votre activité.

        </p>
        <button className="mt-6 md:mt-0 px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-violet-400 hover:scale-105 transition duration-300 font-semibold">Demmandez Votre Projet</button>
        </motion.div>
        <motion.dev  initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}>
        <img src={image3} alt="Service" className="w-150 " />
        </motion.dev>

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
      <div className="group rounded-3xl border border-gray-200 p-8 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_-4px_20px_rgba(59,130,246,0.35)]">
        
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 flex items-center justify-center text-white mb-8">
          <Code2 size={28} />
        </div>

        {/* Category */}
        <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gray-400">
          Création Site Web 
        </span>

        {/* Title */}
        <h3 className="mt-4 text-3xl font-bold text-gray-900">
          Programmation Web
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

      {/* Card 2 */}
      <div className="group rounded-3xl border border-gray-200 p-8 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_-4px_20px_rgba(59,130,246,0.35)]">
        
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-sky-500 flex items-center justify-center text-white mb-8">
          <Brain size={28} />
        </div>

        {/* Category */}
        <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gray-400">
          SOLUTIONS D'INTELLIGENCE ARTIFICIELLE
        </span>

        {/* Title */}
        <h3 className="mt-4 text-3xl font-bold text-gray-900">
          Solutions AI
        </h3>

        {/* Desc */}
        <p className="mt-5 text-gray-600 leading-relaxed">
         Nous développons des solutions d’intelligence artificielle modernes, performantes et entièrement adaptées aux besoins de votre activité. 
         Chaque projet est conçu avec une attention particulière portée à l’automatisation, l’expérience utilisateur et l’innovation digitale.
        </p>

        {/* Features */}
        <ul className="mt-8 space-y-4">
          {[
            "Développement d’agents IA intelligents & automatisés",
            "Chatbots IA fluides et optimisés UX/UI",
            "Intégration d’API IA et fonctionnalités avancées",
            "Solutions scalables, sécurisées et maintenables",
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
 
 <section className="py-24 bg-white pt-0 pb-8">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Card 3 */}
      
      <div className="group rounded-3xl border border-gray-200 p-8 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_-4px_20px_rgba(59,130,246,0.35)]">
        
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 flex items-center justify-center text-white mb-8">
          <Palette size={28} />
        </div>

        {/* Category */}
        <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gray-400">
          IDENTITE VISUELLE
        </span>

        {/* Title */}
        <h3 className="mt-4 text-3xl font-bold text-gray-900">
          Identité Visuelle
        </h3>

        {/* Desc */}
        <p className="mt-5 text-gray-600 leading-relaxed">
          Nous créons des identités visuelles modernes et mémorables qui reflètent parfaitement l’image et les valeurs de votre marque.
          Chaque création est pensée pour garantir cohérence, impact visuel et reconnaissance professionnelle.
        </p>

        {/* Features */}
        <ul className="mt-8 space-y-4">
          {[
            "Création de logos uniques & professionnels",
            "Conception de chartes graphiques modernes",
            "Design de supports marketing & réseaux sociaux",
            "Identité visuelle cohérente, créative et évolutive",
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
      <div className="group rounded-3xl border border-gray-200 p-8 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_-4px_20px_rgba(59,130,246,0.35)]">
        
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-sky-500 flex items-center justify-center text-white mb-8">
          <Megaphone size={28} />
        </div>

        {/* Category */}
        <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gray-400">
          GOOGLE ADS & META ADS
        </span>

        {/* Title */}
        <h3 className="mt-4 text-3xl font-bold text-gray-900">
          ADS Marketing
        </h3>

        {/* Desc */}
        <p className="mt-5 text-gray-600 leading-relaxed">
          Nous créons des campagnes publicitaires digitales performantes pour développer votre visibilité, attirer de nouveaux clients et maximiser vos résultats.
           Chaque stratégie est conçue avec une approche orientée performance, conversion et croissance.
        </p>

        {/* Features */}
        <ul className="mt-8 space-y-4">
          {[
            "Création et gestion de campagnes Meta Ads & Google Ads",
            "Ciblage précis et optimisation des performances",
            "Visuels publicitaires modernes et impactants",
            "Stratégies marketing orientées conversion & ROI",
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

 <section className="py-24 bg-white pt-0 pb-8">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Card 5 */}
      <div className="group rounded-3xl border border-gray-200 p-8 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_-4px_20px_rgba(59,130,246,0.35)]">
        
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 flex items-center justify-center text-white mb-8">
          <Sparkles size={28} />
        </div>

        {/* Category */}
        <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gray-400">
         INTELLIGENCE ARTIFICIELLE
        </span>

        {/* Title */}
        <h3 className="mt-4 text-3xl font-bold text-gray-900">
          Création AI
        </h3>

        {/* Desc */}
        <p className="mt-5 text-gray-600 leading-relaxed">
          Nous concevons des créations basées sur l’intelligence artificielle pour donner vie à vos idées avec innovation, rapidité et créativité. 
          Chaque projet est pensé pour offrir un rendu moderne, impactant et adapté à votre image de marque.
        </p>

        {/* Features */}
        <ul className="mt-8 space-y-4">
          {[
            "Génération de contenus visuels & designs par IA",
            "Création de vidéos et visuels publicitaires IA",
            "Production de contenus créatifs pour réseaux sociaux",
            "Solutions IA innovantes, rapides et personnalisées",
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

      {/* Card 6 */}
      <div className="group rounded-3xl border border-gray-200 p-8 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_-4px_20px_rgba(59,130,246,0.35)]">
        
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-sky-500 flex items-center justify-center text-white mb-8">
          <Share2 size={28} />

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
        <ul className="mt-8 space-y-4 ">
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
        <div className="mt-10 pt-18 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm text-gray-400">Résultat type</span>

          <div className="flex items-center gap-2 text-violet-600 font-semibold">
            +520K abonnés
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
  <div className="max-w-7xl mx-auto px-6 ">
    
    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      <div className="group rounded-3xl border border-gray-200 p-8 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_-4px_20px_rgba(59,130,246,0.35)]">
        
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 flex items-center justify-center text-white mb-8">
          <Search size={28} />
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
      </div>
      </div>
      </section>

      {/* question */}
      <section className='flex justify-center bg-gray-100 py-24 rounded-3xl mx-18'>
         <div className=''>
          <h3 className='text-center text-5xl font-bold leading-tight bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent '>Vous ne Savez pas par Quel Service </h3>
          <h3 className='text-center text-5xl font-bold leading-tight bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent'>Commencer ?</h3>
          <p className='text-center pt-8 text-lg'>Notre audit digital gratuit analyse votre situation et vous recommande exactement les 2-3 </p>
          <p className='text-center text-lg pb-8'>actions à fort impact à mettre en place en priorité.</p>
          <button className="mt-6 md:mt-0 px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-violet-400 hover:scale-105 transition duration-300 font-semibold ml-45 ">Audit Gratuit-Recommandation Personnalisée</button>

         </div>

      </section>





 











</div>


  )
}

export default Services
