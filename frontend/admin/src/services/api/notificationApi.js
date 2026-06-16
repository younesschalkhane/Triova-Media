import axiosInstance from "./axiosInstance";

/**
 * Récupérer toutes les notifications depuis la collection unifiée.
 * @param {Object} params - Paramètres optionnels (page, limit)
 */
export async function fetchNotifications(params = {}) {
  const { data } = await axiosInstance.get("/api/notifications", { params });
  return data;
}

/**
 * Récupérer le nombre total de notifications non lues.
 */
export async function fetchUnreadCount() {
  const { data } = await axiosInstance.get("/api/notifications/unread-count");
  return data;
}

/**
 * Marquer une notification comme lue.
 * @param {string} id - Identifiant de la notification
 */
export async function markNotificationAsRead(id) {
  const { data } = await axiosInstance.patch(`/api/notifications/${id}/read`);
  return data;
}

/**
 * Marquer toutes les notifications comme lues.
 */
export async function markAllNotificationsAsRead() {
  const { data } = await axiosInstance.patch("/api/notifications/mark-all-read");
  return data;
}

/**
 * Créer une nouvelle notification (appelé côté client lors de la soumission de formulaires).
 * @param {Object} notification - Données de la notification
 */
export async function createNotification(notification) {
  const { data } = await axiosInstance.post("/api/notifications", notification);
  return data;
}

/**
 * Supprimer une notification.
 * @param {string} id - Identifiant de la notification
 */
export async function deleteNotification(id) {
  const { data } = await axiosInstance.delete(`/api/notifications/${id}`);
  return data;
}