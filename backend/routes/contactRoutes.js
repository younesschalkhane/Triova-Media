const express = require("express");
const router = express.Router();
const contactController = require("../Controllers/contactController");
const validateContact = require("../middleware/validateContact");

// Admin: list all contact messages (newest first)
router.get("/", contactController.getAllContacts);

// Public: submit a contact form message
router.post("/", validateContact, contactController.createContact);

// Admin: delete a contact message
router.delete("/:id", contactController.deleteContact);

// Admin: mark a contact message as read/unread
router.patch("/:id/read", contactController.markAsRead);

module.exports = router;
