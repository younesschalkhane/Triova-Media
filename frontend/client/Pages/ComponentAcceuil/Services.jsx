import React from "react";
import {
  Code2,
  Brain,
  Palette,
  Megaphone,
  Sparkles,
  Share2,
  Search,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";


const services = [
  {
    id: "web-development",
    title: "Programmation Web",
    description:
      "Création de sites web modernes, rapides et optimisés pour tous les appareils.",
    icon: Code2,
  },
  {
    id: "ai-programming",
    title: "Solutions AI",
    description:
      "Développement d’outils intelligents, automatisation et chatbots innovants.",
    icon: Brain,
  },
  {
    id: "brand-identity",
    title: "Identité Visuelle",
    description:
      "Création de logos, chartes graphiques et branding professionnel.",
    icon: Palette,
  },
  {
    id: "ads-campaigns",
    title: "ADS Marketing",
    description:
      "Gestion de campagnes Google Ads et Meta Ads performantes.",
    icon: Megaphone,
  },
  {
    id: "ai-visual-creation",
    title: "Création AI",
    description:
      "Création de contenus visuels modernes avec intelligence artificielle.",
    icon: Sparkles,
  },
  {
    id: "social-media",
    title: "Social Media",
    description:
      "Gestion et développement de votre présence sur les réseaux sociaux.",
    icon: Share2,
  },
  {
    id: "seo",
    title: "SEO",
    description:
      "Optimisation du référencement naturel pour améliorer votre visibilité.",
    icon: Search,
  },
];

function Services() {
  return (
    <section className="w-full bg-gradient-to-br from-violet-100 via-sky-100 to-violet-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-500 text-xs font-semibold tracking-widest uppercase mb-4">
            Nos Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-sky-500">Des solutions digitales</span>{" "}
            <span className="text-violet-600">modernes et performantes</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Nous accompagnons les entreprises avec des services innovants
            pour développer leur présence digitale et accélérer leur croissance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Top Border */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-sky-500 to-violet-600 flex items-center justify-center mb-6 shadow-md">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-violet-600 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Link */}
                <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-500 group-hover:text-violet-600 transition-colors">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
}

export default Services;