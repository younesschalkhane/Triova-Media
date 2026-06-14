import axiosInstance from "./axiosInstance";

/**
 * Récupérer tous les messages de contact (admin).
 */
export async function fetchContacts() {
  const { data } = await axiosInstance.get("/api/contact");
  return data;
}

/**
 * Supprimer un message de contact (admin).
 */
export async function deleteContact(id) {
  const { data } = await axiosInstance.delete(`/api/contact/${id}`);
  return data;
}

/**
 * Marquer un message comme lu / non lu (admin).
 */
export async function markContactAsRead(id, read) {
  const { data } = await axiosInstance.patch(`/api/contact/${id}/read`, { read });
  return data;
}