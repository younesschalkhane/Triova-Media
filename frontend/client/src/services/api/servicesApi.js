import axiosInstance from "./axiosInstance";

export async function fetchActiveServices() {
  const { data } = await axiosInstance.get("/api/services", {
    params: { status: "active", limit: 50 },
  });
  return data;
}

export async function fetchServiceBySlug(slug) {
  const { data } = await axiosInstance.get(`/api/services/${slug}`);
  return data;
}
