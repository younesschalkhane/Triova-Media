const Notification = require("../modeles/Notification.modele");

/**
 * Récupérer toutes les notifications (avec pagination).
 * GET /api/notifications?page=1&limit=20
 */
exports.getNotifications = async (req, res) => {
  try {
    const { page = 1, limit = 50 } = req.query;

    const total = await Notification.countDocuments();
    const totalPages = Math.ceil(total / limit);

    const notifications = await Notification.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.json({
      success: true,
      data: notifications,
      pagination: {
        total,
        totalPages,
        page: parseInt(page),
        limit: parseInt(limit),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Erreur lors du chargement des notifications.",
    });
  }
};

/**
 * Récupérer le nombre de notifications non lues.
 * GET /api/notifications/unread-count
 */
exports.getUnreadCount = async (req, res) => {
  try {
    const count = await Notification.countDocuments({ read: false });
    res.json({
      success: true,
      data: { count },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Erreur lors du comptage des notifications.",
    });
  }
};

/**
 * Marquer une notification comme lue.
 * PATCH /api/notifications/:id/read
 */
exports.markAsRead = async (req, res) => {
  try {
    const { id } = req.params;

    const notification = await Notification.findByIdAndUpdate(
      id,
      { read: true },
      { new: true }
    );

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: "Notification introuvable.",
      });
    }

    res.json({
      success: true,
      data: notification,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Erreur lors de la mise à jour.",
    });
  }
};

/**
 * Marquer toutes les notifications comme lues.
 * PATCH /api/notifications/mark-all-read
 */
exports.markAllAsRead = async (req, res) => {
  try {
    await Notification.updateMany(
      { read: false },
      { read: true }
    );

    res.json({
      success: true,
      message: "Toutes les notifications ont été marquées comme lues.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Erreur lors de la mise à jour.",
    });
  }
};

/**
 * Créer une nouvelle notification (appelé lors de la création d'un contact, devis, ou demande de service).
 * POST /api/notifications
 */
exports.createNotification = async (req, res) => {
  try {
    const { type, sourceId, sourceModel, title, subtitle, message, link } = req.body;

    // Vérifier les doublons : même type + même sourceId
    const existing = await Notification.findOne({ type, sourceId });
    if (existing) {
      return res.json({
        success: true,
        data: existing,
        message: "Notification existante.",
      });
    }

    const notification = await Notification.create({
      type,
      sourceId,
      sourceModel,
      title,
      subtitle,
      message,
      link,
    });

    res.status(201).json({
      success: true,
      data: notification,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Erreur lors de la création de la notification.",
    });
  }
};

/**
 * Supprimer une notification.
 * DELETE /api/notifications/:id
 */
exports.deleteNotification = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findByIdAndDelete(id);

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: "Notification introuvable.",
      });
    }

    res.json({
      success: true,
      message: "Notification supprimée.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Erreur lors de la suppression.",
    });
  }
};