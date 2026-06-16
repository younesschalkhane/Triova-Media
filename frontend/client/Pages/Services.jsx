import React, { useEffect, useState, useMemo } from "react";
import image3 from "./image3.png";
import {
  Code2,
  Brain,
  Palette,
  Megaphone,
  Sparkles,
  Share2,
  Search,
  Globe,
  Smartphone,
  Monitor,
  Camera,
  Video,
  PenTool,
  Bot,
  Cpu,
  ShoppingCart,
  BarChart3,
  Rocket,
  Briefcase,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fetchActiveServices } from "../src/services/api/servicesApi";
import { ArrowRight } from "lucide-react";

const clientIcons = {
  code2: Code2,
  brain: Brain,
  palette: Palette,
  megaphone: Megaphone,
  sparkles: Sparkles,
  share2: Share2,
  search: Search,
  globe: Globe,
  smartphone: Smartphone,
  monitor: Monitor,
  camera: Camera,
  video: Video,
  pentool: PenTool,
  bot: Bot,
  cpu: Cpu,
  shoppingcart: ShoppingCart,
  barchart3: BarChart3,
  rocket: Rocket,
  briefcase: Briefcase,
  shieldcheck: ShieldCheck,
};

function getIcon(iconKey) {
  const Icon = clientIcons[iconKey];
  return Icon || Code2;
}

function getFallback() {
  return [
    {
      _id: "fallback-1",
      title: "Programmation Web",
      slug: "programmation-web",
      shortDescription:
        "Nous developpons des sites web modernes, rapides et entierement sur mesure pour repondre aux besoins specifiques de votre activite. Chaque projet est concu avec une attention particuliere portee a la performance, l'experience utilisateur et l'evolutivite.",
      icon: "code2",
      category: "Creation Site Web",
      features: [
        "Developpement front-end moderne et responsive",
        "Interfaces fluides et optimisees UX/UI",
        "Integration de fonctionnalites dynamiques",
        "Code propre, scalable et maintenable",
      ],
      status: "active",
    },
    {
      _id: "fallback-2",
      title: "Solutions AI",
      slug: "solutions-ai",
      shortDescription:
        "Nous developpons des solutions d'intelligence artificielle modernes, performantes et entierement adaptees aux besoins de votre activite. Chaque projet est concu avec une attention particuliere portee a l'automatisation, l'experience utilisateur et l'innovation digitale.",
      icon: "brain",
      category: "SOLUTIONS D'INTELLIGENCE ARTIFICIELLE",
      features: [
        "Developpement d'agents IA intelligents et automatises",
        "Chatbots IA fluides et optimises UX/UI",
        "Integration d'API IA et fonctionnalites avancees",
        "Solutions scalables, securisees et maintenables",
      ],
      status: "active",
    },
    {
      _id: "fallback-3",
      title: "Identite Visuelle",
      slug: "identite-visuelle",
      shortDescription:
        "Nous creons des identites visuelles modernes et memorables qui refletent parfaitement l'image et les valeurs de votre marque. Chaque creation est pensee pour garantir coherence, impact visuel et reconnaissance professionnelle.",
      icon: "palette",
      category: "IDENTITE VISUELLE",
      features: [
        "Creation de logos uniques et professionnels",
        "Conception de chartes graphiques modernes",
        "Design de supports marketing et reseaux sociaux",
        "Identite visuelle coherente, creative et evolutive",
      ],
      status: "active",
    },
    {
      _id: "fallback-4",
      title: "ADS Marketing",
      slug: "ads-marketing",
      shortDescription:
        "Nous creons des campagnes publicitaires digitalesperformantes pour developper votre visibilite, attirer de nouveaux clients et maximiser vos resultats. Chaque strategie est concue avec une approche orientee performance, conversion et croissance.",
      icon: "megaphone",
      category: "GOOGLE ADS et META ADS",
      features: [
        "Creation et gestion de campagnes Meta Ads et Google Ads",
        "Ciblage precis et optimisation des performances",
        "Visuels publicitaires modernes et impactants",
        "Strategies marketing orientees conversion et ROI",
      ],
      status: "active",
    },
    {
      _id: "fallback-5",
      title: "Creation AI",
      slug: "creation-ai",
      shortDescription:
        "Nous concevons des creations basees sur l'intelligence artificielle pour donner vie a vos idees avec innovation, rapidite et creativite. Chaque projet est pense pour offrir un rendu moderne, impactant et adapte a votre image de marque.",
      icon: "sparkles",
      category: "INTELLIGENCE ARTIFICIELLE",
      features: [
        "Generation de contenus visuels et designs par IA",
        "Creation de videos et visuels publicitaires IA",
        "Production de contenus creatifs pour reseaux sociaux",
        "Solutions IA innovantes, rapides et personnalisees",
      ],
      status: "active",
    },
    {
      _id: "fallback-6",
      title: "Social Media",
      slug: "social-media",
      shortDescription:
        "Strategie editoriale, production de contenu et community management. On transforme vos abonnes en ambassadeurs.",
      icon: "share2",
      category: "COMMUNAUTE ET ENGAGEMENT",
      features: [
        "Strategie et ligne editoriale",
        "Production photo, video, motion",
        "Community management 7j/7",
        "Influence et partenariats createurs",
      ],
      status: "active",
    },
    {
      _id: "fallback-7",
      title: "SEO et Referencement",
      slug: "seo-referencement",
      shortDescription:
        "Audit technique, strategie de contenu et optimisation SEO pour ameliorer votre visibilite sur Google.",
      icon: "search",
      category: "Visibilite Organique",
      features: [
        "Audit SEO technique complet",
        "Recherche de mots-cles",
        "Optimisation on-page",
        "Strategie backlinks",
      ],
      status: "active",
    },
  ];
}

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadServices() {
      try {
        const res = await fetchActiveServices();
        const apiServices =
          res && Array.isArray(res.data) && res.data.length > 0
            ? res.data
            : null;
        if (apiServices) {
          setServices(apiServices);
        } else {
          setServices(getFallback());
        }
      } catch (err) {
        console.error("[Services] API error, using fallback:", err);
        setServices(getFallback());
      } finally {
        setLoading(false);
      }
    }
    loadServices();
  }, []);

  const servicePairs = useMemo(() => {
    const pairs = [];
    const items = Array.isArray(services) ? services : [];
    for (let i = 0; i < items.length; i += 2) {
      pairs.push(items.slice(i, i + 2));
    }
    return pairs;
  }, [services]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-violet-100 to-sky-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-violet-300 border-t-violet-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Chargement des services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-20">
      {/* Hero Section - auto height */}
      <section className="bg-gradient-to-br from-violet-50 via-violet-100 to-sky-100 px-6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-15">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-500 text-xs font-semibold tracking-widest uppercase mb-4">
              Nos Services
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
              <span className="text-sky-500">Des solutions digitales</span>
              <br />
              <span className="text-violet-600">adaptées à vos besoins</span>
            </h1>

            <p className="text-gray-600 mt-6 text-lg max-w-xl">
              Nous proposons des services modernes pour développer
              votre présence digitale et booster votre activite.
            </p>

            <Link to="/contact">
              <button className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 text-white hover:scale-105 transition duration-300 font-semibold shadow-md hover:shadow-xl">
                Demandez Votre Projet
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="shrink-0"
          >
            <img
              src={image3}
              alt="Service"
              className="w-full max-w-md lg:max-w-lg h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Heading - same colors/styles as homepage */}
      <section className="pt-16 md:pt-20 pb-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-500 text-xs font-semibold tracking-widest uppercase mb-4">
            Nos Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-sky-500">Des services digitaux</span>{" "}
            <span className="text-violet-600">adaptés à vos besoins</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Chaque service apporte sa propre valeur. Réunis, ils créent une
            synergie digitale qui renforce chaque point de contact.
          </p>
        </div>
      </section>

      {/* Service Cards - Same style as homepage */}
      {servicePairs.map((pair, pairIndex) => (
        <section key={pairIndex} className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="cards-grid">
              {pair.map((service) => {
                const IconComponent = getIcon(service.icon);
                const featList =
                  Array.isArray(service.features) ? service.features : [];

                return (
                  <div
                    key={service._id || service.slug}
                    className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                  >
                    {/* Top gradient bar */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="p-8 flex flex-col flex-1">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-sky-500 to-violet-600 flex items-center justify-center mb-6 shadow-md shrink-0">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>

                      {/* Category */}
                      {service.category && (
                        <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gray-400 mb-2">
                          {service.category}
                        </span>
                      )}

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-violet-600 mb-3">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed flex-1">
                        {service.shortDescription}
                      </p>

                      {/* Features */}
                      {featList.length > 0 && (
                        <ul className="mt-4 space-y-2">
                          {featList.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm text-gray-700"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Button fixed at bottom */}
                      <Link
                        to={`/ServiceRequestForm?service=${encodeURIComponent(service.title || "")}&from=/Services`}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-500 hover:text-violet-600 transition-colors"
                      >
                        Demander ce service
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* No services message */}
      {services.length === 0 && !loading && (
        <section className="py-24 bg-white">
          <div className="text-center text-gray-500 text-lg">
            Aucun service disponible pour le moment.
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="max-w-5xl mx-auto my-16 px-6">
        <div className="bg-gradient-to-br from-violet-100 via-sky-100 to-violet-50 rounded-3xl py-16 px-8 text-center">
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-sky-500">Vous ne savez pas par quel</span>{" "}
            <span className="text-violet-600">service commencer ?</span>
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Chaque projet est unique. Prenez quelques instants pour nous présenter 
            vos besoins, et notre équipe vous préparera un devis gratuit,
             personnalisé et sans engagement. Nous vous proposerons la solution la
              plus adaptée à vos objectifs, votre budget et vos délais afin de 
              concrétiser votre projet dans les meilleures conditions.

          </p>
          <Link
            to="/devis?from=/Services"
            className="mt-8 inline-block px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 text-white hover:scale-105 transition duration-300 font-semibold shadow-md hover:shadow-xl"
          >
           demander votre devis gratuit
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;