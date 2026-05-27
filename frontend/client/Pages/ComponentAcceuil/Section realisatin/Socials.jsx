import React from "react";
import { ArrowUpRight } from "lucide-react";

const socials = [
  {
    name: "Instagram - Les Fleur Zarktouni",
    link: "https://www.instagram.com/lesfleurzarktouni_/",
    type: "Instagram",
    description:
      "Une page dédiée à la marque Les Fleur Zarktouni, où Triova Media a contribué à la mise en valeur visuelle, la stratégie de contenu et l’amélioration de l’identité digitale pour attirer une audience plus ciblée.",
  },
  {
    name: "Instagram - Aman Tech",
    link: "https://www.instagram.com/aman.tech.official/",
    type: "Instagram",
    description:
      "Aman Tech est une page technologique que nous avons optimisée chez Triova Media en travaillant sur le branding, la cohérence visuelle et la présentation des services pour renforcer la crédibilité de la marque.",
  },
  {
    name: "LinkedIn - Copagile",
    link: "https://www.linkedin.com/company/copagile/",
    type: "LinkedIn",
    description:
      "Pour Copagile sur LinkedIn, Triova Media a aidé à structurer la présence professionnelle de l’entreprise, améliorer la communication B2B et renforcer la visibilité auprès des partenaires et clients.",
  },

];

function Socials() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-slate-50 to-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-500 text-xs font-semibold tracking-widest uppercase mb-4">
            Réseaux Sociaux
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-sky-500">Nos</span>{" "}
            <span className="text-violet-600">Pages</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Découvrez nos pages officielles et les projets digitaux accompagnés par Triova Media.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {socials.map((s, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Hover top gradient */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Type badge */}
              <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-sky-50 text-sky-500 mb-4">
                {s.type}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-violet-600 transition-colors">
                {s.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                {s.description}
              </p>

              {/* Link */}
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-sky-500 transition-colors"
              >
                Visit Page
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

export default Socials;