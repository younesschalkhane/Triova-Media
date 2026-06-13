const Contact = require("../modeles/Contact.modele");

/**
 * POST /api/contact
 * Saves a new contact message submitted from the website form.
 */
exports.createContact = async (req, res, next) => {
  try {
    const { name, email, phone, sujet, message } = req.body;

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : "",
      sujet: sujet ? sujet.trim() : "",
      message: message.trim(),
    });

    res.status(201).json({
      success: true,
      message: "Votre message a été envoyé avec succès. Nous vous répondrons bientôt.",
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

/**
 * DELETE /api/contact/:id
 * Admin endpoint — deletes a contact message.
 */
exports.deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Message non trouvé",
      });
    }

    res.status(200).json({
      success: true,
      message: "Message supprimé avec succès",
    });
  } catch (err) {
    next(err);
  }
};

/**
 * PATCH /api/contact/:id/read
 * Admin endpoint — marks a contact message as read/unread.
 */
exports.markAsRead = async (req, res, next) => {
  try {
    const { read } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { read },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Message non trouvé",
      });
    }

    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (err) {
    next(err);
  }
};
