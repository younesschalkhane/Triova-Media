import React from "react";

function NotreAgence() {
const team = [
  {
    name: "CHALKHANE Youness",
    role: "Founder & CEO",
    image: "youness.png",
  
  },
  {
    name: "EL ASBIHANI Hasnaa",
    role: "Marketing Manager",
    image: "hasnaa.png",
  
  },
  {
    name: " IDBRAHIM Fatiha",
    role: "Lead Engineer",
    image: "fatiha.png",
   
  },
  {
    name: "SABRI Kaoutar",
    role: "Product Designer",
    image: "Kaoutar.PNG",

  },
];

  return (
    <>
      {/* ================= ABOUT SECTION ================= */}
      <section className="relative py-20 md:py-28 lg:py-32 px-6 md:px-10 overflow-hidden bg-white scroll-mt-20">

        <div className="pointer-events-none absolute top-20 right-0 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-10 left-0 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-violet-600 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse"></span>
              Notre Agence
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              <span className="text-sky-500">À propos</span>{" "}
              <span className="bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
                de Triova-Media
              </span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              <span className="font-semibold text-gray-900">Triova-Media</span>{" "}
              est une agence de marketing digital spécialisée dans la création
              de stratégies innovantes, le développement web et la gestion des réseaux sociaux.
            </p>

            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Notre équipe accompagne les marques vers une croissance digitale forte et durable.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1400&auto=format&fit=crop"
              alt="Équipe Triova-Media"
              className="w-full h-[520px] object-cover rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}
      <section className="relative overflow-hidden bg-white py-20 px-6">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-100 rounded-full blur-3xl opacity-30"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold tracking-widest uppercase mb-4">
            Notre Mission
          </span>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Chez Triova-Media, nous croyons qu'une marque mérite une véritable signature digitale.
          </p>

          <div className="relative mt-16 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="equipe.png" // branding strategy

              alt="Team"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          </div>

        </div>
      </section>

      {/* ================= TEAM SECTION (NEW) ================= */}
      <section className="py-24 px-6 bg-gradient-to-r from-sky-500 to-violet-600">

        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Notre Équipe
          </h2>
          <p className="text-white/80 mt-3">
            Une équipe passionnée qui construit vos projets digitaux
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">

          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>

                <p className="text-sky-600 font-medium text-sm mt-1">
                  {member.role}
                </p>

              
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}

export default NotreAgence;