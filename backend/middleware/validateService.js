const mongoose = require("mongoose");

const VALID_ICONS = [
  "code2", "brain", "palette", "megaphone", "sparkles", "share2", "search",
  "globe", "smartphone", "monitor", "camera", "video", "pentool", "bot",
  "cpu", "shoppingcart", "barchart3", "rocket", "briefcase", "shieldcheck",
];

function parseFeatures(features) {
  if (Array.isArray(features)) {
    return features.map((f) => String(f).trim()).filter(Boolean);
  }
  if (typeof features === "string") {
    return features
      .split("\n")
      .map((f) => f.trim())
      .filter(Boolean);
  }
  return [];
}

function validateServiceBody(body, { isUpdate = false } = {}) {
  const errors = [];

  if (!isUpdate || body.title !== undefined) {
    if (!body.title || !String(body.title).trim()) {
      errors.push("Le titre est requis.");
    }
  }

  if (!isUpdate || body.shortDescription !== undefined) {
    if (!body.shortDescription || !String(body.shortDescription).trim()) {
      errors.push("La description courte est requise.");
    }
  }

  if (!isUpdate || body.description !== undefined) {
    if (!body.description || !String(body.description).trim()) {
      errors.push("La description est requise.");
    }
  }

  if (!isUpdate || body.category !== undefined) {
    if (!body.category || !String(body.category).trim()) {
      errors.push("La catégorie est requise.");
    }
  }

  if (!isUpdate || body.icon !== undefined) {
    if (!body.icon || !String(body.icon).trim()) {
      errors.push("L'icône est requise.");
    } else if (!VALID_ICONS.includes(String(body.icon).trim())) {
      errors.push("Icône invalide.");
    }
  }

  if (!isUpdate || body.features !== undefined) {
    const features = parseFeatures(body.features);
    if (features.length === 0) {
      errors.push("Au moins une fonctionnalité est requise.");
    }
  }

  if (body.status !== undefined && !["active", "inactive"].includes(body.status)) {
    errors.push("Le statut doit être 'active' ou 'inactive'.");
  }

  return errors;
}

function validateObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

module.exports = {
  validateServiceBody,
  validateObjectId,
  parseFeatures,
  VALID_ICONS,
};
