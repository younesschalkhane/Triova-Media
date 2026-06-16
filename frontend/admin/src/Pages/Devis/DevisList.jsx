import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { FileText, Search, CalendarDays, X, Trash2, Pencil, Mail, Loader2, Globe, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { useTheme } from "../../context/ThemeContext";
import KPICard from "../../components/KPICard";

const API_URL = "http://localhost:5000";

const STATUS_OPTIONS = ["En attente", "En cours", "Accepté", "Refusé"];

const getStatusStyle = (status) => {
  switch (status) {
    case "En attente":
      return "bg-yellow-100 text-yellow-700";
    case "En cours":
      return "bg-sky-100 text-sky-700";
    case "Accepté":
      return "bg-green-100 text-green-700";
    case "Refusé":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const COLORS = [
  "from-gray-400 to-gray-600",
  "from-violet-500 to-violet-600",
  "from-gray-500 to-violet-500",
  "from-sky-500 to-blue-600",
  "from-pink-500 to-rose-500",
];

const modalVariants = {
  hidden: { opacity: 0, scale: 0.98, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

/**
 * Page Demandes de devis - Admin.
 * Design harmonisé avec le Dashboard.
 * Conserve exactement la même logique métier et fonctionnalités.
 */
function DevisList() {
  const [devis, setDevis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editStatus, setEditStatus] = useState("");
  const { isDark } = useTheme();

  // Reply modal state
  const [replyModal, setReplyModal] = useState(null);
  const [replySubject, setReplySubject] = useState("");
  const [replyMessage, setReplyMessage] = useState("");
  const [replySending, setReplySending] = useState(false);

  const fetchDevis = async () => {
    try {
      setLoading(true);
      setError("");
      const { data } = await axios.get(`${API_URL}/api/devis`);
      setDevis(data);
    } catch (err) {
      setError("Impossible de charger les devis. Vérifiez que le serveur est démarré.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevis();
  }, []);

  const filtered = devis.filter(
    (d) =>
      (d.fullName || "").toLowerCase().includes(search.toLowerCase()) ||
      (d.email || "").toLowerCase().includes(search.toLowerCase())
  );

  const total = devis.length;
  const ecom = devis.filter((d) => d.projectType === "Site Web" || d.projectType === "Application Web").length;
  const urgent = devis.filter((d) => d.priority === "Urgent").length;

  const handleUpdateStatus = async (id) => {
    try {
      const { data } = await axios.put(`${API_URL}/api/devis/${id}`, {
        status: editStatus,
      });
      toast.success("Statut mis à jour.");
      setDevis((prev) => prev.map((d) => (d._id === id ? data : d)));
      if (selectedClient?._id === id) {
        setSelectedClient(data);
      }
      setEditingId(null);
    } catch {
      toast.error("Erreur lors de la mise à jour.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer ce devis ?")) return;
    try {
      await axios.delete(`${API_URL}/api/devis/${id}`);
      toast.success("Devis supprimé.");
      setDevis((prev) => prev.filter((d) => d._id !== id));
      if (selectedClient?._id === id) setSelectedClient(null);
    } catch {
      toast.error("Erreur lors de la suppression.");
    }
  };

  const openReplyModal = (item) => {
    setReplyModal(item);
    setReplySubject(`Réponse à votre demande de devis - ${item.projectType || "Projet"}`);
    setReplyMessage(`Bonjour ${item.fullName},\n\nMerci pour votre demande de devis concernant "${item.projectType || "votre projet"}".\n\nNous avons bien reçu votre demande et nous vous répondrons dans les plus brefs délais.\n\nCordialement,\nTRIOVA MEDIA`);
  };

  const handleReply = async () => {
    if (!replySubject.trim() || !replyMessage.trim()) {
      toast.error("Le sujet et le message sont requis.");
      return;
    }
    try {
      setReplySending(true);
      const { data } = await axios.post(`${API_URL}/api/devis/${replyModal._id}/reply`, {
        subject: replySubject,
        message: replyMessage,
      });
      toast.success("Réponse envoyée avec succès !");
      setDevis((prev) => prev.map((d) => (d._id === replyModal._id ? data : d)));
      if (selectedClient?._id === replyModal._id) {
        setSelectedClient(data);
      }
      setReplyModal(null);
      setReplySubject("");
      setReplyMessage("");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Erreur lors de l'envoi de la réponse.");
    } finally {
      setReplySending(false);
    }
  };

  const getFormattedDate = () => {
    return new Date().toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className={`min-h-screen p-4 sm:p-6 lg:p-8 ${isDark ? "bg-gray-950" : "bg-slate-50"}`}>
      <div className="w-full">

        {/* HEADER */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-md ${
              isDark ? "bg-violet-900/40 text-violet-400" : "bg-gradient-to-br from-sky-500/15 to-violet-600/15 border border-violet-100 text-violet-600"
            }`}>
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h1 className={`text-2xl sm:text-3xl font-bold text-violet-600 ${isDark ? "text-gray-100" : "text-slate-800"}`}>
                Devis <span className="text-sky-500">Manager</span>
              </h1>
              <div className={`mt-1 flex items-center gap-1.5 text-sm ${isDark ? "text-gray-400" : "text-slate-500"}`}>
                <CalendarDays className="h-3.5 w-3.5" />
                <span>{getFormattedDate()}</span>
              </div>
            </div>
          </div>

          <div className="relative w-full sm:w-80">
            <Search className={`pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 ${isDark ? "text-gray-500" : "text-slate-400"}`} />
            <input
              type="search"
              className={`w-full rounded-xl border py-2.5 pl-10 pr-4 text-sm transition focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                isDark
                  ? "bg-gray-800 border-gray-600 text-gray-200 placeholder-gray-500 focus:border-violet-500"
                  : "bg-gray-50/80 border-gray-200 text-slate-700 placeholder-slate-400 focus:border-transparent focus:bg-white"
              }`}
              placeholder="Rechercher un client..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <KPICard title="📊 Total Devis" value={total} icon={FileText} color="from-violet-600 to-sky-500" />
          <KPICard title="🌐 Web / App" value={ecom} icon={Globe} color="from-sky-500 to-cyan-500" />
          <KPICard title="🔥 Urgents" value={urgent} icon={Flame} color="from-violet-600 to-pink-500" />
        </div>

        {/* LOADING / ERROR */}
        {loading && (
          <div className={`text-center animate-pulse py-10 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Chargement des devis...
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl px-6 py-4 mb-6">
            ⚠️ {error}
          </div>
        )}

        {!loading && !error && devis.length === 0 && (
          <div className={`text-center py-10 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
            Aucune demande de devis reçue pour l'instant.
          </div>
        )}

        {/* CONTENT */}
        {!loading && !error && devis.length > 0 && (
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 justify-start">

            {/* CLIENT LIST */}
            <div className="flex-[2] space-y-4">
              {filtered.map((item, idx) => (
                <div
                  key={item._id}
                  onClick={() => setSelectedClient(item)}
                  className={`p-5 rounded-2xl transition-all duration-300 border-l-4 border-violet-600 cursor-pointer ${
                    isDark
                      ? "bg-gray-800 border border-gray-700 hover:shadow-xl hover:border-l-violet-500"
                      : "bg-white border border-slate-100 shadow-md hover:shadow-xl"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <div className={`bg-gradient-to-br ${COLORS[idx % COLORS.length]} text-white p-3 rounded-xl flex items-center justify-center w-12 h-12 shadow-lg`}>
                        <FaUser size={20} className="text-white" />
                      </div>
                      <div>
                        <h2 className={`font-bold text-lg ${isDark ? "text-gray-100" : ""}`}>{item.fullName}</h2>
                        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>{item.email}</p>
                        <p className={`text-xs mt-1 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                          📅 {new Date(item.createdAt).toLocaleDateString("fr-FR", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Response badge */}
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        item.responded
                          ? "bg-green-50 text-green-700"
                          : "bg-yellow-50 text-yellow-700"
                      }`}>
                        {item.responded ? "🟢 Répondu" : "🟡 Non répondu"}
                      </span>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusStyle(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <div className={`mt-3 text-sm grid grid-cols-2 gap-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {item.company && <p>🏢 {item.company}</p>}
                    {item.projectType && <p>📁 {item.projectType}</p>}
                    {item.budget && <p>💰 {item.budget}</p>}
                    {item.priority && <p>⚡ {item.priority}</p>}
                  </div>

                  {(item.requestedServices || []).length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.requestedServices.map((s, i) => (
                        <span key={i} className={`text-xs px-2 py-1 rounded-full ${
                          isDark ? "bg-gray-700 text-gray-300" : "bg-violet-50 text-violet-700"
                        }`}>
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="mt-4 flex gap-2" onClick={(e) => e.stopPropagation()}>
                    {editingId === item._id ? (
                      <div className="flex items-center gap-2">
                        <select
                          value={editStatus}
                          onChange={(e) => setEditStatus(e.target.value)}
                          className={`border rounded-lg px-2 py-1 text-sm ${
                            isDark ? "bg-gray-700 border-gray-600 text-gray-200" : ""
                          }`}
                        >
                          {STATUS_OPTIONS.map((s) => (
                            <option key={s}>{s}</option>
                          ))}
                        </select>
                        <button
                          onClick={() => handleUpdateStatus(item._id)}
                          className="text-sm bg-violet-600 text-white px-3 py-1 rounded-lg"
                        >
                          Sauvegarder
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className={`text-sm border px-2 py-1 rounded-lg ${
                            isDark ? "border-gray-600 text-gray-300" : ""
                          }`}
                        >
                          ✕
                        </button>
                      </div>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            setEditingId(item._id);
                            setEditStatus(item.status);
                          }}
                          className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg transition ${
                            isDark
                              ? "bg-violet-900/40 text-violet-300 hover:bg-violet-900/60"
                              : "bg-violet-50 text-violet-700 hover:bg-violet-100"
                          }`}
                        >
                          <Pencil size={14} /> Statut
                        </button>
                        <button
                          onClick={() => openReplyModal(item)}
                          className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg transition ${
                            isDark
                              ? "bg-sky-900/40 text-sky-300 hover:bg-sky-900/60"
                              : "bg-sky-50 text-sky-700 hover:bg-sky-100"
                          }`}
                        >
                          <Mail size={14} /> Répondre
                        </button>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="flex items-center gap-1 text-xs bg-violet-50 text-violet-700 px-3 py-1.5 rounded-lg hover:bg-violet-100 transition"
                        >
                          <Trash2 size={14} /> Supprimer
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* SIDE PANEL */}
            <div className={`flex-1 rounded-2xl p-5 h-fit ${
              selectedClient
                ? "bg-gradient-to-br from-violet-600 to-sky-500 text-white"
                : isDark ? "bg-gray-800 border border-gray-700" : "bg-white shadow-sm border border-slate-100"
            }`}>
              {selectedClient ? (
                <>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-xl">{selectedClient.fullName}</h3>
                      <p className="text-sm">{selectedClient.email}</p>
                      <p className="text-sm">{selectedClient.phone}</p>
                    </div>
                    <button onClick={() => setSelectedClient(null)} className="text-sm px-3 py-1 rounded-lg hover:bg-white/20">
                      <X size={16} />
                    </button>
                  </div>

                  <div className="mt-4 text-sm space-y-2">
                    {selectedClient.company && <div>🏢 <strong>Entreprise:</strong> {selectedClient.company}</div>}
                    {selectedClient.projectType && <div>📁 <strong>Projet:</strong> {selectedClient.projectType}</div>}
                    {selectedClient.budget && <div>💰 <strong>Budget:</strong> {selectedClient.budget}</div>}
                    {selectedClient.priority && <div>⚡ <strong>Priorité:</strong> {selectedClient.priority}</div>}
                    {selectedClient.objective && <div>🎯 <strong>Objectif:</strong> {selectedClient.objective}</div>}
                    {selectedClient.description && (
                      <div className="mt-2">
                        <strong>Description:</strong>
                        <p className="mt-1 text-sm opacity-90 line-clamp-3">{selectedClient.description}</p>
                      </div>
                    )}
                    {(selectedClient.requestedServices || []).length > 0 && (
                      <div className="mt-2">
                        <strong>Services:</strong>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {selectedClient.requestedServices.map((s, i) => (
                            <span key={i} className="text-xs bg-white/20 px-2 py-1 rounded-full">{s}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="mt-2">
                      <strong>Statut:</strong>{" "}
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusStyle(selectedClient.status)}`}>
                        {selectedClient.status}
                      </span>
                    </div>
                    <div className="mt-2">
                      <strong>Réponse:</strong>{" "}
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        selectedClient.responded
                          ? "bg-green-50 text-green-700"
                          : "bg-yellow-50 text-yellow-700"
                      }`}>
                        {selectedClient.responded ? "🟢 Répondu" : "🟡 Non répondu"}
                      </span>
                    </div>
                    {selectedClient.responded && selectedClient.responseDate && (
                      <div className="mt-2 p-2 bg-white/10 rounded-lg">
                        <p className="text-xs font-semibold">📋 Dernière réponse:</p>
                        <p className="text-xs mt-1">📅 {new Date(selectedClient.responseDate).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
                        {selectedClient.responseSubject && <p className="text-xs mt-1">📌 {selectedClient.responseSubject}</p>}
                        {selectedClient.responseMessage && <p className="text-xs mt-1 opacity-90 line-clamp-3">{selectedClient.responseMessage}</p>}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <h3 className={`font-bold text-lg mb-3 ${isDark ? "text-gray-100" : "text-slate-800"}`}>Insights</h3>
                  <p className={`text-sm mb-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Cliquez sur un devis pour voir les détails.</p>
                  <div className="space-y-2 text-sm">
                    <div className="p-2 bg-violet-50 rounded-lg">Total devis: {total}</div>
                    <div className="p-2 bg-sky-50 rounded-lg">Urgents: {urgent}</div>
                    <div className="p-2 bg-slate-100 rounded-lg">Web / App: {ecom}</div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedClient && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedClient(null)}
          >
            <motion.div
              className={`rounded-2xl shadow-xl w-11/12 md:w-3/4 lg:w-2/3 p-6 max-h-[90vh] overflow-y-auto ${
                isDark ? "bg-gray-800 border border-gray-700" : "bg-white"
              }`}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className={`text-2xl font-bold ${isDark ? "text-gray-100" : ""}`}>{selectedClient.fullName}</h2>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>{selectedClient.email} · {selectedClient.phone}</p>
                </div>
                <button onClick={() => setSelectedClient(null)} className={`text-sm px-3 py-1 rounded-lg border transition ${
                  isDark ? "text-gray-300 border-gray-600 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-50"
                }`}>
                  Fermer
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedClient.company && (
                  <div className={`p-4 rounded-lg ${isDark ? "bg-gray-900 border border-gray-700" : "bg-slate-50"}`}>
                    <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>Entreprise</p>
                    <p className={`font-semibold mt-1 ${isDark ? "text-gray-200" : ""}`}>{selectedClient.company}</p>
                  </div>
                )}
                {selectedClient.projectType && (
                  <div className={`p-4 rounded-lg ${isDark ? "bg-gray-900 border border-gray-700" : "bg-slate-50"}`}>
                    <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>Type de projet</p>
                    <p className={`font-semibold mt-1 ${isDark ? "text-gray-200" : ""}`}>{selectedClient.projectType}</p>
                  </div>
                )}
                {selectedClient.budget && (
                  <div className={`p-4 rounded-lg ${isDark ? "bg-gray-900 border border-gray-700" : "bg-slate-50"}`}>
                    <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>Budget</p>
                    <p className={`font-semibold mt-1 ${isDark ? "text-gray-200" : ""}`}>{selectedClient.budget}</p>
                  </div>
                )}
                {selectedClient.priority && (
                  <div className={`p-4 rounded-lg ${isDark ? "bg-gray-900 border border-gray-700" : "bg-slate-50"}`}>
                    <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>Priorité</p>
                    <p className={`font-semibold mt-1 ${isDark ? "text-gray-200" : ""}`}>{selectedClient.priority}</p>
                  </div>
                )}
                <div className={`p-4 rounded-lg ${isDark ? "bg-gray-900 border border-gray-700" : "bg-slate-50"}`}>
                  <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>Statut</p>
                  <span className={`inline-block mt-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(selectedClient.status)}`}>
                    {selectedClient.status}
                  </span>
                </div>
                <div className={`p-4 rounded-lg ${isDark ? "bg-gray-900 border border-gray-700" : "bg-slate-50"}`}>
                  <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>Date</p>
                  <p className={`font-semibold mt-1 ${isDark ? "text-gray-200" : ""}`}>
                    {new Date(selectedClient.createdAt).toLocaleDateString("fr-FR")}
                  </p>
                </div>
                {selectedClient.description && (
                  <div className={`p-4 rounded-lg sm:col-span-2 ${isDark ? "bg-gray-900 border border-gray-700" : "bg-slate-50"}`}>
                    <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>Description</p>
                    <p className={`mt-1 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>{selectedClient.description}</p>
                  </div>
                )}
                {(selectedClient.requestedServices || []).length > 0 && (
                  <div className={`p-4 rounded-lg sm:col-span-2 ${isDark ? "bg-gray-900 border border-gray-700" : "bg-slate-50"}`}>
                    <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>Services demandés</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedClient.requestedServices.map((s, i) => (
                        <span key={i} className={`text-xs px-2 py-1 rounded-full ${
                          isDark ? "bg-gray-700 text-gray-300" : "bg-violet-50 text-violet-700"
                        }`}>{s}</span>
                      ))}
                    </div>
                  </div>
                )}
                {/* Response info in modal */}
                {selectedClient.responded && selectedClient.responseDate && (
                  <div className={`p-4 rounded-lg sm:col-span-2 ${isDark ? "bg-gray-900 border border-gray-700" : "bg-slate-50"}`}>
                    <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>Dernière réponse</p>
                    <p className={`font-semibold mt-1 text-sm ${isDark ? "text-gray-200" : ""}`}>
                      📅 {new Date(selectedClient.responseDate).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                    </p>
                    {selectedClient.responseSubject && (
                      <p className={`mt-1 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>📌 {selectedClient.responseSubject}</p>
                    )}
                    {selectedClient.responseMessage && (
                      <p className={`mt-1 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>{selectedClient.responseMessage}</p>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => {
                    setEditingId(selectedClient._id);
                    setEditStatus(selectedClient.status);
                    setSelectedClient(null);
                  }}
                  className="px-4 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition flex items-center gap-2"
                >
                  <Pencil size={16} /> Modifier statut
                </button>
                <button
                  onClick={() => {
                    openReplyModal(selectedClient);
                    setSelectedClient(null);
                  }}
                  className="px-4 py-2 rounded-lg bg-sky-50 text-sky-700 hover:bg-sky-100 transition flex items-center gap-2"
                >
                  <Mail size={16} /> Répondre
                </button>
                <button
                  onClick={() => handleDelete(selectedClient._id)}
                  className="px-4 py-2 rounded-lg bg-violet-50 text-violet-700 hover:bg-violet-100 transition flex items-center gap-2"
                >
                  <Trash2 size={16} /> Supprimer
                </button>
                <button
                  onClick={() => setSelectedClient(null)}
                  className={`px-4 py-2 rounded-lg border transition ${
                    isDark ? "border-gray-600 text-gray-300 hover:bg-gray-700" : "hover:bg-gray-50"
                  }`}
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reply Modal */}
      <AnimatePresence>
        {replyModal && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !replySending && setReplyModal(null)}
          >
            <motion.div
              className={`rounded-2xl shadow-xl w-11/12 md:w-1/2 lg:w-2/5 p-6 max-h-[90vh] overflow-y-auto ${
                isDark ? "bg-gray-800 border border-gray-700" : "bg-white"
              }`}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className={`text-xl font-bold ${isDark ? "text-gray-100" : "text-slate-800"}`}>
                    <Mail size={20} className="inline mr-2 text-sky-500" />
                    Répondre au devis
                  </h2>
                  <p className={`text-sm mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                    De: {replyModal.fullName} ({replyModal.email})
                  </p>
                </div>
                <button
                  onClick={() => !replySending && setReplyModal(null)}
                  className={`text-sm px-3 py-1 rounded-lg border transition ${
                    isDark ? "text-gray-300 border-gray-600 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <X size={16} />
                </button>
              </div>

              <div className="space-y-4">
                {/* Email (readonly) */}
                <div>
                  <label className={`block text-sm font-medium mb-1 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    Email du client
                  </label>
                  <input
                    type="email"
                    value={replyModal.email}
                    readOnly
                    className={`w-full rounded-xl border px-4 py-2.5 text-sm ${
                      isDark
                        ? "bg-gray-900 border-gray-600 text-gray-400"
                        : "bg-slate-50 border-gray-200 text-gray-500"
                    }`}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className={`block text-sm font-medium mb-1 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    Sujet
                  </label>
                  <input
                    type="text"
                    value={replySubject}
                    onChange={(e) => setReplySubject(e.target.value)}
                    disabled={replySending}
                    className={`w-full rounded-xl border px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                      isDark
                        ? "bg-gray-900 border-gray-600 text-gray-200 placeholder-gray-500 focus:border-transparent"
                        : "bg-white border-gray-200 text-slate-700 placeholder-slate-400 focus:border-transparent"
                    }`}
                    placeholder="Sujet de la réponse..."
                  />
                </div>

                {/* Message */}
                <div>
                  <label className={`block text-sm font-medium mb-1 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    Message
                  </label>
                  <textarea
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    disabled={replySending}
                    rows={6}
                    className={`w-full rounded-xl border px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none ${
                      isDark
                        ? "bg-gray-900 border-gray-600 text-gray-200 placeholder-gray-500 focus:border-transparent"
                        : "bg-white border-gray-200 text-slate-700 placeholder-slate-400 focus:border-transparent"
                    }`}
                    placeholder="Votre message..."
                  />
                </div>
              </div>

              <div className="mt-6 flex gap-3 justify-end">
                <button
                  onClick={() => !replySending && setReplyModal(null)}
                  disabled={replySending}
                  className={`px-4 py-2 rounded-lg border transition ${
                    isDark ? "border-gray-600 text-gray-300 hover:bg-gray-700" : "hover:bg-gray-50"
                  }`}
                >
                  Annuler
                </button>
                <button
                  onClick={handleReply}
                  disabled={replySending}
                  className="px-4 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition flex items-center gap-2"
                >
                  {replySending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Mail size={16} />
                      Envoyer
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DevisList;