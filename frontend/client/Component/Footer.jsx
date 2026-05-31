import React, { useState } from "react";
import logo from "../src/assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaRobot,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const [openChat, setOpenChat] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-16 sm:pt-20 pb-8 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-sky-100 via-violet-50 to-violet-100 relative overflow-hidden">

      {/* TOP CTA */}
      <div className="text-center border-t border-gray-200 pt-10 sm:pt-12 px-2 sm:px-4">

        <span className="inline-block px-4 py-1.5 rounded-full border border-sky-100 bg-sky-50 text-violet-600 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-5">
          Toujours disponibles pour vous
        </span>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          <span className="text-sky-500">
            Besoin d’une agence marketing digital à
          </span>{" "}
          <span className="text-violet-600">Casablanca ?</span>
        </h2>

        <p className="text-gray-500 mt-5 sm:mt-6 max-w-2xl mx-auto leading-7 sm:leading-8 text-sm sm:text-lg px-2">
          Contactez Triova Media pour développer votre présence digitale.
        </p>

        <div className="mt-8 sm:mt-10">
          <Link
            to="/Contact"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Contactez-nous
            <span className="group-hover:translate-x-1 transition">→</span>
          </Link>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-24">

        {/* LOGO */}
        <div className="bg-white border border-gray-100 rounded-3xl p-5 sm:p-7">
          <img src={logo} alt="Triova Media" className="w-40 sm:w-52 mb-5 sm:mb-6" />

          <ul className="space-y-3 sm:space-y-4 text-gray-500 text-xs sm:text-sm leading-6">
            <li>Création de Sites Web Professionnels</li>
            <li>Solutions AI & Développement Intelligent</li>
            <li>Branding & Identité de Marque</li>
            <li>ADS Campaigns</li>
            <li>Social Media</li>
            <li>SEO</li>
          </ul>
        </div>

        {/* LINKS */}
        <div className="bg-white border border-gray-100 rounded-3xl p-5 sm:p-7">
          <h3 className="font-bold text-xl sm:text-2xl text-violet-600 mb-5 sm:mb-7">
            Liens rapides
          </h3>

          <ul className="space-y-4 sm:space-y-5 text-gray-500 text-sm">

            <Link to="/" onClick={scrollToTop}
              className="flex justify-between hover:text-sky-500 transition">
              Principal <span>→</span>
            </Link>

            <Link to="/Notre-agence" onClick={scrollToTop}
              className="flex justify-between hover:text-sky-500 transition">
              À propos <span>→</span>
            </Link>

            <Link to="/Services" onClick={scrollToTop}
              className="flex justify-between hover:text-sky-500 transition">
              Nos services <span>→</span>
            </Link>

            <Link to="/Contact" onClick={scrollToTop}
              className="flex justify-between hover:text-sky-500 transition">
              Contact <span>→</span>
            </Link>

          </ul>
        </div>

        {/* SERVICES */}
        <div className="bg-white border border-gray-100 rounded-3xl p-5 sm:p-7">
          <h3 className="font-bold text-xl sm:text-2xl text-violet-600 mb-5 sm:mb-7">
            Nos services
          </h3>

          <ul className="space-y-3 sm:space-y-4 text-gray-500 text-xs sm:text-sm">
            <li>• Web Development</li>
            <li>• AI Development</li>
            <li>• Branding</li>
            <li>• ADS Campaigns</li>
            <li>• Social Media</li>
            <li>• SEO</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="bg-white border border-gray-100 rounded-3xl p-5 sm:p-7">
          <h3 className="font-bold text-xl sm:text-2xl text-violet-600 mb-5 sm:mb-7">
            Contact
          </h3>

          <div className="space-y-4 sm:space-y-6 text-gray-500 text-xs sm:text-sm">
            <div>
              <h4 className="text-sky-500 font-semibold">Horaires</h4>
              <p>Lun - Ven: 9h30 – 17h30</p>
              <p>Sam: 9h30 – 13h</p>
            </div>

            <div>
              <h4 className="text-sky-500 font-semibold">Téléphone</h4>
              <p>+212 56642217</p>
            </div>

            <div>
              <h4 className="text-sky-500 font-semibold">Email</h4>
              <p>contact@triovamedia.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-200 mt-12 sm:mt-20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 px-2">

        <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
          © 2026 Triova Media
        </p>

        <div className="flex gap-4 text-lg">
          <a href="https://facebook.com" className="text-sky-500"><FaFacebookF /></a>
          <a href="https://linkedin.com" className="text-sky-500"><FaLinkedinIn /></a>
          <a href="https://instagram.com" className="text-violet-600"><FaInstagram /></a>
          <a href="https://wa.me/21256642217" className="text-violet-600"><FaWhatsapp /></a>
        </div>
      </div>

      {/* CHAT BUTTON */}
      <button
        onClick={() => setOpenChat(!openChat)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      >
        <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-gradient-to-r from-sky-500 to-violet-600 text-white flex items-center justify-center text-2xl sm:text-3xl shadow-xl hover:scale-110 transition">
          <FaRobot />
        </div>
      </button>

      {/* CHAT BOX */}
      {openChat && (
        <div className="fixed bottom-24 sm:bottom-28 right-4 sm:right-6 w-[90%] sm:w-80 bg-white rounded-3xl shadow-2xl border z-50">

          <div className="bg-gradient-to-r from-sky-500 to-violet-600 p-3 sm:p-4 text-white rounded-t-3xl">
            <h3 className="font-semibold text-sm sm:text-base">
              Triova Assistant
            </h3>
          </div>

          <div className="p-3 sm:p-4 h-56 sm:h-72 overflow-y-auto text-sm">
            👋 Bonjour et bienvenue !
          </div>

          <div className="p-3 border-t flex gap-2">
            <input
              className="flex-1 border rounded-xl px-3 py-2 text-sm"
              placeholder="Message..."
            />
            <button className="bg-gradient-to-r from-sky-500 to-violet-600 text-white px-3 sm:px-4 rounded-xl text-sm">
              Envoyer
            </button>
          </div>

        </div>
      )}
    </footer>
  );
}