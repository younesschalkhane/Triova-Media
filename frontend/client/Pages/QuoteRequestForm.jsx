import React, { useState } from "react";
import logo from "../src/assets/triova.jpeg";
import { useNavigate } from "react-router-dom";

export default function QuoteRequestForm() {

  const navigate = useNavigate();
const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
  fullName: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  objective: "",
  budget: "",
  launchDate: "",
  priority: "",
  description: "",
  requestedServices: [],
});

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  console.log(formData);

  setSuccessMessage(
    "Votre demande de devis a bien été envoyée. Notre équipe vous contactera dans les plus brefs délais."
  );

  setFormData({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    objective: "",
    budget: "",
    launchDate: "",
    priority: "",
    description: "",
    requestedServices: [],
  });

  setTimeout(() => {
    navigate("/services");
  }, 2500);
};

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-violet-50 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-lg border border-white rounded-[32px] shadow-2xl p-6 md:p-10">

        {/* Header */}
        <div className="text-center mb-10">
          <img
            src={logo}
            alt="Triova Media"
            className="w-40 md:w-52 mx-auto mb-6"
          />

          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-sky-500 to-violet-600 bg-clip-text text-transparent">
            Demande de Devis
          </h1>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Décrivez votre projet et recevez une estimation personnalisée
            adaptée à vos besoins.
          </p>
        </div>

        {successMessage && (
  <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 px-6 py-4 text-center shadow-sm">
    <p className="font-semibold text-green-700">
      ✅ Votre demande de devis a bien été envoyée !
    </p>

    <p className="mt-1 text-sm text-green-600">
      Notre équipe vous contactera dans les plus brefs délais.
    </p>
  </div>
)}

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Informations client */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Nom complet *"
              required
              className="w-full rounded-2xl border border-gray-200 px-4 py-3"
            />

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Entreprise"
              className="w-full rounded-2xl border border-gray-200 px-4 py-3"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Adresse Email *"
              required
              className="w-full rounded-2xl border border-gray-200 px-4 py-3"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Téléphone *"
              required
              className="w-full rounded-2xl border border-gray-200 px-4 py-3"
            />
          </div>

          {/* Projet */}
          <div className="grid md:grid-cols-2 gap-6">
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-gray-200 px-4 py-3"
            >
              <option value="">Type de projet *</option>
              <option>Site Web</option>
              <option>Application Web</option>
              <option>Application Mobile</option>
              <option>SEO</option>
              <option>ADS Marketing</option>
              <option>Social Media</option>
              <option>Branding</option>
              <option>Création de Contenu</option>
              <option>Autre</option>
            </select>

            <input
              type="text"
              name="objective"
              value={formData.objective}
              onChange={handleChange}
              placeholder="Objectif principal du projet"
              className="w-full rounded-2xl border border-gray-200 px-4 py-3"
            />
          </div>

          {/* Budget */}
          <div className="grid md:grid-cols-3 gap-6">
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full rounded-2xl border border-gray-200 px-4 py-3"
            >
              <option value="">Budget estimatif</option>
              <option>Moins de 5 000 DH</option>
              <option>5 000 - 10 000 DH</option>
              <option>10 000 - 20 000 DH</option>
              <option>20 000 - 50 000 DH</option>
              <option>Plus de 50 000 DH</option>
            </select>

            <input
              type="date"
              name="launchDate"
              value={formData.launchDate}
              onChange={handleChange}
              className="w-full rounded-2xl border border-gray-200 px-4 py-3"
            />

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full rounded-2xl border border-gray-200 px-4 py-3"
            >
              <option value="">Priorité</option>
              <option>Urgent</option>
              <option>Normal</option>
              <option>Flexible</option>
            </select>
          </div>

          {/* Description */}
          <textarea
            name="description"
            rows="6"
            value={formData.description}
            onChange={handleChange}
            placeholder="Décrivez votre projet en détail..."
            required
            className="w-full rounded-2xl border border-gray-200 px-4 py-3"
          />

         {/* Services demandés */}
<div>
  <h2 className="text-lg font-semibold mb-4">
    Services demandés *
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {[
      "Programmation Web",
      "Solutions AI",
      "Identité Visuelle",
      "ADS Marketing",
      "Création AI",
      "Social Media",
      "SEO",
    ].map((service) => (
      <label
        key={service}
        className="flex items-center gap-3 p-4 rounded-2xl border border-gray-200 cursor-pointer hover:border-violet-400 hover:shadow-md transition-all"
      >
        <input
          type="checkbox"
          value={service}
          onChange={(e) => {
            if (e.target.checked) {
              setFormData({
                ...formData,
                requestedServices: [
                  ...(formData.requestedServices || []),
                  service,
                ],
              });
            } else {
              setFormData({
                ...formData,
                requestedServices: (
                  formData.requestedServices || []
                ).filter((s) => s !== service),
              });
            }
          }}
          className="w-5 h-5"
        />

        <span className="text-sm font-medium">
          {service}
        </span>
      </label>
    ))}
  </div>
</div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-sky-500 to-violet-600 py-4 text-white font-semibold text-lg shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            Recevoir mon devis gratuit
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Triova Media — Demande de Devis
          </p>
        </div>

      </div>
    </section>
  );
}