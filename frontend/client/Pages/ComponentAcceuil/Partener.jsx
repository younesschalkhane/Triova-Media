import React from "react";
import jadara from "../../src/assets/jadara.png";
import gomycode from "../../src/assets/gomycode.webp";
import indh from "../../src/assets/indh-logo.png";
import { Link } from "react-router-dom";

function Partener() {
  const partners = [
    {
      name: "Jadara Foundation",
      logo: jadara,
      description:
        "Partenaire stratégique pour l'autonomisation et le développement des jeunes talents.",
      link: "https://jadara.ngo/",
    },
    {
      name: "GoMyCode",
      logo: gomycode,
      description:
        "Plateforme de formation tech accompagnant la nouvelle génération de développeurs.",
      link: "https://gomycode.com/ma/fr/",
    },
    {
      name: "INDH",
      logo: indh,
      description:
        "Initiative Nationale pour le Développement Humain, partenaire institutionnel de référence.",
      link: "https://www.indh.ma/",
    },
  ];

  return (
    <div>
      <section className="w-full bg-gradient-to-b from-white via-slate-50 to-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold tracking-widest uppercase mb-4">
              Nos Partenaires
            </span>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-sky-500">Ensemble,</span>{" "}
              <span className="text-violet-600">
                nous construisons l'avenir
              </span>
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Ils nous font confiance et soutiennent notre mission au quotidien
              à travers leur expertise et leur engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden block cursor-pointer"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="h-28 flex items-center justify-center mb-6">
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    className="max-h-24 max-w-[80%] object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-center text-lg font-semibold text-violet-600 mb-2">
                  {p.name}
                </h3>

                <p className="text-center text-sm text-gray-600 leading-relaxed">
                  {p.description}
                </p>

                <div className="mt-4 text-center">
                  <span className="text-sky-500 font-medium text-sm group-hover:text-violet-600 transition-colors">
                    Visiter le site →
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-gray-600 text-sm">
            <span className="h-px w-12 bg-slate-200" />

            <span>Vous souhaitez devenir partenaire ?</span>

            <Link
              to="/Contact"
              className="font-semibold text-sky-500 hover:text-violet-600 transition-colors"
            >
              Contactez-nous →
            </Link>

            <span className="h-px w-12 bg-slate-200" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partener;