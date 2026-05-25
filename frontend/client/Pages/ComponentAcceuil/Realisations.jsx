import React, { useState } from "react";
import { CheckCircle2, Calendar, ArrowUpRight } from "lucide-react";

const categories = [
  "Tous",
  "E-commerce",
  "Branding",
  "Marketing",
  "Social Media",
];

const projetsRealises = [
  // ================= E-COMMERCE =================
  {
    title: "Scarf By Hassna",
    client: "Scarf By Hassna",
    category: "E-commerce",
    type: "YouCan Store",
    year: "2026",
    description:
      "Création d’une boutique YouCan moderne spécialisée dans les accessoires et foulards.",
    results: [
      "Design moderne",
      "Boutique responsive",
      "Navigation rapide",
    ],
    link: "https://scarfbyhassna.youcan.store/",
  },

  {
    title: "Fostank Store",
    client: "Fostank",
    category: "E-commerce",
    type: "YouCan Store",
    year: "2026",
    description:
      "Développement d’une boutique mode féminine optimisée mobile.",
    results: [
      "Expérience mobile optimisée",
      "Présentation produits premium",
      "Site rapide",
    ],
    link: "https://fostank.youcan.store/",
  },

  {
    title: "Twin Store By Fati",
    client: "Twin Store By Fati",
    category: "E-commerce",
    type: "YouCan Store",
    year: "2026",
    description:
      "Conception d’un store YouCan moderne avec branding élégant.",
    results: [
      "UI moderne",
      "Navigation fluide",
      "Image de marque forte",
    ],
    link: "https://twin-storebyfati.youcan.store/",
  },

  // ================= MARKETING =================
  {
    title: "Campagne Meta Ads Immobilier",
    client: "Agence Atlas Immo",
    category: "Marketing",
    type: "Paid Ads",
    year: "2026",
    description:
      "Lancement d'un funnel performant avec campagnes Meta Ads ciblées.",
    results: [
      "+1200 leads",
      "ROI x4",
      "CPL réduit de 60%",
    ],
    link: "#",
  },

  // ================= BRANDING =================
  {
    title: "Identité Visuelle Restaurant",
    client: "Saveurs du Maroc",
    category: "Branding",
    type: "Identité Visuelle",
    year: "2026",
    description:
      "Création complète d’une identité visuelle moderne pour restaurant.",
    results: [
      "Logo professionnel",
      "Charte graphique",
      "Image premium",
    ],
    link: "#",
  },

  // ================= SOCIAL MEDIA =================
  {
    title: "Stratégie Social Media",
    client: "FitZone Gym",
    category: "Social Media",
    type: "Content Creation",
    year: "2026",
    description:
      "Création de contenus TikTok et Instagram performants.",
    results: [
      "+50K followers",
      "+340% engagement",
      "+200 inscriptions/mois",
    ],
    link: "#",
  },
];

function Realisations() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects =
    selectedCategory === "Tous"
      ? projetsRealises
      : projetsRealises.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <section className="w-full bg-gradient-to-b from-white via-slate-50 to-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-500 text-xs font-semibold tracking-widest uppercase mb-4">
            Projets Réalisés
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-sky-500">Nos réussites</span>{" "}
            <span className="text-violet-600">digitales</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Découvrez quelques projets réalisés pour nos clients.
          </p>
        </div>

        {/* Categories Buttons */}
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

        {/* Projects Grid */}
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

                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Calendar size={14} />
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
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-sky-500 flex-shrink-0"
                    />

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

export default Realisations;