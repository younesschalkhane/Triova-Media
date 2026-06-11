import axiosInstance from "./axiosInstance";

export async function fetchServices({ page = 1, limit = 10, search = "", status = "all" } = {}) {
  const { data } = await axiosInstance.get("/api/services", {
    params: { page, limit, search, status },
  });
  return data;
}

export async function fetchServiceBySlug(slug) {
  const { data } = await axiosInstance.get(`/api/services/${slug}`);
  return data;
}

export async function createService(serviceData) {
  const { data } = await axiosInstance.post("/api/services", serviceData);
  return data;
}

export async function updateService(id, serviceData) {
  const { data } = await axiosInstance.put(`/api/services/${id}`, serviceData);
  return data;
}

export async function deleteService(id) {
  const { data } = await axiosInstance.delete(`/api/services/${id}`);
  return data;
}

export async function uploadServiceImage(file) {
  const formData = new FormData();
  formData.append("image", file);

  const { data } = await axiosInstance.post("/api/services/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
}
