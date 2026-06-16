const ServiceRequest = require("../modeles/ServiceRequest.modele");
const Notification = require("../modeles/Notification.modele");

// CREATE — client submits service request
// Crée automatiquement une notification pour l'admin
exports.createServiceRequest = async (req, res) => {
  try {
    const serviceRequest = await ServiceRequest.create(req.body);

    // Créer une notification unifiée (avec protection contre les doublons)
    try {
      const existing = await Notification.findOne({ type: "service-request", sourceId: serviceRequest._id });
      if (!existing) {
        await Notification.create({
          type: "service-request",
          sourceId: serviceRequest._id,
          sourceModel: "ServiceRequest",
          title: `Demande de ${serviceRequest.fullName || "Client"}`,
          subtitle: serviceRequest.email || "",
          message: `Services: ${(serviceRequest.services || []).join(", ")}`,
          link: "/client/demandes",
        });
      }
    } catch (notifErr) {
      console.error("Erreur création notification service-request:", notifErr.message);
    }

    res.status(201).json(serviceRequest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// READ ALL — admin gets all service requests
exports.getServiceRequests = async (req, res) => {
  try {
    const requests = await ServiceRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ ONE — admin gets a single request
exports.getServiceRequest = async (req, res) => {
  try {
    const request = await ServiceRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: "Demande introuvable." });
    }
    res.json(request);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE STATUS — admin updates status or any field
exports.updateServiceRequest = async (req, res) => {
  try {
    const updated = await ServiceRequest.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "Demande introuvable." });
    }
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE — admin deletes a request
exports.deleteServiceRequest = async (req, res) => {
  try {
    const deleted = await ServiceRequest.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Demande introuvable." });
    }
    res.json({ message: "Demande supprimée avec succès." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
