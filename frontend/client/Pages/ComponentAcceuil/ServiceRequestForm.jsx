import React, { useState } from "react";
import { ArrowLeft, Loader2, CheckCircle } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { createServiceRequest } from "../../src/services/api/serviceRequestApi";

export default function ServiceRequestForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const selectedService = searchParams.get("service");
  const origin = searchParams.get("from") || "/";

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
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const servicesList = [
    "Programmation Web",
    "Solutions AI",
    "Identité Visuelle",
    "ADS Marketing",
    "Création AI",
    "Social Media",
    "SEO",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

      setTimeout(() => {
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
        navigate(origin);
      }, 5000);
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
            <span className="text-violet-600">Service</span>
          </h1>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base">
            Décrivez votre projet et sélectionnez les services dont vous avez besoin.
            Notre équipe Triova Media vous contactera rapidement.
          </p>
        </div>

        {/* Error message */}
        {errorMessage && (
          <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-5 py-3 text-center text-red-700 text-sm font-medium">
            {errorMessage}
          </div>
        )}

        {/* Success toast overlay */}
        {successMessage && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 max-w-md w-full text-center animate-in zoom-in">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-violet-600 mb-2">
                Merci pour votre confiance !
              </h3>
              <p className="text-gray-600 text-sm">
                Votre demande a été envoyée avec succès. Nous vous contacterons rapidement.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-8 h-8 border-2 border-violet-300 border-t-violet-600 rounded-full animate-spin" />
              </div>
              <p className="text-xs text-gray-400 mt-3">Redirection en cours...</p>
            </div>
          </div>
        )}

        {/* Form - hidden when success */}
        {!successMessage && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Nom complet *"
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:ring-4 focus:ring-violet-100 focus:border-violet-500 outline-none transition"
              />
              <input
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
                required
                placeholder="Email *"
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:ring-4 focus:ring-violet-100 focus:border-violet-500 outline-none transition"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Téléphone *"
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:ring-4 focus:ring-violet-100 focus:border-violet-500 outline-none transition"
              />
            </div>

            {/* Services */}
            <div>
              <h2 className="text-base font-semibold mb-3 text-gray-800">Services souhaités *</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {servicesList.map((service) => (
                  <label
                    key={service}
                    className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      formData.services.includes(service)
                        ? "border-violet-500 bg-gradient-to-r from-sky-50 to-violet-50 shadow-sm"
                        : "border-gray-200 hover:border-violet-400 hover:shadow-sm"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Budget + Deadline */}
            <div className="grid md:grid-cols-2 gap-5">
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:ring-4 focus:ring-violet-100 focus:border-violet-500 outline-none transition"
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
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:ring-4 focus:ring-violet-100 focus:border-violet-500 outline-none transition"
              >
                <option value="">Délai souhaité</option>
                <option>Urgent</option>
                <option>1 semaine</option>
                <option>2 semaines</option>
                <option>1 mois</option>
                <option>Flexible</option>
              </select>
            </div>

            {/* Description */}
            <textarea
              name="description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Décrivez votre projet... *"
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:ring-4 focus:ring-violet-100 focus:border-violet-500 outline-none transition resize-none"
            />

            {/* Submit */}
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
                "Envoyer la demande"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}