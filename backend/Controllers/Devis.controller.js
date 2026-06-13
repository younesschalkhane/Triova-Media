const Devis = require("../modeles/Devis.modele");

// CREATE — client submits quote request
exports.createDevis = async (req, res) => {
  try {
    const devis = await Devis.create(req.body);
    res.status(201).json(devis);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// READ ALL — admin gets all quote requests
exports.getAllDevis = async (req, res) => {
  try {
    const devisList = await Devis.find().sort({ createdAt: -1 });
    res.json(devisList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ ONE — admin gets a single devis
exports.getDevis = async (req, res) => {
  try {
    const devis = await Devis.findById(req.params.id);
    if (!devis) {
      return res.status(404).json({ message: "Devis introuvable." });
    }
    res.json(devis);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE STATUS — admin updates status or any field
exports.updateDevis = async (req, res) => {
  try {
    const updated = await Devis.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "Devis introuvable." });
    }
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE — admin deletes a devis
exports.deleteDevis = async (req, res) => {
  try {
    const deleted = await Devis.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Devis introuvable." });
    }
    res.json({ message: "Devis supprimé avec succès." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
