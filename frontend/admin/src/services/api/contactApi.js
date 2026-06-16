import axiosInstance from "./axiosInstance";

/**
 * Récupérer tous les messages de contact (admin).
 * @param {Object} params - Paramètres optionnels (page, limit)
 */
export async function fetchContacts(params = {}) {
  const { data } = await axiosInstance.get("/api/contact", { params });
  return data;
}

/**
 * Supprimer un message de contact (admin).
 * @param {string} id - Identifiant du message
 */
export async function deleteContact(id) {
  const { data } = await axiosInstance.delete(`/api/contact/${id}`);
  return data;
}

/**
 * Marquer un message comme lu / non lu (admin).
 * @param {string} id - Identifiant du message
 * @param {boolean} read - État de lecture
 */
export async function markContactAsRead(id, read) {
  const { data } = await axiosInstance.patch(`/api/contact/${id}/read`, { read });
  return data;
}

/**
 * Récupérer le nombre de messages non lus (notifications).
 */
export async function getUnreadCount() {
  const { data } = await axiosInstance.get("/api/contact/unread-count");
  return data;
}
