import React, { useEffect, useState } from "react";
import { FaUser, FaUsers, FaUserTie } from "react-icons/fa";
import { FileText, Search, CalendarDays, Send, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

function DevisList() {
  const [devis, setDevis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedClient, setSelectedClient] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [messageForm, setMessageForm] = useState({ subject: "", body: "" });
  const [sending, setSending] = useState(false);
  const [search, setSearch] = useState('');
  const iconVariants = {
    hover: { scale: 1.12, rotate: 10 },
    tap: { scale: 0.95, rotate: 0 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.98, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  const RenderIcon = ({ type }) => {
    const base = { size: 24, className: "text-white" };
    switch (type) {
      case "user":
        return (
          <motion.div whileHover="hover" whileTap="tap" variants={iconVariants}>
            <FaUser {...base} />
          </motion.div>
        );
      case "users":
        return (
          <motion.div whileHover="hover" whileTap="tap" variants={iconVariants}>
            <FaUsers {...base} />
          </motion.div>
        );
      case "userTie":
        return (
          <motion.div whileHover="hover" whileTap="tap" variants={iconVariants}>
            <FaUserTie {...base} />
          </motion.div>
        );
      default:
        return (
          <motion.div whileHover="hover" whileTap="tap" variants={iconVariants}>
            <FaUser {...base} />
          </motion.div>
        );
    }
  };

  const fakeData = [
    {
      _id: "1",
      name: "HASNAA EL ASBIHANI",
      email: "hasnaaelasbihani@email.com",
      company: "NextVision",
      city: "Casablanca",
      budget: "5000 - 10000 MAD",
      activity: "E-commerce",
      services: ["Web Dev", "SEO"],
      date: "2026-02-15",
      iconType: "user",
      color: "from-gray-400 to-gray-600",
    },
    {
      _id: "2",
      name: " Kaoutar Sabri",
      email: "sabri.kaoutar@email.com",
      company: "SaaS Morocco",
      city: "Rabat",
      budget: "10000 - 20000 MAD",
      activity: "Tech",
      services: ["AI", "Social Media"],
      date: "2026-03-20",
      iconType: "user",
      color: "from-violet-500 to-violet-600",
    },
    {
      _id: "3",
      name: "FATIH IDBRAHIM ",
      email: "fatiha_idbrahim@email.com",
      company: "Atlas Digital",
      city: "Marrakech",
      budget: "+20000 MAD",
      activity: "Tétouan",
      services: ["Branding", "Ads"],
      date: "2026-05-01",
      iconType: "user",
      color: "from-gray-500 to-violet-500",
    },


    {
      _id: "4",
      name: "Youness Chalkhane",
      email: "youness.sup@hotmail.com",
      company: "Hirafi Pro",
      city: "Marrakech",
      budget: "+80000 MAD",
      activity: "E-commerce",
      services: [ "Ads"],
      date: "2025-15-09",
      iconType: "user",
      color: "from-gray-500 to-violet-500",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setDevis(fakeData);
      setLoading(false);
    }, 600);
  }, []);

  const filtered = devis.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.email.toLowerCase().includes(search.toLowerCase())
  );

  // 📊 ANALYTICS
  const total = devis.length;
  const ecom = devis.filter(d => d.activity === "E-commerce").length;
  const tech = devis.filter(d => d.activity === "Tech").length;

  const getClientMessages = (clientId) => {
    try {
      return JSON.parse(localStorage.getItem(`devis_messages_${clientId}`) || "[]");
    } catch {
      return [];
    }
  };

  const openContactForm = (client) => {
    setMessageForm({
      subject: `Suivi devis — ${client.company}`,
      body: `Bonjour ${client.name},\n\nMerci pour votre demande de devis. `,
    });
    setContactOpen(true);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!selectedClient || !messageForm.body.trim()) {
      toast.error("Veuillez écrire un message.");
      return;
    }

    setSending(true);
    await new Promise((r) => setTimeout(r, 600));

    const newMessage = {
      id: Date.now(),
      to: selectedClient.email,
      subject: messageForm.subject.trim() || `Message pour ${selectedClient.name}`,
      body: messageForm.body.trim(),
      sentAt: new Date().toISOString(),
    };

    const existing = getClientMessages(selectedClient._id);
    localStorage.setItem(
      `devis_messages_${selectedClient._id}`,
      JSON.stringify([...existing, newMessage])
    );

    setSending(false);
    setContactOpen(false);
    toast.success(`Message envoyé à ${selectedClient.name}`);
  };

  // 📅 GET CURRENT DATE
  const getFormattedDate = () => {
    const today = new Date();
    return today.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-4 sm:p-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <header className="mb-8 rounded-2xl border border-gray-200/80 bg-white/90 backdrop-blur-sm shadow-sm">
          <div className="flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-700 to-violet-600 shadow-md shadow-violet-200/50">
                <FileText className="h-5 w-5 text-white" strokeWidth={2} />
              </div>
              <div>
                <h1 className="text-xl font-semibold tracking-tight text-slate-800 sm:text-2xl">
                  Devis <span className="text-violet-600">Manager</span>
                </h1>
                <div className="mt-0.5 flex items-center gap-1.5 text-xs text-slate-500 sm:text-sm">
                  <CalendarDays className="h-3.5 w-3.5 text-slate-400" />
                  <span>{getFormattedDate()}</span>
                </div>
              </div>
            </div>

            <div className="relative w-full sm:w-80">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                className="w-full rounded-xl border border-gray-200 bg-gray-50/80 py-2.5 pl-10 pr-4 text-sm text-slate-700 placeholder:text-slate-400 transition focus:border-violet-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                placeholder="Rechercher un client..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

          </div>
        </header>

        {/* KPI CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-6">

          <div className="bg-white rounded-2xl shadow p-4 border-t-4 border-violet-600 hover:shadow-lg transition">
            <p className="text-xs text-gray-500 font-semibold">📊 Total Clients</p>
            <h2 className="text-3xl font-bold mt-2">{total}</h2>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow p-4 border-t-4 border-violet-600 hover:shadow-lg transition">
            <p className="text-xs text-gray-600 font-semibold">🛒 E-commerce</p>
            <h2 className="text-3xl font-bold text-violet-600 mt-2">{ecom}</h2>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow p-4 border-t-4 border-violet-600 hover:shadow-lg transition">
            <p className="text-xs text-gray-600 font-semibold">💻 Tech Clients</p>
            <h2 className="text-3xl font-bold text-violet-600 mt-2">{tech}</h2>
          </div>

        </div>

        {/* CONTENT */}
        {loading ? (
          <div className="text-center text-gray-500 animate-pulse">
            Loading analytics...
          </div>
        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

            {/* CLIENT LIST */}
            <div className="lg:col-span-2 space-y-4">

              {filtered.map((item) => (
                <div
                key={item._id}
                onClick={() => setSelectedClient(item)}
                className="bg-white/80 backdrop-blur-xl p-5 rounded-3xl shadow hover:shadow-xl transition border-l-4 border-blue-600 cursor-pointer"
>

                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <div className={`bg-gradient-to-br ${item.color} text-white p-3 rounded-xl flex items-center justify-center w-12 h-12 shadow-lg`}>
                        <RenderIcon type={item.iconType} />
                      </div>
                      <div>
                        <h2 className="font-bold text-lg">{item.name}</h2>
                        <p className="text-sm text-gray-500">{item.email}</p>
                        <p className="text-xs text-gray-400 mt-1">📅 {new Date(item.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                      </div>
                    </div>

                    <span className="text-xs bg-black text-white px-3 py-1 rounded-full">
                      {item.activity}
                    </span>
                  </div>

                  <div className="mt-3 text-sm text-gray-600 grid grid-cols-2 gap-1">
                    <p> {item.company}</p>
                    <p> {item.city}</p>
                    <p> {item.budget}</p>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.services.map((s, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-900 text-white px-2 py-1 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                </div>
              ))}

            </div>

            {/* SIDE PANEL (PROFILE INSIGHT / SELECTED CLIENT) */}
            <div className={`rounded-3xl shadow p-5 h-fit ${selectedClient ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white' : 'bg-white'}`}>
              {selectedClient ? (
                <>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className={`bg-gradient-to-br ${selectedClient.color} text-white p-3 rounded-xl flex items-center justify-center w-16 h-16 shadow-lg`}>
                        <RenderIcon type={selectedClient.iconType} />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">{selectedClient.name}</h3>
                        <p className="text-sm">{selectedClient.email}</p>
                        <p className="text-xs">📅 {new Date(selectedClient.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                      </div>
                    </div>
                    <button onClick={() => setSelectedClient(null)} className="text-sm px-3 py-1 rounded-lg hover:bg-white/20">Close</button>
                  </div>

                  <div className="mt-4 text-sm text-gray-700 space-y-2">
                    <div>🏢 <strong>Company:</strong> {selectedClient.company}</div>
                    <div>📍 <strong>City:</strong> {selectedClient.city}</div>
                    <div>💰 <strong>Budget:</strong> {selectedClient.budget}</div>
                    <div className="flex items-center gap-2"> <strong>Activity:</strong> <span className="inline-block bg-black text-white px-2 py-1 rounded-full text-xs">{selectedClient.activity}</span></div>

                    <div>
                      <p className="mt-2 text-sm font-semibold">Services:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {selectedClient.services.map((s, i) => (
                          <span key={i} className="text-xs bg-gray-900 text-white px-2 py-1 rounded-full">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={() => openContactForm(selectedClient)}
                      className="w-full bg-white/20 text-white py-2 rounded-xl hover:bg-white/30 transition"
                    >
                      Contact Client
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="font-bold text-lg mb-3"> Insights</h3>

                  <p className="text-sm text-gray-600 mb-2">Most active sector:</p>
                  <div className="bg-gray-100 p-3 rounded-xl mb-3">E-commerce / Tech </div>

                  <p className="text-sm text-gray-600 mb-2">Best clients:</p>
                  <div className="text-sm space-y-2">
                    <div className="p-2 bg-green-50 rounded-lg"> High budget leads</div>
                    <div className="p-2 bg-blue-50 rounded-lg"> Fast decision clients</div>
                    <div className="p-2 bg-purple-50 rounded-lg"> Growth companies</div>
                  </div>
                </>
              )}
            </div>

          </div>
        )}

      </div>
    
      {/* Selected client modal (blocks) */}
      {selectedClient && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedClient(null)}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-xl w-11/12 md:w-3/4 lg:w-2/3 p-6"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <div className={`bg-gradient-to-br ${selectedClient.color} text-white p-3 rounded-xl flex items-center justify-center w-16 h-16 shadow-lg`}>
                  <RenderIcon type={selectedClient.iconType} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{selectedClient.name}</h2>
                  <p className="text-sm text-gray-500">{selectedClient.email}</p>
                </div>
              </div>
              <button onClick={() => setSelectedClient(null)} className="text-sm text-gray-600 px-3 py-1 rounded-lg">Close</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">Company</p>
                <p className="font-semibold mt-1">{selectedClient.company}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">City</p>
                <p className="font-semibold mt-1">{selectedClient.city}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">Budget</p>
                <p className="font-semibold mt-1">{selectedClient.budget}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">Activity</p>
                <p className="font-semibold mt-1">{selectedClient.activity}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg sm:col-span-2">
                <p className="text-xs text-gray-500">Services</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedClient.services.map((s, i) => (
                    <span key={i} className="text-xs bg-gray-900 text-white px-2 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => openContactForm(selectedClient)}
                className="px-4 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition"
              >
                Contact
              </button>
              <button onClick={() => setSelectedClient(null)} className="px-4 py-2 rounded-lg border hover:bg-gray-50 transition">Close</button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Contact message modal */}
      <AnimatePresence>
        {contactOpen && selectedClient && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !sending && setContactOpen(false)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100">
                    <Mail className="h-5 w-5 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Envoyer un message</h3>
                    <p className="text-xs text-slate-500">{selectedClient.name} · {selectedClient.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => !sending && setContactOpen(false)}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-gray-100 hover:text-slate-600 transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSendMessage} className="px-6 py-5 space-y-4">
                <div>
                  <label className="text-xs font-medium text-slate-500">Objet</label>
                  <input
                    type="text"
                    value={messageForm.subject}
                    onChange={(e) => setMessageForm({ ...messageForm, subject: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                    placeholder="Objet du message"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-500">Message</label>
                  <textarea
                    rows={6}
                    value={messageForm.body}
                    onChange={(e) => setMessageForm({ ...messageForm, body: e.target.value })}
                    className="mt-1 w-full resize-none rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                    placeholder="Écrivez votre message au client..."
                    required
                  />
                </div>

                {getClientMessages(selectedClient._id).length > 0 && (
                  <p className="text-xs text-slate-400">
                    {getClientMessages(selectedClient._id).length} message(s) déjà envoyé(s) à ce client
                  </p>
                )}

                <div className="flex gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={sending}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-violet-600 py-2.5 text-sm font-medium text-white hover:bg-violet-700 disabled:opacity-60 transition"
                  >
                    <Send className="h-4 w-4" />
                    {sending ? "Envoi..." : "Envoyer"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactOpen(false)}
                    disabled={sending}
                    className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm hover:bg-gray-50 disabled:opacity-60 transition"
                  >
                    Annuler
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default DevisList;