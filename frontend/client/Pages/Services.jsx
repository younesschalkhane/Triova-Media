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
import servicesFallback from "../src/data/servicesFallback";

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

function getGradient(iconKey) {
  const gradients = {
    code2: "from-sky-500 to-violet-500",
    brain: "from-violet-500 to-sky-500",
    palette: "from-sky-500 to-violet-500",
    megaphone: "from-violet-500 to-sky-500",
    sparkles: "from-sky-500 to-violet-500",
    share2: "from-violet-500 to-sky-500",
    search: "from-sky-500 to-violet-500",
    globe: "from-violet-500 to-sky-500",
    smartphone: "from-sky-500 to-violet-500",
    monitor: "from-violet-500 to-sky-500",
    camera: "from-sky-500 to-violet-500",
    video: "from-violet-500 to-sky-500",
    pentool: "from-sky-500 to-violet-500",
    bot: "from-violet-500 to-sky-500",
    cpu: "from-sky-500 to-violet-500",
    shoppingcart: "from-violet-500 to-sky-500",
    barchart3: "from-sky-500 to-violet-500",
    rocket: "from-violet-500 to-sky-500",
    briefcase: "from-sky-500 to-violet-500",
    shieldcheck: "from-violet-500 to-sky-500",
  };
  return gradients[iconKey] || "from-sky-500 to-violet-500";
}

function getDotColor(iconKey) {
  const dots = {
    code2: "bg-sky-500",
    brain: "bg-violet-500",
    palette: "bg-sky-500",
    megaphone: "bg-violet-500",
    sparkles: "bg-sky-500",
    share2: "bg-violet-500",
    search: "bg-sky-500",
    globe: "bg-violet-500",
    smartphone: "bg-sky-500",
    monitor: "bg-violet-500",
    camera: "bg-sky-500",
    video: "bg-violet-500",
    pentool: "bg-sky-500",
    bot: "bg-violet-500",
    cpu: "bg-sky-500",
    shoppingcart: "bg-violet-500",
    barchart3: "bg-sky-500",
    rocket: "bg-violet-500",
    briefcase: "bg-sky-500",
    shieldcheck: "bg-violet-500",
  };
  return dots[iconKey] || "bg-sky-500";
}

function getFooterColor(iconKey) {
  const footers = {
    code2: "text-sky-600",
    brain: "text-violet-600",
    palette: "text-sky-600",
    megaphone: "text-violet-600",
    sparkles: "text-sky-600",
    share2: "text-violet-600",
    search: "text-sky-600",
    globe: "text-violet-600",
    smartphone: "text-sky-600",
    monitor: "text-violet-600",
    camera: "text-sky-600",
    video: "text-violet-600",
    pentool: "text-sky-600",
    bot: "text-violet-600",
    cpu: "text-sky-600",
    shoppingcart: "text-violet-600",
    barchart3: "text-sky-600",
    rocket: "text-violet-600",
    briefcase: "text-sky-600",
    shieldcheck: "text-violet-600",
  };
  return footers[iconKey] || "text-sky-600";
}

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadServices() {
      try {
        const res = await fetchActiveServices();
        console.log("[Services] API full response:", JSON.stringify(res));

        // res = { success: true, data: [...], pagination: {...} }
        // Donc res.data contient les services
        const apiServices =
          res && Array.isArray(res.data) && res.data.length > 0
            ? res.data
            : null;

        if (apiServices) {
          console.log("[Services] Using API data:", apiServices.length, "services");
          setServices(apiServices);
        } else {
          console.log("[Services] DB empty, using fallback");
          setServices(servicesFallback);
        }
      } catch (err) {
        console.error("[Services] API error, using fallback:", err);
        setServices(servicesFallback);
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
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-violet-50 via-violet-100 to-sky-100 text-white px-6 py-16">
        <div className="flex justify-around gap-15 pt-20">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-violet-500/20 text-sky-400 px-4 py-2 rounded-full text-sm tracking-widest uppercase">
              Nos Services
            </span>

            <h1 className="text-5xl font-bold mt-6 leading-tight bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
              Des solutions digitales <br />
              <span className="text-5xl font-bold leading-tight bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
                adaptées à vos besoins
              </span>
            </h1>

            <p className="text-gray-600 mt-6 text-lg w-120 pb-10">
              Nous proposons des services modernes pour développer
              votre présence digitale et booster votre activite.
            </p>
            <Link to="/contact">
              <button className="mt-6 md:mt-0 px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-violet-400 hover:scale-105 transition duration-300 font-semibold">
                Demmandez Votre Projet
              </button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={image3} alt="Service" className="w-150" />
          </motion.div>
        </div>
      </section>

      {/* Heading */}
      <section className="pt-15">
        <div className="items-center justify-center text-center gap-6">
          <div>
            <h2 className="text-center text-6xl font-bold leading-tight bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
              Des services digitaux adaptes{" "}
            </h2>
            <h3 className="text-6xl font-bold leading-tight bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
              a vos besoins
            </h3>
          </div>
          <p className="text-center pt-8 text-lg">
            Chaque service apporte sa propre valeur. Reunis, ils creent une
            synergie digitale qui
          </p>
          <p className="text-center text-lg">
            renforce chaque point de contact.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      {servicePairs.map((pair, pairIndex) => (
        <section key={pairIndex} className="py-24 bg-white pb-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pair.map((service) => {
                const IconComponent = getIcon(service.icon);
                const iconGradient = getGradient(service.icon);
                const dotColor = getDotColor(service.icon);
                const footerColor = getFooterColor(service.icon);
                const featList =
                  Array.isArray(service.features) ? service.features : [];

                return (
                  <Link
                    key={service._id || service.slug}
                    to={`/ServiceRequestForm?service=${encodeURIComponent(service.title || "")}`}
                    className="block"
                  >
                    <div className="group rounded-3xl border border-gray-200 p-8 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_-4px_20px_rgba(59,130,246,0.35)]">
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${iconGradient} flex items-center justify-center text-white mb-8`}
                      >
                        <IconComponent size={28} />
                      </div>

                      {/* Category */}
                      <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gray-400">
                        {service.category || "Service"}
                      </span>

                      {/* Title */}
                      <h3 className="mt-4 text-3xl font-bold text-gray-900">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-5 text-gray-600 leading-relaxed">
                        {service.shortDescription}
                      </p>

                      {/* Features */}
                      {featList.length > 0 && (
                        <ul className="mt-8 space-y-4">
                          {featList.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-3 text-gray-700"
                            >
                              <div
                                className={`w-2 h-2 rounded-full ${dotColor}`}
                              ></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Footer */}
                      <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-sm text-gray-400">
                          Resultat type
                        </span>
                        <div
                          className={`flex items-center gap-2 ${footerColor} font-semibold`}
                        >
                          En savoir plus
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
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
      <section className="flex justify-center bg-gray-100 py-24 rounded-3xl mx-18">
        <div>
          <h3 className="text-center text-5xl font-bold leading-tight bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
            Vous ne Savez pas par Quel Service
          </h3>
          <h3 className="text-center text-5xl font-bold leading-tight bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
            Commencer ?
          </h3>
          <p className="text-center pt-8 text-lg">
            Notre audit digital gratuit analyse votre situation et vous
            recommande exactement les 2-3
          </p>
          <p className="text-center text-lg pb-8">
            actions a fort impact a mettre en place en priorite.
          </p>
          <Link
            to="/devis"
            className="mt-6 md:mt-0 px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-violet-400 hover:scale-105 transition duration-300 font-semibold ml-67"
          >
            Commencer Maintenant
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
