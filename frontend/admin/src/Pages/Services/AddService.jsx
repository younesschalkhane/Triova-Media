import React, { useState } from "react";
import { Check, Plus, Upload } from "lucide-react";
import { serviceIcons, serviceIconOptions } from "./servicesData";
import { uploadServiceImage } from "../../services/api/servicesApi";
import toast from "react-hot-toast";

function AddService({ onCancel, onSave, saving }) {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [features, setFeatures] = useState("");
  const [icon, setIcon] = useState(serviceIconOptions[0]?.key || "code2");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("active");
  const [price, setPrice] = useState("");
  const [uploading, setUploading] = useState(false);

  async function handleImageChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const response = await uploadServiceImage(file);
      setImage(response.data.imageUrl);
      toast.success("Image uploadée.");
    } catch {
      toast.error("Erreur lors de l'upload de l'image.");
    } finally {
      setUploading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    onSave({
      title: title.trim(),
      slug: slug.trim() || undefined,
      shortDescription: shortDescription.trim(),
      description: description.trim(),
      category: category.trim(),
      price: Number(price) || 0,
      features: features
        .split("\n")
        .map((f) => f.trim())
        .filter(Boolean),
      icon,
      image,
      status,
    });
  }

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-violet-700">Add Service</h2>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Ex: SEO"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Slug (optional)
              </label>
              <input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                type="text"
                className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Ex: seo-referencement"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Short Description
            </label>
            <textarea
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              rows={2}
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Short service description..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Detailed service description..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Ex: Création Site Web"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price (MAD)
            </label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              min="0"
              step="0.01"
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Ex: 1500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Features (one per line)
            </label>
            <textarea
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
              rows={4}
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder={"Feature 1\nFeature 2\nFeature 3"}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                <Upload size={18} />
                {uploading ? "Uploading..." : "Upload Image"}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  disabled={uploading}
                />
              </label>
              {image ? (
                <img
                  src={image}
                  alt="Preview"
                  className="w-16 h-16 rounded-lg object-cover border"
                />
              ) : null}
            </div>
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
              className="px-5 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition flex items-center gap-2 disabled:opacity-50"
              disabled={!title.trim() || saving}
            >
              <Plus size={18} />
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddService;
