import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const categories = ["Tous", "stores"];

const projects = [
  {
    title: "Twin Store By Fati",
    client: "YouCan Store",
    category: "stores",
    type: "E-commerce",
    year: "2026",
    description:
      "Boutique mode féminine moderne avec design premium et expérience utilisateur fluide.",
    results: [
      "Design premium",
      "Expérience mobile optimisée",
      "Navigation fluide",
    ],
    link: "https://twin-storebyfati.youcan.store/",
  },

  {
    title: "Fostank Store",
    client: "YouCan Store",
    category: "stores",
    type: "E-commerce",
    year: "2026",
    description:
      "E-commerce spécialisé dans les robes de soirée avec interface élégante et rapide.",
    results: [
      "UI élégante",
      "Performance optimisée",
      "Mobile friendly",
    ],
    link: "https://fostank.youcan.store/",
  },

  {
    title: "Scarf By Hassna",
    client: "YouCan Store",
    category: "stores",
    type: "E-commerce",
    year: "2026",
    description:
      "Store d’accessoires et foulards avec branding minimaliste et chic.",
    results: [
      "Branding minimaliste",
      "Design moderne",
      "Expérience utilisateur fluide",
    ],
    link: "https://scarfbyhassna.youcan.store/",
  },
];

function Stores() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects =
    selectedCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="w-full bg-gradient-to-b from-white via-slate-50 to-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER (same style) */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-500 text-xs font-semibold tracking-widest uppercase mb-4">
            Stores Réalisés
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-sky-500">Nos boutiques</span>{" "}
            <span className="text-violet-600">e-commerce</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Découvrez les stores que nous avons développés pour nos clients.
          </p>
        </div>

        {/* FILTER BUTTONS (same style) */}
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

        {/* GRID (SAME EXACT STYLE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredProjects.map((p, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Top Gradient */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Top Infos */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex flex-wrap gap-2">

                  <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-sky-50 text-sky-500">
                    {p.category}
                  </span>

                  <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-violet-50 text-violet-600">
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
                    <span className="text-sky-500">✔</span>
                    <span className="text-slate-700 font-medium">
                      {r}
                    </span>
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
                Voir le store
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

export default Stores;