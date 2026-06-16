const express = require("express");
const router = express.Router();
const contactController = require("../Controllers/Contact.controller");

// POST /api/contact - Create a contact message (client)
router.post("/", contactController.createContact);

// GET /api/contact - List all contacts (admin)
router.get("/", contactController.getAllContacts);

// GET /api/contact/unread-count - Get unread contacts count (notifications)
router.get("/unread-count", contactController.getUnreadCount);

// DELETE /api/contact/:id - Delete a contact (admin)
router.delete("/:id", contactController.deleteContact);

// PATCH /api/contact/:id/read - Mark contact as read/unread (admin)
router.patch("/:id/read", contactController.markAsRead);

module.exports = router;