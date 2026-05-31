import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  BriefcaseBusiness,
  Trophy,
} from "lucide-react";
import imgApropos from "../../src/assets/imgApropos.png";
import { Link } from "react-router-dom";

function Apropos() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">

      {/* HEADER */}
      <div className="text-center mb-10 sm:mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold tracking-widest uppercase">
          À PROPOS DE NOUS
        </span>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">

        {/* LEFT */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">
            <span className="text-sky-500">Une équipe passionnée</span>
            <br />
            <span className="text-violet-600">
              au service de vos projets
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl text-center">
            Chez Triova Media, nous croyons en la puissance de la créativité,
            de l’innovation et de la collaboration. Notre équipe transforme vos
            idées en résultats concrets.
          </p>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

            <motion.div
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-violet-50 text-violet-600">
                  <Users size={26} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-violet-600">4+</h3>
                  <p className="text-sm text-slate-500">Experts</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-sky-50 text-sky-600">
                  <BriefcaseBusiness size={26} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-sky-600">5+</h3>
                  <p className="text-sm text-slate-500">Projets</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-violet-50 text-violet-600">
                  <Trophy size={26} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-violet-600">98%</h3>
                  <p className="text-sm text-slate-500">Satisfaction</p>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
            <img
              src={imgApropos}
              alt="Triova Media Team"
              className="w-full h-[300px] sm:h-[450px] lg:h-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 sm:mt-10 flex justify-center"
          >
            <Link
              to="/Notre-agence"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 sm:px-7 py-3 text-white text-sm sm:text-base font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Découvrir Plus
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default Apropos;