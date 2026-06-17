import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../../src/assets/hero.png";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-violet-50 via-violet-100 to-sky-100">

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 py-12 sm:py-16 lg:py-24">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center text-center lg:text-left max-w-xl w-full "
        >

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight w-180"
          >
            <span className="text-sky-500">Des opportunités réelles </span>{" "}
            <span className="text-violet-600">pour une croissance durable</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-5 sm:mt-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            TRIOVA MEDIA accompagne les entreprises avec des solutions de marketing
            digital créatives, du contenu engageant et des stratégies innovantes
            pour développer leur présence en ligne et attirer plus de clients.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full"
          >

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Contactez-nous
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-full border border-sky-500 text-gray-700 font-semibold hover:bg-slate-50 hover:border-violet-300 hover:text-violet-600 transition-all duration-300"
            >
              Découvrir nos services
            </Link>

          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="group relative rounded-2xl overflow-hidden border border-slate-100 hover:border-violet-500 hover:shadow-xl"
            >

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-sky-500 to-violet-600 blur-sm -z-10" />

              <motion.img
                src={heroImg}
                alt="Triova Media Hero"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover"
              />

            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;