import React, { useState, useEffect, useCallback } from "react";
import { Star, Send, User, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { fetchActiveReviews, createReview } from "../../src/services/api/reviewsApi";

function Avis() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [form, setForm] = useState({ name: "", role: "", company: "", comment: "", rating: 5 });
  const [hover, setHover] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState("");

  useEffect(() => {
    async function loadReviews() {
      try {
        setLoading(true);
        const response = await fetchActiveReviews();
        const data = response?.data || [];
        setReviews(data);
      } catch {
        setError("Impossible de charger les avis.");
      } finally {
        setLoading(false);
      }
    }
    loadReviews();
  }, []);

  // Auto-slide carousel
  useEffect(() => {
    if (reviews.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.comment.trim()) return;
    setSubmitting(true);
    setSubmitSuccess("");
    try {
      await createReview({
        name: form.name.trim(),
        role: form.role.trim(),
        company: form.company.trim(),
        comment: form.comment.trim(),
        rating: form.rating,
      });
      setSubmitSuccess("Merci pour votre avis ! Il sera visible après modération.");
      setForm({ name: "", role: "", company: "", comment: "", rating: 5 });
      // Reload reviews
      const response = await fetchActiveReviews();
      const data = response?.data || [];
      setReviews(data);
    } catch {
      setError("Erreur lors de l'envoi de votre avis. Veuillez réessayer.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-white via-slate-50 to-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold tracking-widest uppercase mb-4">
            Avis Clients
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-sky-500">Ce que disent</span>{" "}
            <span className="text-violet-600">nos clients</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Découvrez les témoignages de ceux qui nous ont fait confiance.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center text-gray-500 animate-pulse py-10">
            Chargement des avis...
          </div>
        )}

        {/* Error */}
        {error && !submitting && (
          <div className="text-center text-red-600 bg-red-50 border border-red-200 rounded-xl py-6 px-4 mb-8">
            {error}
          </div>
        )}

        {/* Carousel */}
        {!loading && reviews.length > 0 && (
          <div className="relative max-w-4xl mx-auto mb-16">
            {/* Navigation arrows */}
            {reviews.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center hover:bg-sky-50 transition-all hover:scale-105"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5 text-sky-500" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center hover:bg-sky-50 transition-all hover:scale-105"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5 text-sky-500" />
                </button>
              </>
            )}

            {/* Slides */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {reviews.map((review) => (
                  <div key={review._id} className="min-w-full px-4">
                    <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                      <Quote className="text-violet-200 mb-4" size={36} />
                      <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg italic">
                        &ldquo;{review.comment}&rdquo;
                      </p>
                      <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={
                              i < review.rating
                                ? "fill-amber-400 text-amber-400"
                                : "text-slate-200"
                            }
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
                          {review.photo ? (
                            <img src={review.photo} alt={review.name} className="w-full h-full rounded-full object-cover" />
                          ) : (
                            <User size={20} />
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-violet-600">{review.name}</h4>
                          <p className="text-sm text-gray-500">
                            {review.role}
                            {review.company && ` - ${review.company}`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            {reviews.length > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentSlide
                        ? "bg-gradient-to-r from-sky-500 to-violet-600 w-8"
                        : "bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* No reviews */}
        {!loading && reviews.length === 0 && !error && (
          <div className="text-center text-gray-500 py-10 mb-16">
            Aucun avis pour le moment. Soyez le premier à donner votre avis !
          </div>
        )}

        {/* Formulaire */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              <span className="text-sky-500">Laissez</span>{" "}
              <span className="text-violet-600">votre avis</span>
            </h3>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              Votre retour nous aide à grandir et à mieux vous servir.
            </p>
          </div>

          {submitSuccess && (
            <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm text-center">
              {submitSuccess}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Votre nom *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-5 py-3 rounded-full border border-slate-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none transition-all text-gray-700"
                required
              />
              <input
                type="text"
                placeholder="Votre fonction (optionnel)"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="w-full px-5 py-3 rounded-full border border-slate-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none transition-all text-gray-700"
              />
            </div>
            <input
              type="text"
              placeholder="Entreprise (optionnel)"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full px-5 py-3 rounded-full border border-slate-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none transition-all text-gray-700"
            />

            <textarea
              placeholder="Partagez votre expérience *"
              value={form.comment}
              onChange={(e) => setForm({ ...form, comment: e.target.value })}
              rows={4}
              className="w-full px-5 py-3 rounded-2xl border border-slate-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none transition-all text-gray-700 resize-none"
              required
            />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 mr-2">Note :</span>
                {Array.from({ length: 5 }).map((_, i) => {
                  const value = i + 1;
                  return (
                    <button
                      type="button"
                      key={value}
                      onClick={() => setForm({ ...form, rating: value })}
                      onMouseEnter={() => setHover(value)}
                      onMouseLeave={() => setHover(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        size={26}
                        className={
                          value <= (hover || form.rating)
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-300"
                        }
                      />
                    </button>
                  );
                })}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Envoi en cours..." : "Envoyer mon avis"}
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Avis;