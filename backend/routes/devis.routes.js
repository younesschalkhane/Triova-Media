const express = require("express");
const router = express.Router();
const devisController = require("../Controllers/Devis.controller");

// POST   /api/devis        — client submits a quote request
router.post("/", devisController.createDevis);

// GET    /api/devis        — admin fetches all quote requests
router.get("/", devisController.getAllDevis);

// GET    /api/devis/:id    — admin fetches one devis
router.get("/:id", devisController.getDevis);

// PUT    /api/devis/:id    — admin updates status / fields
router.put("/:id", devisController.updateDevis);

// DELETE /api/devis/:id    — admin deletes a devis
router.delete("/:id", devisController.deleteDevis);

module.exports = router;
