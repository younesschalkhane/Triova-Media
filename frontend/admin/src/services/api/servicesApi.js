import axiosInstance from "./axiosInstance";
import adminServicesFallback from "../../data/adminServicesFallback";

export async function fetchServices({ page = 1, limit = 10, search = "", status = "all" } = {}) {
  try {
    const { data } = await axiosInstance.get("/api/services", {
      params: { page, limit, search, status },
    });
    return data;
  } catch (error) {
    console.warn("⚠️ API indisponible (fetchServices) - utilisation des données locales");
    const filtered = adminServicesFallback.filter((s) => {
      if (status !== "all" && s.status !== status) return false;
      if (search && !s.title.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
    return {
      success: true,
      data: filtered,
      pagination: { total: filtered.length, totalPages: 1, limit, page },
    };
  }
}

export async function fetchServiceBySlug(slug) {
  try {
    const { data } = await axiosInstance.get(`/api/services/${slug}`);
    return data;
  } catch (error) {
    console.warn("⚠️ API indisponible (fetchServiceBySlug) - utilisation des données locales");
    const fallbackService = adminServicesFallback.find((s) => s.slug === slug);
    if (fallbackService) {
      return { success: true, data: fallbackService };
    }
    return { success: false, data: null };
  }
}

export async function createService(serviceData) {
  try {
    const { data } = await axiosInstance.post("/api/services", serviceData);
    return data;
  } catch (error) {
    console.warn("⚠️ API indisponible (createService) - action non disponible hors ligne");
    throw new Error("Impossible de créer un service : API indisponible (mode hors ligne)");
  }
}

export async function updateService(id, serviceData) {
  try {
    const { data } = await axiosInstance.put(`/api/services/${id}`, serviceData);
    return data;
  } catch (error) {
    console.warn("⚠️ API indisponible (updateService) - action non disponible hors ligne");
    throw new Error("Impossible de modifier le service : API indisponible (mode hors ligne)");
  }
}

export async function deleteService(id) {
  try {
    const { data } = await axiosInstance.delete(`/api/services/${id}`);
    return data;
  } catch (error) {
    console.warn("⚠️ API indisponible (deleteService) - action non disponible hors ligne");
    throw new Error("Impossible de supprimer le service : API indisponible (mode hors ligne)");
  }
}

export async function uploadServiceImage(file) {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const { data } = await axiosInstance.post("/api/services/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
  } catch (error) {
    console.warn("⚠️ API indisponible (uploadServiceImage) - action non disponible hors ligne");
    throw new Error("Impossible d'uploader l'image : API indisponible (mode hors ligne)");
  }
}
