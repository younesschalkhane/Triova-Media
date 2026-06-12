const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const validateContact = require("../middleware/validateContact");

// Admin: list all contact messages (newest first)
router.get("/", contactController.getAllContacts);

// Public: submit a contact form message
router.post("/", validateContact, contactController.createContact);

module.exports = router;
