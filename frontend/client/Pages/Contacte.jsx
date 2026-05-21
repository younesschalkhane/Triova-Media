import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

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
    <div>
 <section className="relative overflow-hidden bg-violet-300 py-32">
      
      {/* Background skew top */}
      

      {/* Background skew bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white skew-y-2 origin-bottom-left"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        
        {/* Small line */}
        <div className="w-10 h-[2px] bg-white mx-auto mb-8 opacity-80"></div>

        <h2 className="text-gray-600 text-2xl md:text-xl font-bold leading-relaxed">
         “Chez Troiva Media, nous croyons que chaque marque mérite une présence digitale forte et mémorable.
          À travers la création web, l’intelligence artificielle, le branding, 
          les campagnes publicitaires et le référencement SEO,
          nous mettons notre créativité et notre expertise au service des entreprises qui souhaitent évoluer,
          innover et se démarquer dans un monde en constante évolution.”
        </h2>

        <p className="text-gray-300 mt-10 text-lg tracking-wide">
         Troiva media
        </p>
      </div>
    </section>
    <div className="min-h-screen flex items-center justify-center p-6 relative">


      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-gray-100 p-10 rounded-3xl">

        {/* LEFT FORM */}
        <div className="bg-white rounded-3xl shadow-xl p-10 scale-105 h-200 flex flex-col justify-center   ">
          <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent ">
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
          <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent b mb-4">
            Formulaire de contact
          </h1>

          <p className="text-gray-600 mb-6">
            Veuillez remplir le formulaire ci-dessous et 
            <span className="font-bold"> notre équipe de Triova Marketing </span>
            vous répondra dans les plus brefs délais.
          </p>

          {/* INFO CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="bg-white p-4 rounded-xl shadow flex gap-3">
              <div className="w-12 h-10 bg-blue-200 rounded-full"></div>
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
                  +212 56642217
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow flex gap-3">
              <div className="w-12 h-10 bg-purple-200 rounded-full"></div>
              <div>
                <h3 className="font-semibold">Horaires d'ouverture</h3>
                <p className="text-sm text-gray-500">
                  Lundi au Vendredi : 9h30 – 17h30
                </p>
                <p className="text-sm text-gray-500">
                  Samedi : 9h30 – 13h00
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
          <div className="mt-6 flex items-center justify-around">

  {/* LEFT TEXT */}
  <p className="font-bold text-gray-900">
    Suivez-nous :
  </p>

  {/* RIGHT ICONS */}
  <div className="flex gap-4">

    <a
    href="https://www.facebook.com/"
     className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full cursor-pointer
    hover:scale-110 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/50 transition duration-300">
      <FaFacebookF />
   </a>

    <a 
    href="https://www.instagram.com/"
     className="w-10 h-10 bg-pink-500 text-white flex items-center justify-center rounded-full cursor-pointer
    hover:scale-110 hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/50 transition duration-300">
      <FaInstagram />
    </a>

    <a
    href="https://www.linkedin.com/"
     className="w-10 h-10 bg-blue-800 text-white flex items-center justify-center rounded-full cursor-pointer
    hover:scale-110 hover:bg-blue-900 hover:shadow-lg hover:shadow-blue-800/50 transition duration-300">
      <FaLinkedinIn />
    </a>

  </div>
</div>

        </div>
      </div>
    </div>
    </div>
  ); 
}