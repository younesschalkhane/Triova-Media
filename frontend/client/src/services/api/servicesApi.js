import axiosInstance from "./axiosInstance";
import servicesFallback from "../../data/servicesFallback";

export async function fetchActiveServices() {
  try {
    const { data } = await axiosInstance.get("/api/services", {
      params: { status: "active", limit: 50 },
    });
    return data;
  } catch (error) {
    console.warn("⚠️ API indisponible (fetchActiveServices) - utilisation des données locales");
    return { success: true, data: servicesFallback };
  }
}

export async function fetchServiceBySlug(slug) {
  try {
    const { data } = await axiosInstance.get(`/api/services/${slug}`);
    return data;
  } catch (error) {
    console.warn("⚠️ API indisponible (fetchServiceBySlug) - utilisation des données locales");
    const fallbackService = servicesFallback.find((s) => s.slug === slug);
    if (fallbackService) {
      return { success: true, data: fallbackService };
    }
    return { success: false, data: null };
  }
}
