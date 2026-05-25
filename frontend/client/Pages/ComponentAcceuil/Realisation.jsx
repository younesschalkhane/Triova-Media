import React from 'react'
import { ArrowUpRight } from "lucide-react";
function Realisation() {
    const projects = [
  {
    title: "E-commerce Campaign",
    category: "Social Media Marketing",
    description:
      "Full digital campaign with Meta Ads, content strategy, and conversion optimization.",
    link: "https://example.com/project-1",
  },
  {
    title: "Luxury Brand Identity",
    category: "Branding & Design",
    description:
      "Modern visual identity with premium positioning for a fashion brand.",
    link: "https://example.com/project-2",
  },
  {
    title: "Real Estate Lead Gen",
    category: "Paid Advertising",
    description:
      "High-converting lead generation funnel with landing pages and Google Ads.",
    link: "https://example.com/project-3",
  },
  {
    title: "Restaurant Growth",
    category: "Content Creation",
    description:
      "Creative TikTok & Instagram strategy that increased engagement and reservations.",
    link: "https://example.com/project-4",
  },
];

  return (
    <div>
      <section className="w-full py-24 bg- text-">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p  className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-500 text-xs font-semibold tracking-widest uppercase mb-4">
            nos Projects
          </p>

           <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-sky-500">Projets réalisés</span>{" "}
            <span className="text-violet-600">avec succès </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                p-8
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(56,189,248,0.15)]
              "
            >
              {/* Category */}
              <span
                className="
                  inline-block
                  text-sm
                  px-4 py-2
                  rounded-full
                  border border-sky-400/20
                  bg-sky-400/10
                  text-sky-300
                  mb-6
                "
              >
                {project.category}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2
                  text-violet-300
                  font-medium
                "
              >
                View Project

                <ArrowUpRight
                  className="
                    w-5 h-5
                    transition-transform duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

    </div>
  )
}

export default Realisation
