/**
 * Validates contact form fields before they reach the controller.
 * Returns 400 with field-level errors when validation fails.
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateContact = (req, res, next) => {
  const { name, email, phone, message } = req.body;
  const errors = [];

  if (!name || typeof name !== "string" || !name.trim()) {
    errors.push({ field: "name", message: "Name is required" });
  }

  if (!email || typeof email !== "string" || !email.trim()) {
    errors.push({ field: "email", message: "Email is required" });
  } else if (!EMAIL_REGEX.test(email.trim())) {
    errors.push({ field: "email", message: "Email must be a valid email address" });
  }

  if (phone !== undefined && phone !== null && phone !== "" && typeof phone !== "string") {
    errors.push({ field: "phone", message: "Phone must be a string" });
  }

  if (!message || typeof message !== "string" || !message.trim()) {
    errors.push({ field: "message", message: "Message is required" });
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors,
    });
  }

  next();
};

module.exports = validateContact;
