import React from "react";

function NotreAgence() {
  return (
    <>
      {/* ================================================= */}
      {/* ================= ABOUT SECTION ================= */}
      {/* ================================================= */}

      <section className="relative py-20 md:py-28 lg:py-32 px-6 md:px-10 overflow-hidden bg-white scroll-mt-20">

        {/* Background blobs */}
        <div className="pointer-events-none absolute top-20 right-0 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"></div>

        <div className="pointer-events-none absolute bottom-10 left-0 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-violet-600 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse"></span>
              Notre Agence
            </span>

            {/* Title */}
            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              <span className="text-sky-500">À propos</span>{" "}

              <span className="bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
                de Triova-Media
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              <span className="font-semibold text-gray-900">
                Triova-Media
              </span>{" "}
              est une agence de marketing digital spécialisée dans la création
              de stratégies innovantes, le développement web et la gestion des
              réseaux sociaux.
            </p>

            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Notre équipe accompagne les marques vers une croissance digitale
              forte et durable en combinant créativité, technologie et
              performance.
            </p>

            {/* Features */}
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">

              <li className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white/80 backdrop-blur px-4 py-3 shadow-sm hover:-translate-y-1 transition duration-300">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-violet-600 text-white">
                  🌍
                </span>

                <span className="text-sm font-medium text-gray-800">
                  Stratégies digitales innovantes
                </span>
              </li>

              <li className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white/80 backdrop-blur px-4 py-3 shadow-sm hover:-translate-y-1 transition duration-300">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-violet-600 text-white">
                  💻
                </span>

                <span className="text-sm font-medium text-gray-800">
                  Développement web sur mesure
                </span>
              </li>

              <li className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white/80 backdrop-blur px-4 py-3 shadow-sm hover:-translate-y-1 transition duration-300">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-violet-600 text-white">
                  📣
                </span>

                <span className="text-sm font-medium text-gray-800">
                  Gestion des réseaux sociaux
                </span>
              </li>

              <li className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white/80 backdrop-blur px-4 py-3 shadow-sm hover:-translate-y-1 transition duration-300">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-violet-600 text-white">
                  📊
                </span>

                <span className="text-sm font-medium text-gray-800">
                  Performance & résultats mesurables
                </span>
              </li>
            </ul>

            {/* Bottom line */}
            <div className="mt-8 h-1 w-32 bg-gradient-to-r from-sky-500 to-violet-600 rounded-full"></div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="group relative">

            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-violet-600 to-sky-500 opacity-20 blur-2xl"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1400&auto=format&fit=crop"
                alt="Équipe Triova-Media"
                className="w-full h-[520px] object-cover group-hover:scale-105 transition duration-700"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur px-5 py-3 shadow-xl ring-1 ring-black/5">

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Agence
                </p>

                <p className="text-sm font-semibold text-gray-900">
                  100% Digitale
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* ================= MISSION SECTION =============== */}
      {/* ================================================= */}

      <section className="relative overflow-hidden bg-white py-20 px-6">

        {/* Background blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-100 rounded-full blur-3xl opacity-30"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          {/* Small Title */}
          <p className="bg-gradient-to-r from-sky-500 to-violet-600 bg-clip-text text-transparent uppercase tracking-[6px] text-sm mb-6 font-semibold">
            — Notre Mission
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight from-violet-600 to-sky-500">
          
            <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-violet-600 bg-clip-text text-transparent">
              Votre croissance digitale
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Chez Triova-Media, nous croyons qu'une marque mérite mieux qu'une
            présence en ligne , elle mérite une véritable signature digitale.
            Notre mission est de la construire, ensemble.
          </p>

          {/* Image Section */}
          <div className="relative mt-16 rounded-3xl overflow-hidden shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop"
              alt="Team"
              className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* Stats */}
            <div className="absolute bottom-8 left-8 flex gap-14 flex-wrap text-left">

              <div>
                <h2 className="text-5xl font-bold text-sky-400">+120</h2>

                <p className="text-white uppercase tracking-widest text-sm mt-1">
                  Projets livrés
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-bold text-sky-400">98%</h2>

                <p className="text-white uppercase tracking-widest text-sm mt-1">
                  Clients satisfaits
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-bold text-sky-400">5★</h2>

                <p className="text-white uppercase tracking-widest text-sm mt-1">
                  Note moyenne
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotreAgence;