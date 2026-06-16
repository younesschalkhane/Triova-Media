const Devis = require("../modeles/Devis.modele");
const Notification = require("../modeles/Notification.modele");
const nodemailer = require("nodemailer");

// CREATE — client submits quote request
// Crée automatiquement une notification pour l'admin
exports.createDevis = async (req, res) => {
  try {
    const devis = await Devis.create(req.body);

    // Créer une notification unifiée (avec protection contre les doublons)
    try {
      const existing = await Notification.findOne({ type: "devis", sourceId: devis._id });
      if (!existing) {
        await Notification.create({
          type: "devis",
          sourceId: devis._id,
          sourceModel: "Devis",
          title: `Devis de ${devis.fullName || "Client"}`,
          subtitle: devis.email || "",
          message: `${devis.projectType || "Projet"} — ${devis.budget || "N/A"}`,
          link: "/devis",
        });
      }
    } catch (notifErr) {
      console.error("Erreur création notification devis:", notifErr.message);
    }

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

// REPLY — admin responds to a devis request via email
exports.replyDevis = async (req, res) => {
  try {
    const { subject, message } = req.body;

    if (!subject || !message) {
      return res.status(400).json({ message: "Le sujet et le message sont requis." });
    }

    const devis = await Devis.findById(req.params.id);
    if (!devis) {
      return res.status(404).json({ message: "Devis introuvable." });
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: devis.email,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6d28d9;">Réponse à votre demande de devis</h2>
          <p>Bonjour <strong>${devis.fullName}</strong>,</p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #6b7280; font-size: 12px;">
            Ceci est une réponse concernant votre demande de devis pour le projet "${devis.projectType}".
          </p>
          <p style="color: #6b7280; font-size: 12px;">— TRIOVA MEDIA</p>
        </div>
      `,
    });

    // Update devis with response info
    devis.responded = true;
    devis.responseDate = new Date();
    devis.responseSubject = subject;
    devis.responseMessage = message;
    await devis.save();

    res.json(devis);
  } catch (err) {
    console.error("Erreur envoi réponse devis:", err.message);
    res.status(500).json({ message: "Erreur lors de l'envoi de la réponse." });
  }
};
