import React, { useMemo, useState } from "react";
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
} from "lucide-react";
import AddService from "./AddService";
import UpdateService from "./UpdateService";
import DeleteService from "./DeleteService";
import {
  serviceIcons,
  serviceIconOptions,
  servicesData,
} from "./servicesData";

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
  const [services, setServices] = useState(() =>
    servicesData.map((s) => ({ ...s }))
  );
  const [searchQuery, setSearchQuery] = useState("");

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const [selectedService, setSelectedService] = useState(null);

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
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q)
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

  function handleAdd(service) {
    const id = Date.now();
    setServices((prev) => [
      {
        ...service,
        id,
        createdAt: new Date().toISOString(),
      },
      ...prev,
    ]);
    setIsAddOpen(false);
  }

  function handleUpdate(updated) {
    setServices((prev) =>
      prev.map((s) => (s.id === updated.id ? { ...s, ...updated } : s))
    );
    setIsEditOpen(false);
  }

  function handleDelete(serviceId) {
    setServices((prev) => prev.filter((s) => s.id !== serviceId));
    setIsDeleteOpen(false);
    setIsDetailsOpen(false);
  }

  const getIcon = (iconKey) => {
    const Icon = serviceIcons[iconKey];
    return Icon ? <Icon className="w-5 h-5 text-sky-500" /> : null;
  };

  return (
    <div className="p-6">
      {/* Dashboard Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/15 to-violet-600/15 flex items-center justify-center border border-violet-100">
              <LayoutDashboard className="w-5 h-5 text-violet-700" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-violet-700">
                TRIOVA MEDIA - <span className="text-sky-500">Services Management</span>
              </h1>
              <p className="text-md text-gray-600">
                Centralisez la gestion de vos services et gardez vos offres toujours à jour avec une interface simple et performante.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
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
            Add Service
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 hover:shadow-xl transition">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Services</p>
              <p className="text-2xl font-bold text-violet-700">
                {stats.total}
              </p>
            </div>
            <PackageCheck className="w-6 h-6 text-sky-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 hover:shadow-xl transition">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">
                Active Services
              </p>
              <p className="text-2xl font-bold text-sky-600">
                {stats.active}
              </p>
            </div>
            <Activity className="w-6 h-6 text-sky-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 hover:shadow-xl transition">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">
                Inactive Services
              </p>
              <p className="text-2xl font-bold text-gray-700">
                {stats.inactive}
              </p>
            </div>
            <Clock className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full ">
            <thead className="bg-violet-50">
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
                    colSpan={6}
                  >
                    No services found.
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
                      key={service.id}
                      className="border-t border-gray-100 hover:bg-gray-50 transition"
                    >
                      <td className="p-4">
                        <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                          {getIcon(service.icon)}
                        </div>
                      </td>

                      <td className="p-4 font-semibold text-gray-800">
                        {service.name}
                      </td>

                      <td className="p-4 text-gray-600">
                        {service.description}
                      </td>

                      <td className="p-4 text-gray-700 font-medium">
                        {Number(service.price || 0)} MAD
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
                            <span className="hidden sm:inline ml-2 text-sm font-medium">
                              View Details
                            </span>
                          </button>

                          <button
                            onClick={() => openEdit(service)}
                            className="p-2 rounded-lg bg-violet-50 text-violet-700 hover:bg-violet-100 transition flex items-center"
                            aria-label="Edit"
                            title="Edit"
                          >
                            <Pencil size={18} />
                            <span className="hidden sm:inline ml-2 text-sm font-medium">
                              Edit
                            </span>
                          </button>

                          <button
                            onClick={() => openDelete(service)}
                            className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition flex items-center"
                            aria-label="Delete"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                            <span className="hidden sm:inline ml-2 text-sm font-medium">
                              Delete
                            </span>
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
      </div>

      {/* Add Service Modal */}
      {isAddOpen ? (
        <AddService
          onCancel={() => setIsAddOpen(false)}
          onSave={handleAdd}
        />
      ) : null}

      {/* Update Service Modal */}
      {isEditOpen ? (
        <UpdateService
          service={selectedService}
          onCancel={() => setIsEditOpen(false)}
          onSave={handleUpdate}
        />
      ) : null}

      {/* Delete Service Modal */}
      {isDeleteOpen ? (
        <DeleteService
          service={selectedService}
          onCancel={() => setIsDeleteOpen(false)}
          onConfirm={() => selectedService && handleDelete(selectedService.id)}
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
                    {selectedService.name}
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
                onClick={() => setIsDetailsOpen(false)}
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
                  {selectedService.description}
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
                    Icon
                  </p>
                  <p className="text-gray-600">
                    {getIcon(selectedService.icon)}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => setIsDetailsOpen(false)}
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