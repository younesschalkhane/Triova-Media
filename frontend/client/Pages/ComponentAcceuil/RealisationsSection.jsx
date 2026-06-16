import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import scarf from "../../src/assets/scarf.jpeg";
import fistank from "../../src/assets/fistank.jpeg";
import triova from "../../src/assets/triova.jpeg";

const projects = [
// WEB DEV
  {
    title: "Smart Home Template",
    category: "Web Dev",
    type: "Template Tailwind",
    client: "Web Project",
    year: "2026",
    description:
      "Template moderne basé sur Tailwind CSS avec un design clean et une structure responsive optimisée.",
    results: ["Design 100% responsive", "UI moderne et clean", "Performance optimisée"],
    link: "https://smarthomet.netlify.app/",
  },
  {
    title: "Docplanner",
    category: "Web Dev",
    type: "Site Créatif",
    client: "Web Project",
    year: "2026",
    description:
      "Site web créatif avec une UI moderne, animations fluides et une expérience utilisateur dynamique.",
    results: ["Animations fluides", "UX dynamique", "Design créatif et moderne"],
    link: "https://spontaneous-lamington-029ef0.netlify.app/",
  },
  {
    title: "Hostaro Bootstrap",
    category: "Web Dev",
    type: "Landing Page",
    client: "Web Project",
    year: "2026",
    description:
      "Landing page professionnelle basée sur Bootstrap avec un design orienté business et conversion.",
    results: ["Optimisé pour la conversion", "Structure business pro", "Compatible tous écrans"],
    link: "https://hostarobootstrap.netlify.app/",
  },

   // STORES
  {
    title: "Twin Store By Fati",
    category: "Stores",
    type: "E-commerce",
    client: "YouCan Store",
    year: "2026",
    description:
      "Boutique mode féminine moderne avec design premium et expérience utilisateur fluide.",
    results: ["Design premium", "Expérience mobile optimisée", "Navigation fluide"],
    link: "https://twin-storebyfati.youcan.store/",
  },
  {
    title: "Fostanek Store",
    category: "Stores",
    type: "E-commerce",
    client: "YouCan Store",
    year: "2026",
    description:
      "E-commerce spécialisé dans les robes de soirée avec interface élégante et rapide.",
    results: ["UI élégante", "Performance optimisée", "Mobile friendly"],
    link: "https://fostank.youcan.store/",
  },
  {
    title: "Scarf By Hassna",
    category: "Stores",
    type: "E-commerce",
    client: "YouCan Store",
    year: "2026",
    description:
      "Store d'accessoires et foulards avec branding minimaliste et chic.",
    results: ["Branding minimaliste", "Design moderne", "Expérience utilisateur fluide"],
    link: "https://scarfbyhassna.youcan.store/",
  },

  // BRANDING
  {
    title: "Triova Media",
    category: "Branding",
    type: "Identité Visuelle",
    client: "Agence Marketing",
    year: "2026",
    description:
      "Identité visuelle complète pour une agence de marketing digital, alliant innovation et professionnalisme.",
    results: [
      "Style moderne & tech",
      "Palette bleu électrique → violet",
      "Typographie géométrique",
    ],
    link: "https://www.instagram.com/triovamedia/",
    image: triova,
  },
  {
    title: "Scarf by Hassna",
    category: "Branding",
    type: "Logo Design",
    client: "Marque Artisanale",
    year: "2026",
    description:
      "Création d'une identité élégante et raffinée pour une marque artisanale de foulards et accessoires féminins.",
    results: [
      "Style élégant & artisanal",
      "Palette bordeaux & crème",
      "Typographie display chaleureuse",
    ],
    link: "https://instagram.com",
    image: scarf,
  },
  {
    title: "Fostanek",
    category: "Branding",
    type: "Identity",
    client: "Boutique de robes",
    year: "2026",
    description:
      "Identité visuelle féminine et délicate pour une boutique de robes, mêlant douceur florale et sophistication.",
    results: [
      "Style féminin & floral",
      "Palette rose tendre & magenta",
      "Script arabe stylisé",
    ],
    link: "https://instagram.com",
    image: fistank,
  },

  
  // CRÉATION IA
  {
    title: "Système Sécurité Routière IA",
    category: "Création IA",
    type: "Machine Learning",
    client: "AI Project",
    year: "2026",
    description:
      "Plateforme intelligente pour analyser les comportements routiers et réduire les accidents grâce à l'IA.",
    results: ["Détection intelligente", "Analyse en temps réel", "Prévention des accidents"],
    link: "https://securitereutiere.netlify.app/",
  },
  {
    title: "LumiGlow AI",
    category: "Création IA",
    type: "Web App IA",
    client: "AI Application",
    year: "2026",
    description:
      "Application IA interactive avec logique intelligente et expérience utilisateur optimisée.",
    results: ["UI intelligente", "Traitement rapide", "UX moderne"],
    link: "https://lumiglow2.netlify.app/",
  },
  {
    title: "Evocations Maroc IA",
    category: "Création IA",
    type: "Data & AI",
    client: "AI System",
    year: "2026",
    description:
      "Projet IA basé sur l'analyse des données et la génération d'insights intelligents.",
    results: ["Analyse de données", "IA prédictive", "Optimisation des résultats"],
    link: "https://evocations-maroc-main.netlify.app/",
  },

  // RÉSEAUX SOCIAUX
  {
    title: "Les Fleur Zarktouni",
    category: "Réseaux Sociaux",
    type: "Instagram",
    client: "Marque Lifestyle",
    year: "2026",
    description:
      "Mise en valeur visuelle, stratégie de contenu et amélioration de l'identité digitale pour attirer une audience plus ciblée.",
    results: ["Stratégie de contenu", "Identité digitale renforcée", "Audience ciblée"],
    link: "https://www.instagram.com/lesfleurzarktouni_/",
  },
  {
    title: "Aman Tech",
    category: "Réseaux Sociaux",
    type: "Instagram",
    client: "Page Tech",
    year: "2026",
    description:
      "Optimisation du branding, de la cohérence visuelle et de la présentation des services pour renforcer la crédibilité.",
    results: ["Branding cohérent", "Présentation soignée", "Crédibilité renforcée"],
    link: "https://www.instagram.com/aman.tech.official/",
  },
  {
    title: "Copagile",
    category: "Réseaux Sociaux",
    type: "LinkedIn",
    client: "Entreprise B2B",
    year: "2026",
    description:
      "Structuration de la présence professionnelle, amélioration de la communication B2B et de la visibilité auprès des partenaires.",
    results: ["Présence pro structurée", "Communication B2B", "Visibilité accrue"],
    link: "https://www.linkedin.com/company/copagile/",
  },

  
];

const categories = [
  "Tous",
  "Web Dev",
  "Stores",
  "Branding",
  "Création IA",
  "Réseaux Sociaux",
  
];

export function RealisationsSection() {
  const [selected, setSelected] = useState("Tous");

  const filtered =
    selected === "Tous"
      ? projects
      : projects.filter((p) => p.category === selected);

  return (
    <section
      id="realisations"
      className="relative bg-gradient-to-br from-sky-100 via-violet-50 to-violet-100 py-12 sm:py-12"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-500 text-xs font-semibold tracking-widest uppercase mb-4">
           Nos Réalisations
         
            
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            <span className="text-sky-500">Portfolio</span>{" "}
            <span className="bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
              Triova Media
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Une sélection complète de nos projets : branding, e-commerce,
            intelligence artificielle, gestion de réseaux sociaux et
            développement web. Chaque réalisation reflète notre engagement à
            créer des expériences digitales modernes, performantes et taillées
            sur mesure pour nos clients.
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="mt-12 mb-14 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${selected === cat
                ? "bg-gradient-to-r from-sky-500 to-violet-600 text-white shadow-lg shadow-violet-500/30"
                : "border border-slate-200 bg-white text-slate-600 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="cards-grid">
          {filtered.map((p) => (
            <div
              key={`${p.category}-${p.title}`}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-sky-500 to-violet-600 transition-transform duration-300 group-hover:scale-x-100" />

              {p.image && (
                <div className="mb-6 -mx-2 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-white">
                  <img
                    src={p.image}
                    alt={`${p.title} logo`}
                    className="aspect-[4/3] w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="mb-5 flex items-start justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-500">
                    {p.category}
                  </span>
                  <span className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-600">
                    {p.type}
                  </span>
                </div>
                {p.year && <div className="text-xs text-slate-500">{p.year}</div>}
              </div>

              <h3 className="mb-1 text-2xl font-bold text-slate-900 transition-colors group-hover:text-violet-600">
                {p.title}
              </h3>

              {p.client && (
                <p className="mb-4 text-sm font-medium text-violet-600">{p.client}</p>
              )}

              <p className="mb-6 text-sm leading-relaxed text-slate-600 md:text-base">
                {p.description}
              </p>

              <div className="mb-6 space-y-2">
                {p.results.map((r, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 size={18} className="text-sky-500" />
                    <span className="font-medium text-slate-700">{r}</span>
                  </div>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition-colors hover:text-sky-500"
              >
                Voir le projet
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-slate-500">
            Aucun projet dans cette catégorie pour le moment.
          </p>
        )}
      </div>
    </section>
  );
}

export default RealisationsSection;
