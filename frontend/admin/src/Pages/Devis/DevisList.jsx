import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { FileText, Search, CalendarDays, X, Trash2, Pencil } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

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

function DevisList() {
  const [devis, setDevis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editStatus, setEditStatus] = useState("");

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

  const getFormattedDate = () => {
    return new Date().toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
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
            <p className="text-xs text-gray-500 font-semibold">📊 Total Devis</p>
            <h2 className="text-3xl font-bold mt-2">{total}</h2>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow p-4 border-t-4 border-violet-600 hover:shadow-lg transition">
            <p className="text-xs text-gray-600 font-semibold">🌐 Web / App</p>
            <h2 className="text-3xl font-bold text-violet-600 mt-2">{ecom}</h2>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow p-4 border-t-4 border-red-500 hover:shadow-lg transition">
            <p className="text-xs text-gray-600 font-semibold">🔥 Urgents</p>
            <h2 className="text-3xl font-bold text-red-500 mt-2">{urgent}</h2>
          </div>
        </div>

        {/* LOADING / ERROR */}
        {loading && (
          <div className="text-center text-gray-500 animate-pulse py-10">
            Chargement des devis...
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl px-6 py-4 mb-6">
            ⚠️ {error}
          </div>
        )}

        {!loading && !error && devis.length === 0 && (
          <div className="text-center text-gray-400 py-10">
            Aucune demande de devis reçue pour l'instant.
          </div>
        )}

        {/* CONTENT */}
        {!loading && !error && devis.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

            {/* CLIENT LIST */}
            <div className="lg:col-span-2 space-y-4">
              {filtered.map((item, idx) => (
                <div
                  key={item._id}
                  onClick={() => setSelectedClient(item)}
                  className="bg-white/80 backdrop-blur-xl p-5 rounded-3xl shadow hover:shadow-xl transition border-l-4 border-blue-600 cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <div className={`bg-gradient-to-br ${COLORS[idx % COLORS.length]} text-white p-3 rounded-xl flex items-center justify-center w-12 h-12 shadow-lg`}>
                        <FaUser size={20} className="text-white" />
                      </div>
                      <div>
                        <h2 className="font-bold text-lg">{item.fullName}</h2>
                        <p className="text-sm text-gray-500">{item.email}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          📅 {new Date(item.createdAt).toLocaleDateString("fr-FR", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>

                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusStyle(item.status)}`}>
                      {item.status}
                    </span>
                  </div>

                  <div className="mt-3 text-sm text-gray-600 grid grid-cols-2 gap-1">
                    {item.company && <p>🏢 {item.company}</p>}
                    {item.projectType && <p>📁 {item.projectType}</p>}
                    {item.budget && <p>💰 {item.budget}</p>}
                    {item.priority && <p>⚡ {item.priority}</p>}
                  </div>

                  {(item.requestedServices || []).length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.requestedServices.map((s, i) => (
                        <span key={i} className="text-xs bg-gray-900 text-white px-2 py-1 rounded-full">
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
                          className="border rounded-lg px-2 py-1 text-sm"
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
                          className="text-sm border px-2 py-1 rounded-lg"
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
                          className="flex items-center gap-1 text-xs bg-violet-50 text-violet-700 px-3 py-1.5 rounded-lg hover:bg-violet-100 transition"
                        >
                          <Pencil size={14} /> Statut
                        </button>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="flex items-center gap-1 text-xs bg-red-50 text-red-600 px-3 py-1.5 rounded-lg hover:bg-red-100 transition"
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
            <div className={`rounded-3xl shadow p-5 h-fit ${selectedClient ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white" : "bg-white"}`}>
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
                  </div>
                </>
              ) : (
                <>
                  <h3 className="font-bold text-lg mb-3">Insights</h3>
                  <p className="text-sm text-gray-600 mb-2">Cliquez sur un devis pour voir les détails.</p>
                  <div className="space-y-2 text-sm">
                    <div className="p-2 bg-green-50 rounded-lg">Total devis: {total}</div>
                    <div className="p-2 bg-blue-50 rounded-lg">Urgents: {urgent}</div>
                    <div className="p-2 bg-purple-50 rounded-lg">Web / App: {ecom}</div>
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
              className="bg-white rounded-2xl shadow-xl w-11/12 md:w-3/4 lg:w-2/3 p-6 max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold">{selectedClient.fullName}</h2>
                  <p className="text-sm text-gray-500">{selectedClient.email} · {selectedClient.phone}</p>
                </div>
                <button onClick={() => setSelectedClient(null)} className="text-sm text-gray-600 px-3 py-1 rounded-lg border hover:bg-gray-50">
                  Fermer
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedClient.company && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500">Entreprise</p>
                    <p className="font-semibold mt-1">{selectedClient.company}</p>
                  </div>
                )}
                {selectedClient.projectType && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500">Type de projet</p>
                    <p className="font-semibold mt-1">{selectedClient.projectType}</p>
                  </div>
                )}
                {selectedClient.budget && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500">Budget</p>
                    <p className="font-semibold mt-1">{selectedClient.budget}</p>
                  </div>
                )}
                {selectedClient.priority && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500">Priorité</p>
                    <p className="font-semibold mt-1">{selectedClient.priority}</p>
                  </div>
                )}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500">Statut</p>
                  <span className={`inline-block mt-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(selectedClient.status)}`}>
                    {selectedClient.status}
                  </span>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500">Date</p>
                  <p className="font-semibold mt-1">
                    {new Date(selectedClient.createdAt).toLocaleDateString("fr-FR")}
                  </p>
                </div>
                {selectedClient.description && (
                  <div className="p-4 bg-gray-50 rounded-lg sm:col-span-2">
                    <p className="text-xs text-gray-500">Description</p>
                    <p className="mt-1 text-sm text-gray-700">{selectedClient.description}</p>
                  </div>
                )}
                {(selectedClient.requestedServices || []).length > 0 && (
                  <div className="p-4 bg-gray-50 rounded-lg sm:col-span-2">
                    <p className="text-xs text-gray-500">Services demandés</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedClient.requestedServices.map((s, i) => (
                        <span key={i} className="text-xs bg-gray-900 text-white px-2 py-1 rounded-full">{s}</span>
                      ))}
                    </div>
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
                  onClick={() => handleDelete(selectedClient._id)}
                  className="px-4 py-2 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition flex items-center gap-2"
                >
                  <Trash2 size={16} /> Supprimer
                </button>
                <button
                  onClick={() => setSelectedClient(null)}
                  className="px-4 py-2 rounded-lg border hover:bg-gray-50 transition"
                >
                  Fermer
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
