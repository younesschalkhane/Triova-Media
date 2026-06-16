const Review = require("../modeles/Review.modele");
const Notification = require("../modeles/Notification.modele");

// Create a review
// Crée automatiquement une notification pour l'admin
exports.createReview = async (req, res) => {
  try {
    const { name, role, company, photo, comment, rating } = req.body;

    if (!name || !comment || !rating) {
      return res.status(400).json({
        success: false,
        message: "Les champs nom, commentaire et note sont requis.",
      });
    }

    const review = await Review.create({ name, role, company, photo, comment, rating });

    // Créer une notification unifiée (avec protection contre les doublons)
    try {
      const existing = await Notification.findOne({ type: "review", sourceId: review._id });
      if (!existing) {
        const stars = "⭐".repeat(rating);
        await Notification.create({
          type: "review",
          sourceId: review._id,
          sourceModel: "Review",
          title: `Avis de ${name}`,
          subtitle: company || role || "",
          message: `${stars} — "${comment.substring(0, 80)}${comment.length > 80 ? "..." : ""}"`,
          link: "/avis",
        });
      }
    } catch (notifErr) {
      console.error("Erreur création notification review:", notifErr.message);
    }

    res.status(201).json({
      success: true,
      data: review,
      message: "Avis créé avec succès.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Erreur lors de la création de l'avis.",
    });
  }
};

// Get all reviews (admin)
exports.getAllReviews = async (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;

    const query = {};
    if (status && status !== "all") {
      query.status = status;
    }

    const total = await Review.countDocuments(query);
    const totalPages = Math.ceil(total / limit);

    const reviews = await Review.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.json({
      success: true,
      data: reviews,
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
      message: error.message || "Erreur lors du chargement des avis.",
    });
  }
};

// Get active & visible reviews (frontend)
exports.getActiveReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      status: "active",
      isVisible: true,
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      data: reviews,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Erreur lors du chargement des avis.",
    });
  }
};

// Update a review
exports.updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, role, company, photo, comment, rating, status, isVisible } = req.body;

    const review = await Review.findByIdAndUpdate(
      id,
      { name, role, company, photo, comment, rating, status, isVisible },
      { new: true, runValidators: true }
    );

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Avis introuvable.",
      });
    }

    res.json({
      success: true,
      data: review,
      message: "Avis mis à jour avec succès.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Erreur lors de la mise à jour de l'avis.",
    });
  }
};

// Delete a review
exports.deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findByIdAndDelete(id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Avis introuvable.",
      });
    }

    res.json({
      success: true,
      message: "Avis supprimé avec succès.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Erreur lors de la suppression de l'avis.",
    });
  }
};

// Toggle visibility
exports.toggleVisibility = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findById(id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Avis introuvable.",
      });
    }

    review.isVisible = !review.isVisible;
    await review.save();

    res.json({
      success: true,
      data: review,
      message: `Avis ${review.isVisible ? "affiche" : "masque"} avec succès.`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Erreur lors du changement de visibilité.",
    });
  }
};

// Toggle status (active/inactive)
exports.toggleStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findById(id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Avis introuvable.",
      });
    }

    review.status = review.status === "active" ? "inactive" : "active";
    await review.save();

    res.json({
      success: true,
      data: review,
      message: `Avis ${review.status === "active" ? "active" : "inactive"} avec succès.`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Erreur lors du changement de statut.",
    });
  }
};