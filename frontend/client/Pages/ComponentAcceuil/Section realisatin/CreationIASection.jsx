import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const categories = ["Tous", "creation ia"];

const projects = [
  {
    title: "Système Sécurité Routière IA",
    client: "AI Project",
    category: "creation ia",
    type: "Machine Learning",
    year: "2026",
    description:
      "Plateforme intelligente pour analyser les comportements routiers et réduire les accidents grâce à l’IA.",
    results: [
      "Détection intelligente",
      "Analyse en temps réel",
      "Prévention des accidents",
    ],
    link: "https://securitereutiere.netlify.app/",
  },

  {
    title: "LumiGlow AI",
    client: "AI Application",
    category: "creation ia",
    type: "Web App IA",
    year: "2026",
    description:
      "Application IA interactive avec logique intelligente et expérience utilisateur optimisée.",
    results: [
      "UI intelligente",
      "Traitement rapide",
      "UX moderne",
    ],
    link: "https://lumiglow2.netlify.app/",
  },

  {
    title: "Evocations Maroc IA",
    client: "AI System",
    category: "creation ia",
    type: "Data & AI",
    year: "2026",
    description:
      "Projet IA basé sur l’analyse des données et la génération d’insights intelligents.",
    results: [
      "Analyse de données",
      "IA prédictive",
      "Optimisation des résultats",
    ],
    link: "https://evocations-maroc-main.netlify.app/",
  },
];

function CreationIASection() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filtered =
    selectedCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="w-full bg-gradient-to-b from-white via-slate-50 to-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-500 text-xs font-semibold tracking-widest uppercase mb-4">
            Création IA
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-sky-500">Intelligence</span>{" "}
            <span className="text-violet-600">Artificielle</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Découvrez nos projets IA innovants basés sur la data et l’automatisation intelligente.
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
              ${
                selectedCategory === cat
                  ? "bg-violet-600 text-white shadow-lg"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-violet-50 hover:text-violet-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filtered.map((p, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >

              {/* Gradient line */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Top info */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex gap-2 flex-wrap">

                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-sky-50 text-sky-500">
                    {p.category}
                  </span>

                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-violet-50 text-violet-600">
                    {p.type}
                  </span>

                </div>

                <div className="text-xs text-gray-500">
                  {p.year}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-violet-600 transition-colors">
                {p.title}
              </h3>

              {/* Client */}
              <p className="text-sm text-violet-600 font-medium mb-4">
                {p.client}
              </p>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                {p.description}
              </p>

              {/* Results */}
              <div className="space-y-2 mb-6">
                {p.results.map((r, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 size={18} className="text-sky-500" />
                    <span className="text-slate-700 font-medium">{r}</span>
                  </div>
                ))}
              </div>

              {/* Link */}
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-sky-500 transition-colors"
              >
                Voir le projet
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default CreationIASection;