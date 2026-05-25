import React from "react";
import { CheckCircle2, Calendar, ArrowUpRight } from "lucide-react";

const projetsRealises = [
  
   {
  title: "Boutique Scarf By Hassna",
  client: "Scarf By Hassna",
  category: "E-commerce & Design",
  year: "2026",
  description:
    "Création d’une boutique YouCan moderne spécialisée dans les accessoires et foulards avec une expérience utilisateur fluide et un design élégant.",
  results: ["Design moderne", "Boutique responsive", "Navigation rapide"],
  link: "https://scarfbyhassna.youcan.store/",
},
{
  title: "Fostank Store",
  client: "Fostank",
  category: "Développement E-commerce",
  year: "2026",
  description:
    "Développement d’une boutique en ligne dédiée à la mode féminine avec optimisation mobile et mise en valeur des produits.",
  results: ["Expérience mobile optimisée", "Présentation produits premium", "Site rapide & fluide"],
  link: "https://fostank.youcan.store/",
},
{
  title: "Twin Store By Fati",
  client: "Twin Store By Fati",
  category: "E-commerce & Branding",
  year: "2026",
  description:
    "Conception d’un store YouCan moderne avec identité visuelle attractive pour améliorer la présence digitale de la marque.",
  results: ["Identité visuelle moderne", "Interface intuitive", "Meilleure présence en ligne"],
  link: "https://twin-storebyfati.youcan.store/",
},
  {
    title: "Campagne Meta Ads Immobilier",
    client: "Agence Atlas Immo",
    category: "Paid Advertising",
    year: "2026",
    description:
      "Lancement d'un funnel de lead generation performant avec landing pages optimisées et campagnes ciblées.",
    results: ["+1200 leads qualifiés", "ROI x4", "CPL réduit de 60%"],
    link: "#",
  },
  {
    title: "Identité Visuelle Restaurant",
    client: "Saveurs du Maroc",
    category: "Branding & Design",
    year: "2026",
    description:
      "Refonte complète de l'identité visuelle : logo, charte graphique, menus et supports de communication.",
    results: ["Brand recognition +90%", "Engagement social x3", "Récompense design"],
    link: "#",
  },
  {
    title: "Stratégie Social Media",
    client: "FitZone Gym",
    category: "Content Creation & SMM",
    year: "2026",
    description:
      "Création de contenus TikTok et Instagram qui ont propulsé la marque en tête des salles de sport locales.",
    results: ["+50K followers", "+340% engagement", "+200 inscriptions/mois"],
    link: "#",
  },
];

function ProjetsRealises() {
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
            <span className="text-violet-600">en chiffres</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Découvrez quelques-uns des projets déjà livrés avec succès et les
            résultats concrets obtenus pour nos clients.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projetsRealises.map((p, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Top gradient */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Header card */}
              <div className="flex items-start justify-between mb-5">
                <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-sky-50 text-sky-500">
                  {p.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Calendar size={14} />
                  {p.year}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-violet-600 transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-violet-600 font-medium mb-4">
                {p.client}
              </p>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                {p.description}
              </p>

              {/* Résultats */}
              <div className="space-y-2 mb-6">
                {p.results.map((r, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2
                      size={18}
                      className="text-sky-500 flex-shrink-0"
                    />
                    <span className="text-slate-700 font-medium">{r}</span>
                  </div>
                ))}
              </div>

              {/* Lien */}
              <a
                href={p.link}
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

export default ProjetsRealises;
