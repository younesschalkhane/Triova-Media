import React from "react";
import { Sparkles, Diamond, Triangle } from "lucide-react";

function NotreAgence() {
  const team = [
    {
      name: "Youness",
      role: "Founder & CEO",
      image: "youness.png",
    },
    {
      name: "EL ASBIHANI Hasnaa",
      role: "Marketing Manager",
      image: "hasnaa.png",
    },
    {
      name: "IDBRAHIM Fatiha",
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

        <div className="pointer-events-none absolute top-20 right-0 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 left-0 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold tracking-widest uppercase mb-4">
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
              est une agence de marketing digital spécialisée dans la création de stratégies innovantes,
              le développement web et la gestion des réseaux sociaux.
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

      {/* ================= MISSION STYLE 2 ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24 px-6">

        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-100 rounded-full blur-3xl opacity-30" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative h-2 w-2 rounded-full bg-sky-500"></span>
            </span>
            Notre mission
          </span>


          <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
            Chez Triova-Media, nous transformons votre identité en une expérience digitale moderne, mémorable et performante.
          </p>

          <div className="relative mt-16 rounded-3xl overflow-hidden shadow-2xl group">
            <img
              src="equipe.png"
              alt="Mission"
              className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8 text-left">

            <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
              <Sparkles className="w-6 h-6 text-sky-500 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Stratégie</h3>
              <p className="text-slate-500 text-sm">
                Une approche claire et orientée résultats pour booster votre croissance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
              <Diamond className="w-6 h-6 text-violet-500 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Création</h3>
              <p className="text-slate-500 text-sm">
                Des designs modernes et une identité visuelle forte.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
              <Triangle className="w-6 h-6 text-emerald-500 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Performance</h3>
              <p className="text-slate-500 text-sm">
                Optimisation continue pour maximiser vos résultats digitaux.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="py-24 px-6 bg-gradient-to-br  from-sky-100 via-violet-50 to-violet-100">

        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold ">
           <span className="text-sky-500">Notre</span>    <span className="text-violet-600">Équipe</span>
          </h2>
          <p className="text-gray-600 mt-3">
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