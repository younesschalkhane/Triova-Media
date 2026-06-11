const express = require("express");
const router = express.Router();
const serviceController = require("../Controllers/Service.controller");
const upload = require("../middleware/upload");

router.get("/", serviceController.getAllServices);
router.post("/upload", upload.single("image"), serviceController.uploadServiceImage);
router.post("/", serviceController.createService);
router.put("/:id", serviceController.updateService);
router.delete("/:id", serviceController.deleteService);
router.get("/:slug", serviceController.getServiceBySlug);

module.exports = router;
