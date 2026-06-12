import { useState } from "react";
import { Eye, Trash2, Search, Mail, Phone, User } from "lucide-react";

export default function ContactAdmin() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Ahmed Benali",
      email: "ahmed@gmail.com",
      phone: "+212600000001",
      message: "Je souhaite créer un site web professionnel.",
      date: "10/06/2026",
    },
    {
      id: 2,
      name: "Sara El Amrani",
      email: "sara@gmail.com",
      phone: "+212600000002",
      message: "J'ai besoin d'une stratégie marketing digitale.",
      date: "09/06/2026",
    },
    {
      id: 3,
      name: "Youssef Alaoui",
      email: "youssef@gmail.com",
      phone: "+212600000003",
      message: "Je voudrais lancer une campagne publicitaire.",
      date: "08/06/2026",
    },
  ]);

  const [search, setSearch] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);

  const deleteMessage = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  const filteredMessages = messages.filter(
    (msg) =>
      msg.name.toLowerCase().includes(search.toLowerCase()) ||
      msg.email.toLowerCase().includes(search.toLowerCase())
  );
return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-sky-50 p-8">

    {/* Header */}
    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10">
      <div>
        <h1 className="text-5xl font-bold text-slate-900">
          Messages de Contact
        </h1>

        <p className="text-slate-500 text-lg mt-2">
          Consultez et gérez les demandes reçues depuis le site.
        </p>
      </div>

      <div className="relative w-full lg:w-[420px]">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Rechercher un nom ou un email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-14 pl-12 pr-4 rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
      </div>
    </div>

    {/* Table Card */}
    <div className="bg-white rounded-[30px] overflow-hidden shadow-2xl border border-slate-100">

      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-600 px-8 py-6">
        <h2 className="text-2xl font-bold text-white">
          Liste des Messages
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">

          <thead>
            <tr className="bg-slate-50 text-violet-700">
              <th className="px-8 py-5 text-left font-bold">Nom</th>
              <th className="px-8 py-5 text-left font-bold">Email</th>
              <th className="px-8 py-5 text-left font-bold">Téléphone</th>
              <th className="px-8 py-5 text-left font-bold">Message</th>
              <th className="px-8 py-5 text-left font-bold">Date</th>
              <th className="px-8 py-5 text-center font-bold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredMessages.map((msg) => (
              <tr
                key={msg.id}
                className="
                  border-b border-slate-100
                  hover:bg-gradient-to-r
                  hover:from-sky-50
                  hover:via-violet-50
                  hover:to-white
                  transition-all duration-300
                "
              >
                {/* Nom */}
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">

                    <div
                      className="
                        w-14 h-14 rounded-full
                        bg-gradient-to-r
                        from-sky-500
                        to-violet-600
                        text-white
                        flex items-center
                        justify-center
                        font-bold
                        text-xl
                        shadow-lg
                      "
                    >
                      {msg.name.charAt(0)}
                    </div>

                    <span className="font-semibold text-slate-800">
                      {msg.name}
                    </span>

                  </div>
                </td>

                {/* Email */}
                <td className="px-8 py-6">
                  <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-sm inline-flex items-center gap-2">
                    <Mail size={16} className="text-violet-500" />
                    <span>{msg.email}</span>
                  </div>
                </td>

                {/* Phone */}
                <td className="px-8 py-6">
                  <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-sm inline-flex items-center gap-2">
                    <Phone size={16} className="text-violet-500" />
                    <span>{msg.phone}</span>
                  </div>
                </td>

                {/* Message */}
                <td className="px-8 py-6 max-w-xs">
                  <p className="truncate text-slate-600">
                    {msg.message}
                  </p>
                </td>

                {/* Date */}
                <td className="px-8 py-6">
                  <span className="px-4 py-2 rounded-xl bg-sky-100 text-sky-700 font-semibold">
                    {msg.date}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-8 py-6">
                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() => setSelectedMessage(msg)}
                      className="
                        w-12 h-12
                        rounded-2xl
                        bg-sky-100
                        text-sky-600
                        hover:bg-sky-500
                        hover:text-white
                        shadow-md
                        hover:shadow-xl
                        transition-all duration-300
                        flex items-center justify-center
                      "
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      onClick={() => deleteMessage(msg.id)}
                      className="
                        w-12 h-12
                        rounded-2xl
                        bg-red-100
                        text-red-500
                        hover:bg-red-500
                        hover:text-white
                        shadow-md
                        hover:shadow-xl
                        transition-all duration-300
                        flex items-center justify-center
                      "
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>

    {/* Modal */}
    {selectedMessage && (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

        <div className="bg-white rounded-[30px] p-8 w-full max-w-2xl shadow-2xl border border-slate-100">

          <h2 className="text-3xl font-bold text-violet-600 mb-8">
            Détails du message
          </h2>

          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <User size={20} className="text-violet-600" />
              <span>{selectedMessage.name}</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={20} className="text-violet-600" />
              <span>{selectedMessage.email}</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={20} className="text-violet-600" />
              <span>{selectedMessage.phone}</span>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border">
              {selectedMessage.message}
            </div>

          </div>

          <button
            onClick={() => setSelectedMessage(null)}
            className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold hover:opacity-90"
          >
            Fermer
          </button>

        </div>

      </div>
    )}

  </div>
);
}