import React, { useMemo, useState, useEffect, useCallback } from "react";
import {
  Eye,
  LayoutDashboard,
  Pencil,
  Plus,
  Search,
  Trash2,
  PackageCheck,
  Activity,
  Clock,
  Loader2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import AddService from "./AddService";
import UpdateService from "./UpdateService";
import DeleteService from "./DeleteService";
import { serviceIcons, serviceIconOptions } from "./servicesData";
import {
  fetchServices,
  createService,
  updateService,
  deleteService,
} from "../../services/api/servicesApi";
import toast from "react-hot-toast";
import KPICard from "../../components/KPICard";

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

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({
    total: 0,
    totalPages: 1,
    limit: 10,
  });

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const [selectedService, setSelectedService] = useState(null);

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

  const loadServices = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetchServices({
        page,
        limit: 10,
        search: debouncedSearch,
        status: "all",
      });
      setServices(response.data || []);
      if (response.pagination) {
        setPagination(response.pagination);
      }
    } catch (error) {
      const message =
        error?.response?.data?.message || "Erreur lors du chargement des services.";
      toast.error(message);
      setServices([]);
    } finally {
      setLoading(false);
    }
  }, [page, debouncedSearch]);

  // Load services on mount and when page/search changes
  useEffect(() => {
    loadServices();
  }, [loadServices]);

  const stats = useMemo(() => {
    const total = services.length;
    const active = services.filter((s) => s.status === "active").length;
    const inactive = total - active;
    return { total, active, inactive };
  }, [services]);

  const filteredServices = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return services;
    return services.filter((s) => {
      return (
        s.title?.toLowerCase().includes(q) ||
        s.shortDescription?.toLowerCase().includes(q)
      );
    });
  }, [services, searchQuery]);

  function openDetails(service) {
    setSelectedService(service);
    setIsDetailsOpen(true);
    setIsEditOpen(false);
    setIsDeleteOpen(false);
  }

  function openEdit(service) {
    setSelectedService(service);
    setIsEditOpen(true);
    setIsDetailsOpen(false);
    setIsDeleteOpen(false);
  }

  function openDelete(service) {
    setSelectedService(service);
    setIsDeleteOpen(true);
    setIsDetailsOpen(false);
    setIsEditOpen(false);
  }

  async function handleAdd(serviceData) {
    try {
      setSaving(true);
      const response = await createService(serviceData);
      toast.success("Service créé avec succès !");
      setIsAddOpen(false);
      await loadServices();
    } catch (error) {
      const message =
        error?.response?.data?.message || "Erreur lors de la création du service.";
      toast.error(message);
    } finally {
      setSaving(false);
    }
  }

  async function handleUpdate(updatedData) {
    if (!selectedService) return;
    try {
      setSaving(true);
      await updateService(selectedService._id, updatedData);
      toast.success("Service mis à jour avec succès !");
      setIsEditOpen(false);
      setSelectedService(null);
      await loadServices();
    } catch (error) {
      const message =
        error?.response?.data?.message || "Erreur lors de la mise à jour du service.";
      toast.error(message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(serviceId) {
    try {
      await deleteService(serviceId);
      toast.success("Service supprimé avec succès !");
      setIsDeleteOpen(false);
      setIsDetailsOpen(false);
      setSelectedService(null);
      await loadServices();
    } catch (error) {
      const message =
        error?.response?.data?.message || "Erreur lors de la suppression du service.";
      toast.error(message);
    }
  }

  const getIcon = (iconKey) => {
    const Icon = serviceIcons[iconKey];
    return Icon ? <Icon className="w-5 h-5 text-sky-500" /> : null;
  };

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
                <span className="text-sky-500">Services Management</span>
              </h1>
              <p className="text-md text-gray-600 m-6 ">
                Centralisez la gestion de vos services et gardez vos offres
                toujours à jour avec une interface simple et performante.
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
              placeholder="Search services..."
              className="pl-10 pr-4 h-11 w-[260px] sm:w-[320px] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
            />
          </div>

          {/* Add Service Button */}
          <button
            onClick={() => setIsAddOpen(true)}
            className="h-11 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 text-white shadow-lg hover:shadow-xl transition flex items-center gap-2"
          >
            <Plus size={18} />
            
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 sm:mb-12">
        <KPICard title="Total Services" value={pagination.total} icon={PackageCheck} color="from-violet-600 to-sky-500" />
        <KPICard title="Active Services" value={stats.active} icon={Activity} color="from-sky-500 to-cyan-500" />
        <KPICard title="Inactive Services" value={stats.inactive} icon={Clock} color="from-slate-500 to-slate-400" />
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-center p-12">
            <Loader2 className="w-8 h-8 text-sky-500 animate-spin" />
            <span className="ml-3 text-gray-600">Chargement des services...</span>
          </div>
        </div>
      ) : (
        <>
          {/* Responsive Table */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mt-24">
            <div className="overflow-x-auto">
              <table className="min-w-[900px] w-full">
                <thead className="bg-violet-300">
                  <tr>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Icon
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Service
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Description
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Prix
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Date
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Status
                    </th>
                    <th className="p-4 text-right font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredServices.length === 0 ? (
                    <tr>
                      <td
                        className="p-8 text-center text-gray-600"
                        colSpan={7}
                      >
                        Aucun service trouvé.
                      </td>
                    </tr>
                  ) : (
                    filteredServices.map((service) => {
                      const statusBadge =
                        service.status === "active"
                          ? "bg-sky-50 text-sky-700 border-sky-200"
                          : "bg-gray-100 text-gray-600 border-gray-200";

                      return (
                        <tr
                          key={service._id}
                          className="border-t border-gray-100 hover:bg-violet-100 transition"
                        >
                          <td className="p-4">
                            <div className="w-10 h-10 rounded-xl bg-violet-50 border border-sky-100 flex items-center justify-center hover:bg-violet-200 transition">
                              {getIcon(service.icon)}
                            </div>
                          </td>

                          <td className="p-4 font-semibold text-gray-800">
                            {service.title}
                          </td>

                          <td className="p-4 text-gray-600">
                            {service.shortDescription}
                          </td>

                          <td className="p-4 text-gray-700 font-medium">
                            {service.price || 0} MAD
                          </td>

                          <td className="p-4 text-gray-700">
                            {formatDate(service.createdAt)}
                          </td>

                          <td className="p-4">
                            <span
                              className={`inline-flex items-center px-3 py-1 rounded-full text-sm border ${statusBadge}`}
                            >
                              {service.status === "active"
                                ? "Active"
                                : "Inactive"}
                            </span>
                          </td>

                          <td className="p-4">
                            <div className="flex justify-end gap-2">
                              <button
                                onClick={() => openDetails(service)}
                                className="p-2 rounded-lg bg-sky-50 text-sky-600 hover:bg-sky-100 transition flex items-center"
                                aria-label="View Details"
                                title="View Details"
                              >
                                <Eye size={18} />
                              </button>

                              <button
                                onClick={() => openEdit(service)}
                                className="p-2 rounded-lg bg-violet-50 text-violet-700 hover:bg-violet-100 transition flex items-center"
                                aria-label="Edit"
                                title="Edit"
                              >
                                <Pencil size={18} />
                              </button>

                              <button
                                onClick={() => openDelete(service)}
                                className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition flex items-center"
                                aria-label="Delete"
                                title="Delete"
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
                  Page {page} sur {pagination.totalPages} ({pagination.total} services)
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
                      setPage((p) => Math.min(pagination.totalPages, p + 1))
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

      {/* Add Service Modal */}
      {isAddOpen ? (
        <AddService
          onCancel={() => setIsAddOpen(false)}
          onSave={handleAdd}
          saving={saving}
        />
      ) : null}

      {/* Update Service Modal */}
      {isEditOpen ? (
        <UpdateService
          service={selectedService}
          onCancel={() => {
            setIsEditOpen(false);
            setSelectedService(null);
          }}
          onSave={handleUpdate}
          saving={saving}
        />
      ) : null}

      {/* Delete Service Modal */}
      {isDeleteOpen ? (
        <DeleteService
          service={selectedService}
          onCancel={() => {
            setIsDeleteOpen(false);
            setSelectedService(null);
          }}
          onConfirm={() =>
            selectedService && handleDelete(selectedService._id)
          }
        />
      ) : null}

      {/* View Details Modal */}
      {isDetailsOpen && selectedService ? (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                  {getIcon(selectedService.icon)}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-violet-700">
                    {selectedService.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {selectedService.status === "active"
                      ? "Active"
                      : "Inactive"}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsDetailsOpen(false);
                  setSelectedService(null);
                }}
                className="p-2 rounded-lg hover:bg-gray-100 transition"
                aria-label="Close"
              >
                X
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <p className="text-sm font-medium text-gray-700 mb-1">
                  Description
                </p>
                <p className="text-gray-600">
                  {selectedService.shortDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    Created Date
                  </p>
                  <p className="text-gray-600">
                    {formatDate(selectedService.createdAt)}
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    Price
                  </p>
                  <p className="text-gray-600">
                    {selectedService.price || 0} DH
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => {
                  setIsDetailsOpen(false);
                  setSelectedService(null);
                }}
                className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => openEdit(selectedService)}
                className="px-5 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition flex items-center gap-2"
              >
                <Pencil size={18} />
                Edit
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Services;