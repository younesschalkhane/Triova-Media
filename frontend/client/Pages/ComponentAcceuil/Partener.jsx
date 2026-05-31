import React from "react";
import jadara from "../../src/assets/jadara.png";
import gomycode from "../../src/assets/gomycode.webp";
import indh from "../../src/assets/indh-logo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="w-full bg-gradient-to-b from-white via-slate-50 to-white py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold tracking-widest uppercase mb-4">
            Nos Partenaires
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            <span className="text-sky-500">Ensemble,</span>{" "}
            <span className="text-violet-600">
              nous construisons l'avenir
            </span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            Ils nous font confiance et soutiennent notre mission au quotidien
            à travers leur expertise et leur engagement.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {partners.map((p) => (
            <motion.a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden block cursor-pointer"
            >
              {/* Top gradient line */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Logo */}
              <div className="h-24 sm:h-28 flex items-center justify-center mb-6">
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className="max-h-20 sm:max-h-24 max-w-[80%] object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <h3 className="text-center text-lg font-semibold text-violet-600 mb-2">
                {p.name}
              </h3>

              {/* Description */}
              <p className="text-center text-sm text-gray-600 leading-relaxed">
                {p.description}
              </p>

              {/* Link */}
              <div className="mt-4 text-center">
                <span className="text-sky-500 font-medium text-sm group-hover:text-violet-600 transition-colors">
                  Visiter le site →
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-gray-600 text-sm"
        >
          <span className="h-px w-12 bg-slate-200" />

          <span>Vous souhaitez devenir partenaire ?</span>

          <Link
            to="/Contact"
            className="font-semibold text-sky-500 hover:text-violet-600 transition-colors"
          >
            Contactez-nous →
          </Link>

          <span className="h-px w-12 bg-slate-200" />
        </motion.div>

      </div>
    </section>
  );
}

export default Partener;