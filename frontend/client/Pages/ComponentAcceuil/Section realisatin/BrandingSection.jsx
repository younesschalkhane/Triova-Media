import { Check, ArrowUpRight } from "lucide-react";
import scarf from "../../../src/assets/scarf.jpeg";
import fostank from "../../../src/assets/fostank.jpeg";
import triova from "../../../src/assets/triova.jpeg";

const projects = [
  {
    name: "Triova Media",
    type: "Branding",
    description:
      "Identité visuelle complète pour une agence de marketing digital, alliant innovation et professionnalisme.",
    image: triova,
    features: [
      { label: "Style", value: "Moderne & Tech" },
      { label: "Palette", value: "Bleu électrique → Violet" },
      { label: "Typographie", value: "Sans-serif géométrique" },
    ],
    href: "https://instagram.com",
  },
  {
    name: "Scarf by Hassna",
    type: "Logo Design",
    description:
      "Création d'une identité élégante et raffinée pour une marque artisanale de foulards et accessoires féminins.",
    image: scarf,
    features: [
      { label: "Style", value: "Élégant & Artisanal" },
      { label: "Palette", value: "Bordeaux & Crème" },
      { label: "Typographie", value: "Display chaleureux" },
    ],
    href: "https://instagram.com",
  },
  {
    name: "Fostank",
    type: "Identity",
    description:
      "Identité visuelle féminine et délicate pour une boutique de robes, mêlant douceur florale et sophistication.",
    image: fostank,
    features: [
      { label: "Style", value: "Féminin & Floral" },
      { label: "Palette", value: "Rose tendre & Magenta" },
      { label: "Typographie", value: "Script arabe stylisé" },
    ],
    href: "https://instagram.com",
  },
];

export function BrandingSection() {
  return (
    <section
      id="branding"
      className="relative bg-gradient-to-b from-white via-slate-50 to-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium tracking-wide text-slate-600">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-500 to-violet-500" />
            Identité Visuelle
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Branding &{" "}
            <span className="bg-gradient-to-r from-sky-500 to-violet-600 bg-clip-text text-transparent">
              Logo Design
            </span>
          </h2>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Des identités visuelles uniques pensées pour donner du sens et du caractère
            à chaque marque que nous accompagnons.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* gradient top bar */}
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-sky-500 to-violet-600 transition-transform duration-300 group-hover:scale-x-100" />

              {/* image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-50 to-white">
                <img
                  src={p.image}
                  alt={`${p.name} logo`}
                  className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-50 to-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700 ring-1 ring-inset ring-violet-100">
                    {p.type}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:rotate-45 group-hover:text-violet-600" />
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-violet-600">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{p.description}</p>

                <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                  {p.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-violet-100">
                        <Check className="h-3 w-3 text-violet-600" strokeWidth={3} />
                      </span>
                      <span className="text-slate-600">
                        <span className="font-medium text-slate-900">{f.label} :</span>{" "}
                        {f.value}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition-colors group-hover:text-violet-600">
                  Voir le projet
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
