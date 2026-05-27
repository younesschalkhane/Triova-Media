import React from "react";
import { ArrowUpRight } from "lucide-react";

const sites = [
  {
    title: "Tailwind Main Template",
    link: "https://tailwind-main.netlify.app/",
    description:
      "Template moderne basé sur Tailwind CSS avec un design clean et une structure responsive optimisée.",
    advantages: [
      "Design 100% responsive",
      "UI moderne et clean",
      "Performance optimisée",
    ],
  },
  {
    title: "Docplanner",
    link: "https://spontaneous-lamington-029ef0.netlify.app/",
    description:
      "Site web créatif avec une UI moderne, animations fluides et une expérience utilisateur dynamique.",
    advantages: [
      "Animations fluides",
      "Expérience utilisateur dynamique",
      "Design créatif et moderne",
    ],
  },
  {
    title: "Hostaro Bootstrap",
    link: "https://hostarobootstrap.netlify.app/",
    description:
      "Landing page professionnelle basée sur Bootstrap avec un design orienté business et conversion.",
    advantages: [
      "Optimisé pour la conversion",
      "Structure business professionnelle",
      "Compatible tous écrans",
    ],
  },
];

function WebDev() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-slate-50 to-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-500 text-xs font-semibold tracking-widest uppercase mb-4">
            Web Templates
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-sky-500">Sites</span>{" "}
            <span className="text-violet-600">Références</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Découvrez quelques exemples de sites web modernes réalisés avec différentes technologies.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {sites.map((s, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Hover top gradient */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-violet-600 transition-colors">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-5">
                {s.description}
              </p>

              {/* ADVANTAGES */}
              <div className="space-y-2 mb-6">
                {s.advantages.map((a, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-sky-50 text-sky-500 text-xs font-bold">
                      ✔
                    </span>
                    <span className="text-slate-700 font-medium">
                      {a}
                    </span>
                  </div>
                ))}
              </div>

              {/* Link */}
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-sky-500 transition-colors"
              >
                Visit Site
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

export default WebDev;