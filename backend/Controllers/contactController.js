const Contact = require("../models/Contact");

/**
 * POST /api/contact
 * Saves a new contact message submitted from the website form.
 */
exports.createContact = async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : "",
      message: message.trim(),
    });

    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully. We will get back to you soon.",
      data: contact,
    });
  } catch (err) {
    next(err);
  }
};

/**
 * GET /api/contact
 * Admin endpoint — returns all contact messages, newest first.
 */
exports.getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (err) {
    next(err);
  }
};
