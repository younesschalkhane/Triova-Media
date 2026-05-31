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

  // ✅ Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="pt-16 pb-8 px-6 md:px-20 bg-gradient-to-br from-sky-100 via-violet-50 to-violet-100 relative overflow-hidden">

      {/* TOP CTA */}
      <div className="text-center border-t border-gray-200 pt-12">

        <span className="inline-block px-4 py-1.5 rounded-full border border-sky-100 bg-sky-50 text-violet-600 text-xs font-semibold tracking-widest uppercase mb-5">
          Toujours disponibles pour vous
        </span>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          <span className="text-sky-500">Besoin d’une agence marketing digital à</span>{" "}
          <span className="text-violet-600">Casablanca ?</span>
        </h2>

        <p className="text-gray-500 mt-6 max-w-2xl mx-auto leading-8 text-lg">
          Contactez Triova Media pour développer votre présence digitale
          avec des solutions innovantes et efficaces.
        </p>

        <div className="mt-10">
          <Link
            to="/Contact"
            onClick={scrollToTop}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Contactez-nous
            <span className="group-hover:translate-x-1 transition duration-300">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* FOOTER GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-24">

        {/* LOGO CARD */}
        <div className="bg-white border border-gray-100 rounded-3xl p-7">
          <img src={logo} alt="Triova Media" className="w-52 mb-6" />

          <ul className="space-y-4 text-gray-500 leading-7 text-sm">
            <li>Création de Sites Web Professionnels</li>
            <li>Solutions AI & Développement Intelligent</li>
            <li>Branding & Identité de Marque</li>
            <li>Gestion des Campagnes Publicitaires ADS</li>
            <li>Création de Contenu Visuel AI</li>
            <li>Gestion des Réseaux Sociaux</li>
            <li>SEO & Optimisation de Référencement</li>
          </ul>
        </div>

        {/* LINKS CARD */}
        <div className="bg-white border border-gray-100 rounded-3xl p-7">
          <h3 className="font-bold text-2xl text-violet-600 mb-7">
            Liens rapides
          </h3>

          <ul className="space-y-5 text-gray-500">

            <Link to="/" onClick={scrollToTop}
              className="group flex items-center justify-between hover:text-sky-500 transition">
              Principal <span className="group-hover:translate-x-1">→</span>
            </Link>

            <Link to="/Notre-agence" onClick={scrollToTop}
              className="group flex items-center justify-between hover:text-sky-500 transition">
              À propos <span className="group-hover:translate-x-1">→</span>
            </Link>

            <Link to="/Services" onClick={scrollToTop}
              className="group flex items-center justify-between hover:text-sky-500 transition">
              Nos services <span className="group-hover:translate-x-1">→</span>
            </Link>

            <Link to="/Contact" onClick={scrollToTop}
              className="group flex items-center justify-between hover:text-sky-500 transition">
              Contactez-nous <span className="group-hover:translate-x-1">→</span>
            </Link>

          </ul>
        </div>

        {/* SERVICES CARD */}
        <div className="bg-white border border-gray-100 rounded-3xl p-7">
          <h3 className="font-bold text-2xl text-violet-600 mb-7">
            Nos services
          </h3>

          <ul className="space-y-4 text-gray-500 text-sm">
            <li>• Programmation de sites web</li>
            <li>• Programmation AI</li>
            <li>• Branding</li>
            <li>• ADS Campaigns</li>
            <li>• Social Media</li>
            <li>• SEO</li>
          </ul>
        </div>

        {/* CONTACT CARD */}
        <div className="bg-white border border-gray-100 rounded-3xl p-7">
          <h3 className="font-bold text-2xl text-violet-600 mb-7">
            Contact
          </h3>

          <div className="space-y-6 text-gray-500 text-sm">
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
      <div className="border-t border-gray-200 mt-20 pt-6 flex flex-col md:flex-row items-center justify-evenly gap-5">

        <p className="text-gray-500 text-sm">
          Copyright © 2026 Triova Media
        </p>

        <div className="flex gap-4">

          <a href="https://facebook.com" className="text-sky-500">
            <FaFacebookF />
          </a>

          <a href="https://linkedin.com" className="text-sky-500">
            <FaLinkedinIn />
          </a>

          <a href="https://instagram.com" className="text-violet-600">
            <FaInstagram />
          </a>

          <a href="https://wa.me/21256642217" className="text-violet-600">
            <FaWhatsapp />
          </a>

        </div>
      </div>

      {/* CHAT BUTTON */}
      <button
        onClick={() => setOpenChat(!openChat)}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-sky-500 to-violet-600 text-white flex items-center justify-center text-3xl shadow-xl hover:scale-110 transition">
          <FaRobot />
        </div>
      </button>

      {/* CHAT BOX */}
      {openChat && (
        <div className="fixed bottom-28 right-6 w-80 bg-white rounded-3xl shadow-2xl border z-50">

          <div className="bg-gradient-to-r from-sky-500 to-violet-600 p-4 text-white">
            <h3 className="font-semibold">Triova Assistant</h3>
          </div>

          <div className="p-4 h-72 overflow-y-auto">
            👋 Bonjour et bienvenue !
          </div>

          <div className="p-4 border-t flex gap-2">
            <input
              className="flex-1 border rounded-xl px-3 py-2"
              placeholder="Message..."
            />
            <button className="bg-gradient-to-r from-sky-500 to-violet-600 text-white px-4 rounded-xl">
              Envoyer
            </button>
          </div>

        </div>
      )}

    </footer>
  );
}