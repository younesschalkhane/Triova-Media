import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Eye,
  LayoutDashboard,
  Search,
  Trash2,
  Users,
  Activity,
  Clock,
  Loader2,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  Calendar,
  MessageSquare,
  PackageCheck,
} from "lucide-react";
import toast from "react-hot-toast";
import {
  fetchServiceRequests,
  deleteServiceRequest,
  updateServiceRequest,
} from "../../services/api/serviceRequestApi";

function formatDate(isoDate) {
  try {
    return new Date(isoDate).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return isoDate;
  }
}

const statusStyles = {
  Nouveau: "bg-sky-50 text-sky-700 border-sky-200",
  "En cours": "bg-yellow-50 text-yellow-700 border-yellow-200",
  Terminé: "bg-green-50 text-green-700 border-green-200",
  Annulé: "bg-red-50 text-red-700 border-red-200",
};

function DétailsClient() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({
    total: 0,
    totalPages: 1,
    limit: 10,
  });
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [saving, setSaving] = useState(false);

  // Debounced search value
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
      setPage(1);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const loadRequests = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchServiceRequests({
        page,
        limit: 10,
        search: debouncedSearch,
      });
      // If response is an array (no pagination from backend)
      if (Array.isArray(data)) {
        setRequests(data);
        setPagination({ total: data.length, totalPages: 1, limit: 10 });
      } else {
        setRequests(data.data || []);
        if (data.pagination) {
          setPagination(data.pagination);
        }
      }
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        "Erreur lors du chargement des demandes.";
      toast.error(message);
      setRequests([]);
    } finally {
      setLoading(false);
    }
  }, [page, debouncedSearch]);

  useEffect(() => {
    loadRequests();
  }, [loadRequests]);

  const stats = useMemo(() => {
    const total = requests.length;
    const nouveau = requests.filter((r) => r.status === "Nouveau").length;
    const enCours = requests.filter((r) => r.status === "En cours").length;
    const termine = requests.filter((r) => r.status === "Terminé").length;
    return { total, nouveau, enCours, termine };
  }, [requests]);

  const filteredRequests = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return requests;
    return requests.filter((r) => {
      return (
        r.fullName?.toLowerCase().includes(q) ||
        r.email?.toLowerCase().includes(q) ||
        r.phone?.toLowerCase().includes(q) ||
        r.services?.some((s) => s.toLowerCase().includes(q))
      );
    });
  }, [requests, searchQuery]);

  function openDetails(request) {
    setSelectedRequest(request);
    setIsDetailsOpen(true);
    setIsDeleteOpen(false);
  }

  function openDelete(request) {
    setSelectedRequest(request);
    setIsDeleteOpen(true);
    setIsDetailsOpen(false);
  }

  async function handleDelete(requestId) {
    try {
      await deleteServiceRequest(requestId);
      toast.success("Demande supprimée avec succès !");
      setIsDeleteOpen(false);
      setSelectedRequest(null);
      await loadRequests();
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        "Erreur lors de la suppression de la demande.";
      toast.error(message);
    }
  }

  async function handleStatusChange(requestId, newStatus) {
    try {
      setSaving(true);
      await updateServiceRequest(requestId, { status: newStatus });
      toast.success(`Statut mis à jour : ${newStatus}`);
      setIsDetailsOpen(false);
      setSelectedRequest(null);
      await loadRequests();
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        "Erreur lors de la mise à jour du statut.";
      toast.error(message);
    } finally {
      setSaving(false);
    }
  }

  // Pagination buttons
  const pageNumbers = useMemo(() => {
    const pages = [];
    const total = pagination.totalPages || 1;
    const current = page;

    let start = Math.max(1, current - 2);
    const end = Math.min(total, start + 4);

    if (end - start < 4) {
      start = Math.max(1, end - 4);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }, [page, pagination.totalPages]);

  const statusOptions = ["Nouveau", "En cours", "Terminé", "Annulé"];

  return (
    <div className="p-6">
      {/* Dashboard Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-sky-500/15 to-violet-600/15 flex items-center justify-center border border-violet-100">
              <LayoutDashboard className="w-5 h-5 text-violet-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-violet-700 m-6">
                TRIOVA MEDIA -{" "}
                <span className="text-sky-500">Demandes Clients</span>
              </h1>
              <p className="text-md text-gray-600 m-6">
                Gérez les demandes de services envoyées par vos clients depuis le
                formulaire public.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="Rechercher une demande..."
              className="pl-10 pr-4 h-11 w-[260px] sm:w-[320px] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Statistics Cards - Flexbox avec alignement à gauche */}
      <div className="flex flex-wrap justify-start gap-4 sm:gap-6 mb-8 sm:mb-12">
        {/* Total Requests */}
        <div className="w-100 group relative overflow-hidden rounded-2xl bg-white p-6 border border-slate-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-sky-500 to-violet-600 transition-all duration-500 group-hover:w-full" />
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Total Demandes
              </p>
              <h2 className="mt-2 text-3xl font-bold bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
                {pagination.total}
              </h2>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-sky-500 shadow-lg">
              <PackageCheck className="h-7 w-7 text-white" />
            </div>
          </div>
        </div>

        {/* Nouveau */}
        <div className="w-100 group relative overflow-hidden rounded-2xl bg-white p-6 border border-slate-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-sky-500 to-violet-600 transition-all duration-500 group-hover:w-full" />
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Nouveau</p>
              <h2 className="mt-2 text-3xl font-bold text-sky-600">
                {stats.nouveau}
              </h2>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 shadow-lg">
              <Users className="h-7 w-7 text-white" />
            </div>
          </div>
        </div>

        {/* En cours */}
        <div className="w-100 group relative overflow-hidden rounded-2xl bg-white p-6 border border-slate-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-sky-500 to-violet-600 transition-all duration-500 group-hover:w-full" />
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">En cours</p>
              <h2 className="mt-2 text-3xl font-bold text-yellow-600">
                {stats.enCours}
              </h2>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-400 shadow-lg">
              <Activity className="h-7 w-7 text-white" />
            </div>
          </div>
        </div>

        {/* Terminé */}
        <div className="w-100 group relative overflow-hidden rounded-2xl bg-white p-6 border border-slate-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-sky-500 to-violet-600 transition-all duration-500 group-hover:w-full" />
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Terminé</p>
              <h2 className="mt-2 text-3xl font-bold text-green-600">
                {stats.termine}
              </h2>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-green-400 shadow-lg">
              <Clock className="h-7 w-7 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-center p-12">
            <Loader2 className="w-8 h-8 text-sky-500 animate-spin" />
            <span className="ml-3 text-gray-600">
              Chargement des demandes...
            </span>
          </div>
        </div>
      ) : (
        <>
          {/* Responsive Table */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mt-24">
            <div className="overflow-x-auto">
              <table className="min-w-[1200px] w-full">
                <thead className="bg-violet-300">
                  <tr>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Nom
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Email
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Téléphone
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Service
                    </th>
                    {/* <th className="p-4 text-left font-semibold text-gray-700">
                      Message
                    </th> */}
                    {/* <th className="p-4 text-left font-semibold text-gray-700">
                      Date
                    </th> */}
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Statut
                    </th>
                    <th className="p-4 text-right font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredRequests.length === 0 ? (
                    <tr>
                      <td
                        className="p-8 text-center text-gray-600"
                        colSpan={8}
                      >
                        Aucune demande trouvée.
                      </td>
                    </tr>
                  ) : (
                    filteredRequests.map((request) => {
                      const statusBadge =
                        statusStyles[request.status] ||
                        "bg-gray-100 text-gray-600 border-gray-200";

                      return (
                        <tr
                          key={request._id}
                          className="border-t border-gray-100 hover:bg-violet-100 transition"
                        >
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 flex items-center justify-center text-white font-semibold text-sm">
                                {request.fullName?.charAt(0) || "?"}
                              </div>
                              <span className="font-semibold text-gray-800">
                                {request.fullName}
                              </span>
                            </div>
                          </td>

                          <td className="p-4 text-gray-600">
                            <a
                              href={`mailto:${request.email}`}
                              className="hover:text-sky-600 transition flex items-center gap-1"
                            >
                              <Mail className="w-3.5 h-3.5 inline" />
                              {request.email}
                            </a>
                          </td>

                          <td className="p-4 text-gray-600">
                            <a
                              href={`tel:${request.phone}`}
                              className="hover:text-sky-600 transition flex items-center gap-1"
                            >
                              <Phone className="w-3.5 h-3.5 inline" />
                              {request.phone}
                            </a>
                          </td>

                          <td className="p-4">
                            <div className="flex flex-wrap gap-1">
                              {request.services?.map((s, i) => (
                                <span
                                  key={i}
                                  className="inline-block px-2 py-0.5 text-xs rounded-full bg-sky-50 text-sky-700 border border-sky-200"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          </td>

                          {/* <td className="p-4 text-gray-600 max-w-[200px]">
                            <p className="truncate">
                              {request.description || "—"}
                            </p>
                          </td> */}

                          {/* <td className="p-4 text-gray-700 text-sm">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-gray-400" />
                              {formatDate(request.createdAt)}
                            </div>
                          </td> */}

                          <td className="p-4">
                            <span
                              className={`inline-flex items-center px-3 py-1 rounded-full text-sm border ${statusBadge}`}
                            >
                              {request.status || "Nouveau"}
                            </span>
                          </td>

                          <td className="p-4">
                            <div className="flex justify-end gap-2">
                              <button
                                onClick={() => openDetails(request)}
                                className="p-2 rounded-lg bg-sky-50 text-sky-600 hover:bg-sky-100 transition flex items-center"
                                aria-label="Voir détails"
                                title="Voir détails"
                              >
                                <Eye size={18} />
                              </button>

                              <button
                                onClick={() => openDelete(request)}
                                className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition flex items-center"
                                aria-label="Supprimer"
                                title="Supprimer"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  Page {page} sur {pagination.totalPages} ({pagination.total}{" "}
                  demandes)
                </p>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page <= 1}
                    className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {pageNumbers.map((num) => (
                    <button
                      key={num}
                      onClick={() => setPage(num)}
                      className={`min-w-[36px] h-9 rounded-lg text-sm font-medium transition ${
                        num === page
                          ? "bg-violet-600 text-white"
                          : "border border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      {num}
                    </button>
                  ))}

                  <button
                    onClick={() =>
                      setPage((p) =>
                        Math.min(pagination.totalPages, p + 1)
                      )
                    }
                    disabled={page >= pagination.totalPages}
                    className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* View Details Modal */}
      {isDetailsOpen && selectedRequest ? (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 flex items-center justify-center text-white font-semibold text-lg">
                  {selectedRequest.fullName?.charAt(0) || "?"}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-violet-700">
                    {selectedRequest.fullName}
                  </h2>
                  <span
                    className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm border mt-1 ${
                      statusStyles[selectedRequest.status] ||
                      "bg-gray-100 text-gray-600 border-gray-200"
                    }`}
                  >
                    {selectedRequest.status || "Nouveau"}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsDetailsOpen(false);
                  setSelectedRequest(null);
                }}
                className="p-2 rounded-lg hover:bg-gray-100 transition"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                  <p className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                    <Mail className="w-4 h-4 text-sky-500" /> Email
                  </p>
                  <a
                    href={`mailto:${selectedRequest.email}`}
                    className="text-gray-600 hover:text-sky-600 break-all"
                  >
                    {selectedRequest.email}
                  </a>
                </div>
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                  <p className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                    <Phone className="w-4 h-4 text-sky-500" /> Téléphone
                  </p>
                  <a
                    href={`tel:${selectedRequest.phone}`}
                    className="text-gray-600 hover:text-sky-600"
                  >
                    {selectedRequest.phone}
                  </a>
                </div>
              </div>

              {/* Company */}
              {selectedRequest.company && (
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    Entreprise
                  </p>
                  <p className="text-gray-600">{selectedRequest.company}</p>
                </div>
              )}

              {/* Services */}
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Services demandés
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedRequest.services?.map((s, i) => (
                    <span
                      key={i}
                      className="inline-block px-3 py-1 text-sm rounded-full bg-sky-50 text-sky-700 border border-sky-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Budget & Deadline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedRequest.budget && (
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <p className="text-sm font-medium text-gray-700 mb-1">
                      Budget
                    </p>
                    <p className="text-gray-600">{selectedRequest.budget}</p>
                  </div>
                )}
                {selectedRequest.deadline && (
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <p className="text-sm font-medium text-gray-700 mb-1">
                      Délai
                    </p>
                    <p className="text-gray-600">
                      {selectedRequest.deadline}
                    </p>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <p className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                  <MessageSquare className="w-4 h-4 text-sky-500" /> Message
                </p>
                <p className="text-gray-600 whitespace-pre-wrap">
                  {selectedRequest.description}
                </p>
              </div>

              {/* Date */}
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <p className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-sky-500" /> Date de création
                </p>
                <p className="text-gray-600">
                  {formatDate(selectedRequest.createdAt)}
                </p>
              </div>

              {/* Status Update */}
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Modifier le statut
                </p>
                <div className="flex flex-wrap gap-2">
                  {statusOptions.map((status) => (
                    <button
                      key={status}
                      onClick={() =>
                        handleStatusChange(selectedRequest._id, status)
                      }
                      disabled={saving || selectedRequest.status === status}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition ${
                        selectedRequest.status === status
                          ? "bg-violet-600 text-white border-violet-600"
                          : "bg-white text-gray-700 border-gray-200 hover:bg-violet-50 hover:border-violet-300"
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => {
                  setIsDetailsOpen(false);
                  setSelectedRequest(null);
                }}
                className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                Fermer
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsDetailsOpen(false);
                  openDelete(selectedRequest);
                }}
                className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-2"
              >
                <Trash2 size={18} />
                Supprimer
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {/* Delete Confirmation Modal */}
      {isDeleteOpen && selectedRequest ? (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center">
                <Trash2 className="w-8 h-8 text-red-500" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">
                Confirmer la suppression
              </h2>
              <p className="text-gray-600 mt-2">
                Êtes-vous sûr de vouloir supprimer la demande de{" "}
                <strong>{selectedRequest.fullName}</strong> ? Cette action est
                irréversible.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsDeleteOpen(false);
                  setSelectedRequest(null);
                }}
                className="px-5 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                Annuler
              </button>
              <button
                type="button"
                onClick={() => handleDelete(selectedRequest._id)}
                className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-2"
              >
                <Trash2 size={18} />
                Supprimer
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default DétailsClient;