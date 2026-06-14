import React, { useState } from "react";
import logo from "../../src/assets/triova.jpeg";
import { useSearchParams, useNavigate } from "react-router-dom";
import { createServiceRequest } from "../../src/services/api/serviceRequestApi";

export default function ServiceRequestForm() {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [searchParams] = useSearchParams();

  const selectedService = searchParams.get("service");

  const servicesList = [
    "Programmation Web",
    "Solutions AI",
    "Identité Visuelle",
    "ADS Marketing",
    "Création AI",
    "Social Media",
    "SEO",
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    services: selectedService ? [selectedService] : [],
    budget: "",
    deadline: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (formData.services.length === 0) {
      setErrorMessage("Veuillez sélectionner au moins un service.");
      return;
    }

    try {
      setSubmitting(true);
      await createServiceRequest(formData);

      setSuccessMessage("Votre demande a été envoyée avec succès !");
      setFormData({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        services: [],
        budget: "",
        deadline: "",
        description: "",
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        "Erreur lors de l'envoi de la demande. Veuillez réessayer.";
      setErrorMessage(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-violet-50 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-lg border border-white rounded-[32px] shadow-2xl p-6 md:p-10">

        {/* HERO */}
        <div className="text-center mb-10">
          <img
            src={logo}
            alt="Triova Media"
            className="w-40 md:w-52 mx-auto mb-6"
          />

          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-sky-500 to-violet-600 bg-clip-text text-transparent">
            Demande de Service
          </h1>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Décrivez votre projet et sélectionnez les services dont vous avez besoin.
            Notre équipe Triova Media vous contactera rapidement.
          </p>
        </div>
{errorMessage && (
  <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-center text-red-700 font-medium shadow-sm">
    ❌ {errorMessage}
  </div>
)}

{successMessage && (
  <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-center text-green-700 font-medium shadow-sm">
    ✅ {successMessage}
  </div>
)}
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* INPUTS */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Nom complet"
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition"
            />

            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Entreprise"
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Téléphone"
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition"
            />
          </div>

          {/* SERVICES */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Services souhaités *</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {servicesList.map((service) => (
                <label
                  key={service}
                  className={`group flex items-center gap-3 p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    formData.services.includes(service)
                      ? "border-violet-500 bg-gradient-to-r from-sky-50 to-violet-50 shadow-md"
                      : "border-gray-200 hover:border-violet-400 hover:shadow-md"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => handleServiceChange(service)}
                    className="w-5 h-5"
                  />
                  <span className="text-sm font-medium">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* BUDGET + DEADLINE */}
          <div className="grid md:grid-cols-2 gap-6">
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition"
            >
              <option value="">Budget estimé</option>
              <option>Moins de 2 000 DH</option>
              <option>2 000 DH - 5 000 DH</option>
              <option>5 000 DH - 10 000 DH</option>
              <option>10 000 DH - 20 000 DH</option>
              <option>Plus de 20 000 DH</option>
            </select>

            <select
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition"
            >
              <option value="">Délai souhaité</option>
              <option>Urgent</option>
              <option>1 semaine</option>
              <option>2 semaines</option>
              <option>1 mois</option>
              <option>Flexible</option>
            </select>
          </div>

          {/* DESCRIPTION */}
          <textarea
            name="description"
            rows="6"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Décrivez votre projet..."
            className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition"
          />

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-sky-500 to-violet-600 py-4 text-white font-semibold text-lg shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
          >
            Envoyer la demande
          </button>
        </form>

        {/* FOOTER */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Triova Media — Agence Marketing Digital
          </p>
        </div>

      </div>
    </section>
  );
}