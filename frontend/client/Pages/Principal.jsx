import React from 'react'
import { Link } from 'react-router-dom'
import Services from './Services'
import Hero from "../src/assets/hero.png";
import jadara from "../src/assets/jadara.png";
import gomycode from "../src/assets/gomycode.webp";
import indh from "../src/assets/indh-logo.png";

function Principal() {
  const partners = [
  { name: "Jadara Foundation", logo: jadara, description: "Partenaire stratégique pour l'autonomisation et le développement des jeunes talents." },
  { name: "GoMyCode", logo: gomycode, description: "Plateforme de formation tech accompagnant la nouvelle génération de développeurs." },
  { name: "INDH", logo: indh, description: "Initiative Nationale pour le Développement Humain, partenaire institutionnel de référence." },
];
  return (
    <div>
<section className=" bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
  <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">

    {/* Left Content */}
    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">

      <h1 className="text-5xl font-bold leading-none sm:text-6xl Montserrat font-serif bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
        Votre succès
         digital commence ici
      </h1>

      <p className="mt-6 mb-8 text-m sm:mb-12 text-gray-600">
        TRIOVA MEDIA accompagne les entreprises avec des solutions de marketing
        digital créatives, du contenu engageant et des stratégies innovantes
        pour développer leur présence en ligne et attirer plus de clients.
      </p>

      <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">

        <Link to="/Services"
          href="#"
          className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-white hover:bg-violet-600 transition"
        >
          Découvrir nos services
        </Link>

        <Link to="/Contact"
          href="#"
          className="px-8 py-3 text-lg font-semibold border rounded border-violet-400 hover:bg-gray-200 hover:text-violet-400 transition"
        >
          Contactez-nous
        </Link>

      </div>
    </div>

    {/* Right Image */}
    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-[32rem]">

      <img
  src={Hero}
  alt="Img.Hero"
  className="
    w-full
    max-w-3xl
    h-auto
    rounded-[35px]
    border-1
    border-violet-300
    transition-all
    duration-500
    cursor-pointer
    hover:scale-105
    hover:-translate-y-2
    hover:shadow-[0_0_50px_rgba(196,181,253,0.9)]
  "
/>

    </div>
  </div>
</section>




<section className="w-full bg-gradient-to-b from-white via-slate-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold tracking-widest uppercase mb-4">
            Nos Partenaires
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-sky-500">Ensemble,</span>{" "}
            <span className="text-violet-600">nous construisons l'avenir</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Ils nous font confiance et soutiennent notre mission au quotidien à travers leur expertise et leur engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="h-28 flex items-center justify-center mb-6">
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className="max-h-24 max-w-[80%] object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-center text-lg font-semibold text-violet-600 mb-2">{p.name}</h3>
              <p className="text-center text-sm text-gray-600 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-gray-600 text-sm">
          <span className="h-px w-12 bg-slate-200" />
          <span>Vous souhaitez devenir partenaire ?</span>
          <a href="#contact" className="font-semibold text-sky-500 hover:text-violet-600 transition-colors">
            Contactez-nous →
          </a>
          <span className="h-px w-12 bg-slate-200" />
        </div>
      </div>
    </section>

      
    </div>
  )
}

export default Principal
