import React, { useState, useEffect } from "react";
import { Star, Send, Quote, User } from "lucide-react";

const STORAGE_KEY = "triova_avis_clients";

const defaultAvis = [
  {
    id: 1,
    name: "Yassine El Amrani",
    role: "CEO - Startup E-commerce",
    rating: 5,
    message:
      "Triova Media a complètement transformé notre présence digitale. Une équipe créative, à l'écoute et très professionnelle.",
  },
  {
    id: 2,
    name: "Sara Bennani",
    role: "Fondatrice - Boutique Mode",
    rating: 5,
    message:
      "Des résultats au-delà de mes attentes ! Les campagnes Meta Ads ont boosté mes ventes en quelques semaines.",
  },
  {
    id: 3,
    name: "Mehdi Tazi",
    role: "Manager - Agence Immobilière",
    rating: 4,
    message:
      "Une vraie expertise en lead generation. Je recommande vivement Triova Media pour tout projet digital sérieux.",
  },
];

function Avis() {
  const [avis, setAvis] = useState(defaultAvis);
  const [form, setForm] = useState({ name: "", role: "", message: "", rating: 5 });
  const [hover, setHover] = useState(0);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setAvis(JSON.parse(saved));
    } catch {}
  }, []);

  const persist = (list) => {
    setAvis(list);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    const newAvis = {
      id: Date.now(),
      name: form.name.trim(),
      role: form.role.trim() || "Client",
      rating: form.rating,
      message: form.message.trim(),
    };
    persist([newAvis, ...avis]);
    setForm({ name: "", role: "", message: "", rating: 5 });
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
            Partagez votre expérience avec Triova Media et découvrez les
            témoignages de ceux qui nous ont fait confiance.
          </p>
        </div>

        {/* Grid avis */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {avis.map((a) => (
            <div
              key={a.id}
              className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Quote className="text-violet-200 mb-4" size={32} />
              <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
                "{a.message}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < a.rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-slate-200"
                    }
                  />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="p-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 text-white">
                  <User size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-violet-600 text-sm">
                    {a.name}
                  </h4>
                  <p className="text-xs text-gray-500">{a.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

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

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Votre nom"
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

            <textarea
              placeholder="Partagez votre expérience..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
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
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Envoyer mon avis
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
