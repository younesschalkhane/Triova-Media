import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { serviceIcons, serviceIconOptions } from "./servicesData";

function UpdateService({ service, onCancel, onSave }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState(serviceIconOptions[0]?.key || "code2");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("active");

  useEffect(() => {
    if (!service) return;
    setName(service.name || "");
    setDescription(service.description || "");
    setIcon(service.icon || serviceIconOptions[0]?.key || "code2");
    setPrice(
      service.price === 0 || service.price ? String(service.price) : ""
    );
    setStatus(service.status || "active");
  }, [service]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!service) return;
    if (!name.trim()) return;

    onSave({
      ...service,
      name: name.trim(),
      description: description.trim(),
      icon,
      price: price === "" ? 0 : Number(price),
      status,
    });
  }

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-violet-700">
            Update Service
          </h2>
          <button
            type="button"
            onClick={onCancel}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Close"
          >
            X
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Prix (MAD)
            </label>
            <input
              value={price}
              onChange={(e) => {
                const next = e.target.value.replace(/[^\d]/g, "");
                setPrice(next);
              }}
              inputMode="numeric"
              type="text"
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Ex: 2500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Icon
            </label>
            <div className="grid grid-cols-5 sm:grid-cols-7 gap-2">
              {serviceIconOptions.map((opt) => {
                const Icon = serviceIcons[opt.key];
                const isSelected = icon === opt.key;
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setIcon(opt.key)}
                    className={`relative h-12 rounded-xl border transition flex items-center justify-center ${
                      isSelected
                        ? "border-violet-500 bg-sky-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                    title={opt.label}
                    aria-label={opt.label}
                  >
                    {Icon ? (
                      <Icon
                        className={`w-5 h-5 ${
                          isSelected ? "text-violet-700" : "text-gray-600"
                        }`}
                      />
                    ) : null}

                    {isSelected ? (
                      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-violet-600 text-white flex items-center justify-center shadow">
                        <Check className="w-3 h-3" />
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition disabled:opacity-50"
              disabled={!name.trim()}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateService;