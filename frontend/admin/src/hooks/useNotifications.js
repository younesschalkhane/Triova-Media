import { useState, useEffect, useCallback, useRef } from "react";
import {
  fetchNotifications,
  fetchUnreadCount,
  markNotificationAsRead,
  markAllNotificationsAsRead,
} from "../services/api/notificationApi";

/**
 * Hook personnalisé pour gérer les notifications admin.
 * - Récupère le nombre total de notifications non lues
 * - Récupère la liste des notifications (triées par date décroissante)
 * - Marquage automatique comme lu lors du clic
 * - Action "Tout marquer comme lu"
 * - Actualisation automatique toutes les 30 secondes (polling)
 * - Pas de rechargement de page
 */
export function useNotifications(pollInterval = 30000) {
  const [unreadCount, setUnreadCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const intervalRef = useRef(null);

  /**
   * Charger le compteur de notifications non lues
   */
  const loadUnreadCount = useCallback(async () => {
    try {
      const res = await fetchUnreadCount();
      setUnreadCount(res.data?.count ?? 0);
    } catch (error) {
      console.error("Erreur chargement comptage notifications:", error);
    }
  }, []);

  /**
   * Charger la liste complète des notifications (triées par date décroissante)
   */
  const loadNotifications = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetchNotifications({ limit: 50 });
      const data = res.data || [];
      setNotifications(data);
      // Mettre à jour le compteur en même temps
      const unread = data.filter((n) => !n.read).length;
      setUnreadCount(unread);
    } catch (error) {
      console.error("Erreur chargement notifications:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Marquer une notification comme lue
   * Met à jour l'état local et décrémente le compteur
   */
  const markAsRead = useCallback(async (id) => {
    try {
      await markNotificationAsRead(id);
      setNotifications((prev) =>
        prev.map((n) => (n._id === id ? { ...n, read: true } : n))
      );
      setUnreadCount((prev) => Math.max(0, prev - 1));
    } catch (error) {
      console.error("Erreur marquage notification comme lue:", error);
    }
  }, []);

  /**
   * Marquer toutes les notifications comme lues
   */
  const markAllAsRead = useCallback(async () => {
    try {
      await markAllNotificationsAsRead();
      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
      setUnreadCount(0);
    } catch (error) {
      console.error("Erreur marquage toutes notifications:", error);
    }
  }, []);

  /**
   * Rafraîchir toutes les données de notification
   */
  const refresh = useCallback(async () => {
    await Promise.all([loadUnreadCount(), loadNotifications()]);
  }, [loadUnreadCount, loadNotifications]);

  // Chargement initial + mise en place du polling
  useEffect(() => {
    loadUnreadCount();
    loadNotifications();

    intervalRef.current = setInterval(() => {
      loadUnreadCount();
    }, pollInterval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [loadUnreadCount, loadNotifications, pollInterval]);

  return {
    unreadCount,
    notifications,
    loading,
    refresh,
    markAsRead,
    markAllAsRead,
  };
}