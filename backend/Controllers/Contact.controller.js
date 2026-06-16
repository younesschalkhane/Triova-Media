const Contact = require("../modeles/Contact.modele");
const Notification = require("../modeles/Notification.modele");

/**
 * Créer un message de contact (côté client).
 * Crée automatiquement une notification pour l'admin.
 */
exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "Tous les champs sont requis.",
      });
    }

    const contact = await Contact.create({ name, email, phone, message });

    // Créer une notification unifiée (avec protection contre les doublons)
    try {
      const existing = await Notification.findOne({ type: "contact", sourceId: contact._id });
      if (!existing) {
        await Notification.create({
          type: "contact",
          sourceId: contact._id,
          sourceModel: "Contact",
          title: `Message de ${name}`,
          subtitle: email,
          message: message.substring(0, 100) + (message.length > 100 ? "..." : ""),
          link: "/contact",
        });
      }
    } catch (notifErr) {
      // Ne pas bloquer la création du contact si la notification échoue
      console.error("Erreur création notification contact:", notifErr.message);
    }

    res.status(201).json({
      success: true,
      data: contact,
      message: "Message envoyé avec succès.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Erreur lors de l'envoi du message.",
    });
  }
};

/**
 * Récupérer tous les messages de contact (admin).
 * Supporte la pagination via query params ?page=1&limit=10
 */
exports.getAllContacts = async (req, res) => {
  try {
    const { page = 1, limit = 50 } = req.query;

    const total = await Contact.countDocuments();
    const totalPages = Math.ceil(total / limit);

    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.json({
      success: true,
      data: contacts,
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
      message: error.message || "Erreur lors du chargement des messages.",
    });
  }
};

/**
 * Supprimer un message de contact (admin).
 */
exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Message introuvable.",
      });
    }

    res.json({
      success: true,
      message: "Message supprimé avec succès.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Erreur lors de la suppression.",
    });
  }
};

/**
 * Marquer un message comme lu / non lu (admin).
 * PATCH /api/contact/:id/read
 */
exports.markAsRead = async (req, res) => {
  try {
    const { id } = req.params;
    const { read } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      id,
      { read: !!read },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Message introuvable.",
      });
    }

    res.json({
      success: true,
      data: contact,
      message: `Message marqué comme ${read ? "lu" : "non lu"}.`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Erreur lors de la mise à jour du statut.",
    });
  }
};

/**
 * Compter les messages non lus (pour les notifications).
 * GET /api/contact/unread-count
 */
exports.getUnreadCount = async (req, res) => {
  try {
    const count = await Contact.countDocuments({ read: false });
    res.json({
      success: true,
      data: { count },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Erreur lors du comptage des messages non lus.",
    });
  }
};