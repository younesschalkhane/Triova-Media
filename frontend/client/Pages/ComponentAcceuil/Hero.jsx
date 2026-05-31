import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../../src/assets/hero.png'
function Hero() {
  return (
      <div>
      <section className=" bg-gradient-to-br from-violet-50 via-violet-100 to-sky-100">
        <div className="container flex flex-col lg:flex-row items-center justify-evenly gap- p-6 mx-auto sm:py-12 lg:py-24">

          {/* Left Content */}
          <div className="flex flex-col justify-center text-center lg:text-left max-w-xl">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="text-sky-500">Votre succès</span>{" "}
              <span className="text-violet-600">digital commence ici</span>
            </h1>

            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              TRIOVA MEDIA accompagne les entreprises avec des solutions de marketing
              digital créatives, du contenu engageant et des stratégies innovantes
              pour développer leur présence en ligne et attirer plus de clients.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Contactez-nous
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-sky-500 text-gray-700 font-semibold hover:bg-slate-50 hover:border-violet-300 hover:text-violet-600 transition-all duration-300"
              >
                Découvrir nos services
              </Link>

            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full max-w-lg mx-auto lg:mx-0">

            <div className="group relative rounded-2xl overflow-hidden border border-slate-100 transition-all duration-300 hover:border-violet-500 hover:shadow-xl">

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-sky-500 to-violet-600 blur-sm -z-10" />

              <img
                src={heroImg}
                alt="Triova Media Hero"
                className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Hero
