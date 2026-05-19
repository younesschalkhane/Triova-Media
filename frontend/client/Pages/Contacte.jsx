import { useState } from "react";

export default function Contacte() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message envoyé !");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-300 to-violet-100 flex items-center justify-center p-6 relative">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-gray-100 p-10 rounded-3xl">

        {/* LEFT FORM */}
        <div className="bg-white rounded-3xl shadow-xl p-10 scale-105 h-200 flex flex-col justify-center   ">
          <h2 className="text-2xl font-semibold mb-6 ">
            Laissez votre message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Nom *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  onChange={handleChange}
                  className="border p-3 rounded-lg w-full mt-1 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">E-mail *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Votre e-mail"
                  onChange={handleChange}
                  className="border p-3 rounded-lg w-full mt-1 focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Téléphone *</label>
              <input
                type="text"
                name="phone"
                placeholder="Téléphone"
                onChange={handleChange}
                className="border p-3 rounded-lg w-full mt-1 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Votre besoin</label>
              <textarea
                name="message"
                placeholder="Votre besoin"
                rows="5"
                onChange={handleChange}
                className="border p-3 rounded-lg w-full mt-1 focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition"
            >
              Envoyer un message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-violet-900 mb-4">
            Formulaire de contact
          </h1>

          <p className="text-gray-600 mb-6">
            Veuillez remplir le formulaire ci-dessous et notre équipe de
            <span className="font-semibold"> Triova Marketing </span>
            vous répondra dans les plus brefs délais.
          </p>

          {/* INFO CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="bg-white p-4 rounded-xl shadow flex gap-3">
              <div className="w-10 h-10 bg-blue-200 rounded-full"></div>
              <div>
                <h3 className="font-semibold"> Bureau</h3>
                <p className="text-sm text-gray-500"> Casablanca, Maroc</p>
                <p className="text-sm text-gray-500">
                    Triova Marketing,<br />
                    une agence digitale 100% en ligne
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow flex gap-3">
              <div className="w-10 h-10 bg-orange-200 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Téléphone</h3>
                <p className="text-sm text-gray-500">
                  +212 566422178
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow flex gap-3">
              <div className="w-10 h-10 bg-purple-200 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Horaires d'ouverture</h3>
                <p className="text-sm text-gray-500">
                  Lundi au Vendredi : 9h30 – 17h30
                </p>
                <p className="text-sm text-gray-500">
                  Samedi : 9h30 – 13h00
                </p>
                <p className="text-sm text-gray-500">
                  Dimanche : Fermé
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow flex gap-3">
              <div className="w-10 h-10 bg-green-200 rounded-full"></div>
              <div>
                <h3 className="font-semibold">E-mail</h3>
                <p className="text-sm text-gray-500">
                  contact@triovamedia.com
                </p>
              </div>
            </div>

          </div>

          {/* SOCIAL RIGHT */}
          <div className="absolute right-6 bottom-10 flex gap-3">
            <div className="mt-6">
            <p className="font-semibold mb-2">Suivez-nous :</p>
            </div>

            <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full cursor-pointer">
              f
            </div>
            <div className="w-12 h-12 bg-pink-500 text-white flex items-center justify-center rounded-full cursor-pointer">
              ig
            </div>
            <div className="w-12 h-12 bg-blue-800 text-white flex items-center justify-center rounded-full cursor-pointer">
              in
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}