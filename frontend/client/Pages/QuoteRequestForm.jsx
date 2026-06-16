import React, { useState } from "react";
import { ArrowLeft, Loader2, CheckCircle } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "";

/**
 * Formulaire de demande de devis côté client.
 * Envoie les données au backend via l'API réelle.
 */
export default function QuoteRequestForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const origin = searchParams.get("from") || "/";

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
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      setSubmitting(true);

      // Appel API réel vers le backend
      const response = await axios.post(`${API_URL}/api/devis`, formData);

      if (import.meta.env.DEV) {
        console.log("[QuoteRequestForm] Réponse API:", response.data);
      }

      setSuccessMessage("Votre demande de devis a bien été envoyée !");

      setTimeout(() => {
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
        navigate(origin);
      }, 5000);
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("[QuoteRequestForm] Erreur API:", error.response?.data || error.message);
      }

      const serverMsg = error.response?.data?.message;
      setErrorMessage(serverMsg || "Erreur lors de l'envoi. Veuillez réessayer.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      requestedServices: prev.requestedServices.includes(service)
        ? prev.requestedServices.filter((s) => s !== service)
        : [...prev.requestedServices, service],
    }));
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-violet-50 py-8 px-4 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-[32px] shadow-2xl border border-slate-100 p-6 md:p-10 relative">
        {/* Back button */}
        <button
          onClick={() => navigate(origin)}
          className="absolute top-4 left-4 md:top-6 md:left-6 inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-violet-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour</span>
        </button>

        {/* Hero */}
        <div className="text-center mb-8 mt-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-sky-500">Demande de</span>{" "}
            <span className="text-violet-600">Devis</span>
          </h1>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base">
            Décrivez votre projet et recevez une estimation personnalisée adaptée à vos besoins.
          </p>
        </div>

        {/* Error */}
        {errorMessage && (
          <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-5 py-3 text-center text-red-700 text-sm font-medium">
            {errorMessage}
          </div>
        )}

        {/* Success overlay */}
        {successMessage && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 max-w-md w-full text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-violet-600 mb-2">
                Merci pour votre confiance !
              </h3>
              <p className="text-gray-600 text-sm">
                Votre demande de devis a bien été envoyée. Notre équipe vous contactera dans les plus brefs délais.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-8 h-8 border-2 border-violet-300 border-t-violet-600 rounded-full animate-spin" />
              </div>
              <p className="text-xs text-gray-400 mt-3">Redirection en cours...</p>
            </div>
          </div>
        )}

        {/* Form */}
        {!successMessage && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Nom complet *"
                required
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:ring-4 focus:ring-violet-100 focus:border-violet-500 outline-none transition"
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Entreprise"
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:ring-4 focus:ring-violet-100 focus:border-violet-500 outline-none transition"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Adresse Email *"
                required
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:ring-4 focus:ring-violet-100 focus:border-violet-500 outline-none transition"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Téléphone *"
                required
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:ring-4 focus:ring-violet-100 focus:border-violet-500 outline-none transition"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:ring-4 focus:ring-violet-100 focus:border-violet-500 outline-none transition"
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
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:ring-4 focus:ring-violet-100 focus:border-violet-500 outline-none transition"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:ring-4 focus:ring-violet-100 focus:border-violet-500 outline-none transition"
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
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:ring-4 focus:ring-violet-100 focus:border-violet-500 outline-none transition"
              />
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:ring-4 focus:ring-violet-100 focus:border-violet-500 outline-none transition"
              >
                <option value="">Priorité</option>
                <option>Urgent</option>
                <option>Normal</option>
                <option>Flexible</option>
              </select>
            </div>

            <textarea
              name="description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              placeholder="Décrivez votre projet en détail... *"
              required
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:ring-4 focus:ring-violet-100 focus:border-violet-500 outline-none transition resize-none"
            />

            {/* Services */}
            <div>
              <h2 className="text-base font-semibold mb-3 text-gray-800">Services demandés</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
                    className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      formData.requestedServices.includes(service)
                        ? "border-violet-500 bg-gradient-to-r from-sky-50 to-violet-50 shadow-sm"
                        : "border-gray-200 hover:border-violet-400 hover:shadow-sm"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.requestedServices.includes(service)}
                      onChange={() => handleServiceToggle(service)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-2xl bg-gradient-to-r from-sky-500 to-violet-600 py-3.5 text-white font-semibold text-base shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                "Recevoir mon devis gratuit"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}