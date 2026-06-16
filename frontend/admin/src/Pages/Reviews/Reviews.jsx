import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Eye,
  LayoutDashboard,
  Pencil,
  Search,
  Trash2,
  EyeOff,
  Eye as EyeOn,
  Loader2,
  Star,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import toast from "react-hot-toast";
import {
  fetchAllReviews,
  updateReview,
  deleteReview,
  toggleVisibility,
  toggleStatus,
} from "../../services/api/reviewsApi";

function formatDate(isoDate) {
  try {
    return new Date(isoDate).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return isoDate;
  }
}

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ total: 0, totalPages: 1, limit: 10 });
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [saving, setSaving] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
      setPage(1);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const loadReviews = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetchAllReviews({ page, limit: 10, status: "all" });
      setReviews(response.data || []);
      if (response.pagination) setPagination(response.pagination);
    } catch {
      toast.error("Erreur lors du chargement des avis.");
      setReviews([]);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    loadReviews();
  }, [loadReviews]);

  const stats = useMemo(() => {
    const total = reviews.length;
    const active = reviews.filter((r) => r.status === "active").length;
    const visible = reviews.filter((r) => r.isVisible).length;
    return { total, active, visible };
  }, [reviews]);

  const filteredReviews = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return reviews;
    return reviews.filter(
      (r) =>
        r.name?.toLowerCase().includes(q) ||
        r.comment?.toLowerCase().includes(q)
    );
  }, [reviews, searchQuery]);

  async function handleDelete(id) {
    try {
      await deleteReview(id);
      toast.success("Avis supprimé avec succès !");
      await loadReviews();
    } catch {
      toast.error("Erreur lors de la suppression.");
    }
  }

  async function handleToggleVisibility(id) {
    try {
      await toggleVisibility(id);
      toast.success("Visibilité modifiée !");
      await loadReviews();
    } catch {
      toast.error("Erreur lors du changement de visibilité.");
    }
  }

  async function handleToggleStatus(id) {
    try {
      await toggleStatus(id);
      toast.success("Statut modifié !");
      await loadReviews();
    } catch {
      toast.error("Erreur lors du changement de statut.");
    }
  }

  async function handleUpdate(updatedData) {
    if (!selectedReview) return;
    try {
      setSaving(true);
      await updateReview(selectedReview._id, updatedData);
      toast.success("Avis mis à jour avec succès !");
      setIsEditOpen(false);
      setSelectedReview(null);
      await loadReviews();
    } catch {
      toast.error("Erreur lors de la mise à jour.");
    } finally {
      setSaving(false);
    }
  }

  const pageNumbers = useMemo(() => {
    const pages = [];
    const total = pagination.totalPages || 1;
    const current = page;
    let start = Math.max(1, current - 2);
    const end = Math.min(total, start + 4);
    if (end - start < 4) start = Math.max(1, end - 4);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  }, [page, pagination.totalPages]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}
      />
    ));
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-sky-500/15 to-violet-600/15 flex items-center justify-center border border-violet-100">
              <LayoutDashboard className="w-5 h-5 text-violet-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-violet-700 m-6">
                TRIOVA MEDIA -{" "}
                <span className="text-sky-500">Avis Clients</span>
              </h1>
              <p className="text-md text-gray-600 m-6">
                Gérez les avis et témoignages de vos clients.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="Rechercher un avis..."
              className="pl-10 pr-4 h-11 w-[260px] sm:w-[320px] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-around gap-6 mb-12">
        <div className="w-72 group relative overflow-hidden rounded-2xl bg-white p-6 border border-slate-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-sky-500 to-violet-600 transition-all duration-500 group-hover:w-full" />
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Total Avis</p>
              <h2 className="mt-2 text-3xl font-bold bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
                {pagination.total}
              </h2>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-sky-500 shadow-lg">
              <MessageSquare className="h-7 w-7 text-white" />
            </div>
          </div>
        </div>

        <div className="w-72 group relative overflow-hidden rounded-2xl bg-white p-6 border border-slate-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-sky-500 to-violet-600 transition-all duration-500 group-hover:w-full" />
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Actifs</p>
              <h2 className="mt-2 text-3xl font-bold text-sky-600">{stats.active}</h2>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 shadow-lg">
              <EyeOn className="h-7 w-7 text-white" />
            </div>
          </div>
        </div>

        <div className="w-72 group relative overflow-hidden rounded-2xl bg-white p-6 border border-slate-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-sky-500 to-violet-600 transition-all duration-500 group-hover:w-full" />
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Affichés</p>
              <h2 className="mt-2 text-3xl font-bold text-violet-600">{stats.visible}</h2>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 to-purple-500 shadow-lg">
              <Eye className="h-7 w-7 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-center p-12">
            <Loader2 className="w-8 h-8 text-sky-500 animate-spin" />
            <span className="ml-3 text-gray-600">Chargement des avis...</span>
          </div>
        </div>
      ) : (
        <>
          {/* Table */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mt-12">
            <div className="overflow-x-auto">
              <table className="min-w-[900px] w-full">
                <thead className="bg-violet-300">
                  <tr>
                    <th className="p-4 text-left font-semibold text-gray-700">Client</th>
                    <th className="p-4 text-left font-semibold text-gray-700">Note</th>
                    <th className="p-4 text-left font-semibold text-gray-700">Avis</th>
                    <th className="p-4 text-left font-semibold text-gray-700">Date</th>
                    <th className="p-4 text-left font-semibold text-gray-700">Statut</th>
                    <th className="p-4 text-left font-semibold text-gray-700">Visibilité</th>
                    <th className="p-4 text-right font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredReviews.length === 0 ? (
                    <tr>
                      <td className="p-8 text-center text-gray-600" colSpan={7}>
                        Aucun avis trouvé.
                      </td>
                    </tr>
                  ) : (
                    filteredReviews.map((review) => (
                      <tr
                        key={review._id}
                        className="border-t border-gray-100 hover:bg-violet-50 transition"
                      >
                        <td className="p-4">
                          <div>
                            <p className="font-semibold text-gray-800">{review.name}</p>
                            {review.role && (
                              <p className="text-xs text-gray-500">{review.role}</p>
                            )}
                            {review.company && (
                              <p className="text-xs text-gray-400">{review.company}</p>
                            )}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-0.5">
                            {renderStars(review.rating)}
                          </div>
                        </td>
                        <td className="p-4 text-gray-600 max-w-xs truncate">
                          {review.comment}
                        </td>
                        <td className="p-4 text-gray-700 whitespace-nowrap">
                          {formatDate(review.createdAt)}
                        </td>
                        <td className="p-4">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm border cursor-pointer ${
                              review.status === "active"
                                ? "bg-sky-50 text-sky-700 border-sky-200"
                                : "bg-gray-100 text-gray-600 border-gray-200"
                            }`}
                            onClick={() => handleToggleStatus(review._id)}
                            title="Cliquer pour changer le statut"
                          >
                            {review.status === "active" ? "Actif" : "Inactif"}
                          </span>
                        </td>
                        <td className="p-4">
                          <button
                            onClick={() => handleToggleVisibility(review._id)}
                            className={`p-2 rounded-lg transition ${
                              review.isVisible
                                ? "bg-green-50 text-green-600 hover:bg-green-100"
                                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                            }`}
                            title={review.isVisible ? "Masquer" : "Afficher"}
                          >
                            {review.isVisible ? <EyeOn size={18} /> : <EyeOff size={18} />}
                          </button>
                        </td>
                        <td className="p-4">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => {
                                setSelectedReview(review);
                                setIsEditOpen(true);
                              }}
                              className="p-2 rounded-lg bg-violet-50 text-violet-700 hover:bg-violet-100 transition"
                              title="Modifier"
                            >
                              <Pencil size={18} />
                            </button>
                            <button
                              onClick={() => {
                                if (window.confirm("Supprimer cet avis ?")) {
                                  handleDelete(review._id);
                                }
                              }}
                              className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition"
                              title="Supprimer"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  Page {page} sur {pagination.totalPages} ({pagination.total} avis)
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
                    onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))}
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

      {/* Edit Modal */}
      {isEditOpen && selectedReview && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6">
            <h2 className="text-xl font-bold text-violet-700 mb-4">Modifier l'avis</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                handleUpdate({
                  name: formData.get("name"),
                  role: formData.get("role"),
                  company: formData.get("company"),
                  comment: formData.get("comment"),
                  rating: parseInt(formData.get("rating")),
                });
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                <input
                  name="name"
                  defaultValue={selectedReview.name}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fonction</label>
                  <input
                    name="role"
                    defaultValue={selectedReview.role || ""}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Entreprise</label>
                  <input
                    name="company"
                    defaultValue={selectedReview.company || ""}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Commentaire</label>
                <textarea
                  name="comment"
                  defaultValue={selectedReview.comment}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none resize-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Note (1-5)</label>
                <input
                  name="rating"
                  type="number"
                  min="1"
                  max="5"
                  defaultValue={selectedReview.rating}
                  className="w-24 px-4 py-2 rounded-lg border border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none"
                  required
                />
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => { setIsEditOpen(false); setSelectedReview(null); }}
                  className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition flex items-center gap-2 disabled:opacity-60"
                >
                  {saving ? "Enregistrement..." : "Enregistrer"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Reviews;