const mongoose = require("mongoose");

/**
 * Modèle de notification unifié pour l'interface admin.
 * Stocke toutes les notifications provenant des différents formulaires :
 * - Contact (messages de contact)
 * - Devis (demandes de devis)
 * - Service Request (demandes de service)
 */
const notificationSchema = new mongoose.Schema(
  {
    // Type de la notification
    type: {
      type: String,
      enum: ["contact", "devis", "service-request", "review"],
      required: true,
    },

    // Identifiant de l'élément source
    sourceId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "sourceModel",
    },

    // Nom du modèle source pour la référence
    sourceModel: {
      type: String,
      required: true,
      enum: ["Contact", "Devis", "ServiceRequest", "Review"],
    },

    // Titre de la notification
    title: {
      type: String,
      required: true,
    },

    // Sous-titre (email de l'expéditeur)
    subtitle: {
      type: String,
      default: "",
    },

    // Message / résumé
    message: {
      type: String,
      default: "",
    },

    // Lien de redirection
    link: {
      type: String,
      required: true,
    },

    // État de lecture
    read: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Index pour optimiser les requêtes de notifications non lues
notificationSchema.index({ read: 1, createdAt: -1 });
notificationSchema.index({ type: 1, sourceId: 1 });

module.exports = mongoose.model("Notification", notificationSchema);