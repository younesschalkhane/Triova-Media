import React from "react";
import logo from "../src/assets/logo1.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="pt-16 pb-8 px-6 md:px-20 bg-white relative overflow-hidden">

      {/* TOP CTA */}
      <div className="text-center border-t border-gray-200 pt-12">

        <span className="inline-block px-4 py-1.5 rounded-full border border-sky-100 bg-sky-50 text-violet-600 text-xs font-semibold tracking-widest uppercase mb-5">
          Toujours disponibles pour vous
        </span>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          <span className="text-sky-500">
            Besoin d’une agence marketing digital à
          </span>{" "}
          <span className="text-violet-600">
            Casablanca ?
          </span>
        </h2>

        <p className="text-gray-500 mt-6 max-w-2xl mx-auto leading-8 text-lg">
          Contactez Triova Media pour développer votre présence digitale
          avec des solutions innovantes et efficaces.
        </p>

        {/* CTA BUTTON */}
        <div className="mt-10">
          <Link
            to="/Contact"
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

          <img
            src={logo}
            alt="Triova Media"
            className="w-52 mb-6"
          />

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
        <div className="bg-white border border-gray-100 rounded-3xl p-7  ">

          <h3 className="font-bold text-2xl text-violet-600 mb-7">
            Liens rapides
          </h3>

          <div>
            <ul className="space-y-5 text-gray-500">
            <Link
              to="/"
              className="group flex items-center justify-between hover:text-sky-500 transition cursor-pointer"
            >
              Principal

              <span className="group-hover:translate-x-1 transition duration-300">
                →
              </span>
            </Link>

            <Link
              to="/Notre-agence"
              className="group flex items-center justify-between hover:text-sky-500 transition cursor-pointer"
            >
              À propos

              <span className="group-hover:translate-x-1 transition duration-300">
                →
              </span>
            </Link>

            <Link 
             to="/Services"
            className="group flex items-center justify-between hover:text-sky-500 transition cursor-pointer">
              Nos services

              <span className="group-hover:translate-x-1 transition duration-300">
                →
              </span>
            </Link>

            <Link
              to="/Contact"
              className="group flex items-center justify-between hover:text-sky-500 transition cursor-pointer"
            >
              Contactez-nous

              <span className="group-hover:translate-x-1 transition duration-300">
                →
              </span>
            </Link>
            </ul>
          </div>
        </div>

        {/* SERVICES CARD */}
        <div className="bg-white border border-gray-100 rounded-3xl p-7 ">

          <h3 className="font-bold text-2xl text-violet-600 mb-7">
            Nos services
          </h3>

          <ul className="space-y-4 text-gray-500 leading-7 text-sm">
            <li>• Programmation de sites web</li>
            <li>• Programmation AI</li>
            <li>• Identité de Marque</li>
            <li>• Campagnes Publicitaires ADS</li>
            <li>• Création Visuelle AI</li>
            <li>• Campagnes Social Media</li>
            <li>• SEO & Référencement</li>
          </ul>
        </div>

        {/* CONTACT CARD */}
        <div className="bg-white border border-gray-100 rounded-3xl p-7 ">

          <h3 className="font-bold text-2xl text-violet-600 mb-7">
            Comment nous contacter
          </h3>

          <div className="space-y-8 text-gray-500">

            <div>
              <h4 className="text-sky-500 font-semibold mb-3">
                Horaires d'ouverture
              </h4>

              <p>Lundi au Vendredi : 9h30 – 17h30</p>
              <p>Samedi : 9h30 – 13h00</p>
            </div>

            <div>
              <h4 className="text-sky-500 font-semibold mb-3">
                Téléphone
              </h4>

              <p>+212 56642217</p>
            </div>

            <div>
              <h4 className="text-sky-500 font-semibold mb-3">
                Email
              </h4>

              <p>contact@triovamedia.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-gray-200 mt-20 pt-6 flex flex-col md:flex-row items-center justify-between gap-5">

        {/* LEFT */}
        <p className="text-gray-500 text-sm text-center md:text-left">
          Copyright © 2026 Triova Media | Propulsé par Triova Media
        </p>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          <a
            href="https://www.facebook.com/"
            className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-sky-500 text-xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-sky-500 hover:text-white transition-all duration-300"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.linkedin.com/"
            className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-sky-500 text-xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-sky-500 hover:text-white transition-all duration-300"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.instagram.com/"
            className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-violet-600 text-xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-violet-600 hover:text-white transition-all duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/21256642217"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-violet-600 text-xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-violet-600 hover:text-white transition-all duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/21256642217"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 rounded-2xl bg-green-500 text-white flex items-center justify-center text-3xl shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
}