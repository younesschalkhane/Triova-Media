const express = require("express");
const router = express.Router();
const notificationController = require("../Controllers/Notification.controller");

// GET /api/notifications - Récupérer toutes les notifications
router.get("/", notificationController.getNotifications);

// GET /api/notifications/unread-count - Compter les notifications non lues
router.get("/unread-count", notificationController.getUnreadCount);

// POST /api/notifications - Créer une notification
router.post("/", notificationController.createNotification);

// PATCH /api/notifications/mark-all-read - Marquer toutes les notifications comme lues
router.patch("/mark-all-read", notificationController.markAllAsRead);

// PATCH /api/notifications/:id/read - Marquer une notification comme lue
router.patch("/:id/read", notificationController.markAsRead);

// DELETE /api/notifications/:id - Supprimer une notification
router.delete("/:id", notificationController.deleteNotification);

module.exports = router;