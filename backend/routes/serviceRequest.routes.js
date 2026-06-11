const express = require("express");
const router = express.Router();
const serviceRequestController = require("../Controllers/ServiceRequest.controller");

// POST   /api/service-requests        — client submits a service request
router.post("/", serviceRequestController.createServiceRequest);

// GET    /api/service-requests        — admin fetches all service requests
router.get("/", serviceRequestController.getServiceRequests);

// GET    /api/service-requests/:id    — admin fetches one service request
router.get("/:id", serviceRequestController.getServiceRequest);

// PUT    /api/service-requests/:id    — admin updates status / fields
router.put("/:id", serviceRequestController.updateServiceRequest);

// DELETE /api/service-requests/:id    — admin deletes a service request
router.delete("/:id", serviceRequestController.deleteServiceRequest);

module.exports = router;
